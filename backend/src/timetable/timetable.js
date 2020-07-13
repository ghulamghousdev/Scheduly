const crypto = require("crypto");

//Testing inputs
let slots = [
  [1, 2],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];
let c = 0;
let a = () => c++;

// Function to generate the best possible timetable.
const ranD = (slots, count) => {
  let i;
  let viableDays = [];
  for (i in slots) {
    if (slots[i].length >= count) {
      viableDays.push(i);
    }
  }

  if (viableDays.length == 0) return null;

  let buff = crypto.randomBytes(2);
  let n = parseInt(buff.toString("hex"), 16);

  // a(n);

  let index = n % viableDays.length;
  let day = viableDays[index];
  let slot = [];

  for (i = 0; i < count; i++) {
    buff = crypto.randomBytes(2);
    n = parseInt(buff.toString("hex"), 16);
    let s = n % slots[day].length;
    slot.push(slots[day][s]);
    slots[day].splice(s, 1);
    //delete s;
  }

  //delete buff, n, viableDays, i,index;
  //console.log("d/s ",day,slot)
  return { day, slot };
};

const generate = async (
  slotSubjTeacInstance,
  givenSlots,
  teachers,
  sections
) => {
  let secInstances = {};
  let i, j, k;
  let timeTable = [];
  let classTimeTable = {};
  let teacherTimeTable = {};

  let numDays = 0;
  givenSlots.forEach((x) => {
    if (x > 0) numDays++;
  });
  //console.log("sections ", sections);
  //console.log("numDays ", numDays);
  for (i in sections) {
    let mapp = givenSlots.map((x) => {
      z = [];
      for (j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });
    secInstances[sections[i]] = [];
    //  a(secInstances[sections[i]]);
    classTimeTable[sections[i]] = mapp;
    // a(classTimeTable[sections[i]]);
    delete mapp, j;
  }
  for (i in teachers) {
    let mapp = givenSlots.map((x) => {
      z = [];
      for (j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });

    teacherTimeTable[teachers[i]] = mapp;
    // a(teacherTimeTable[teachers[i]]);
    delete mapp, j;
  }
  let a = 0;
  let b = 0;
  for (i in sections) {
    for (j in slotSubjTeacInstance) {
      for (let k in slotSubjTeacInstance[j].sections) {
        if (slotSubjTeacInstance[j].sections[k] == sections[i]) {
          slotSubjTeacInstance[j]["mapp"] = [];
          secInstances[sections[i]].push(slotSubjTeacInstance[j]);
          //a(secInstances[0]);
        }
      }
    }
  }

  //console.log("sec ", secInstances, "tech ", teacherTimeTable, "sec ", classTimeTable);
  let regenerateCountSec = 0;
  let regenerateFlagSec = false;
  let regenerateListSec = {};
  let notPossibleCount = 0;
  let impossible = false;
  for (i = 0; i < sections.length; i++) {
    if (impossible) {
      console.log("Table Not Possible");
      break;
    }

    let notPossible = false;
    let inProcessTimeTable = givenSlots.map((x) => {
      //Creating a new empty time table and filling it with 0's
      z = [];
      for (j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });
    //  console.log("inProcessTimeTable ", typeof inProcessTimeTable, inProcessTimeTable);

    let regenerateCountSI = 0;
    let regenerateFlagSI = false;
    let regenerateListSI = {};
    for (j = 0; j < secInstances[sections[i]].length; j++) {
      a++;
      // console.log("hey", "i \t", i, "j \t", j);
      let availSlots = [];
      for (day = 0; day < givenSlots.length; day++) {
        //In this case number length of slots will b equal to number of days
        let daySlots = [];
        for (slot = 0; slot < givenSlots[day]; slot++) {
          //This loop will iterate through number of slots on each given day
          if (regenerateFlagSI) {
            let slotFlag = true;
            for (let a in regenerateListSI.slot) {
              let dumFlag = false;
              for (let b in slot) {
                if (slot[b] == regenerateListSI.slot[a]) {
                  dumFlag = true;
                  break;
                }
              }
              if (!dumFlag) {
                slotFlag = false;
                break;
              }
            }

            if (
              (!slotFlag || day != regenerateListSI.day) &&
              teacherTimeTable[secInstances[sections[i]][j].teacher][day][
                slot
              ] == 0 &&
              inProcessTimeTable[day][slot] == 0
            ) {
              daySlots.push(slot);
            }
            regenerateFlagSI = false;
          } else if (regenerateFlagSec) {
            //skipped this blog
            let slotFlag = true;
            for (let a in regenerateListSI.slot) {
              let dumFlag = false;
              for (let b in slot) {
                if (slot[b] == regenerateListSI.slot[a]) {
                  dumFlag = true;
                  break;
                }
              }
              if (!dumFlag) {
                slotFlag = false;
                break;
              }
            }
            if (
              (!slotFlag || day != regenerateListSec.day) &&
              teacherTimeTable[secInstances[sections[i]][j].teacher][day][
                slot
              ] == 0 &&
              inProcessTimeTable[day][slot] == 0
            ) {
              regenerateFlagSec = false;
            }
          }
          if (
            //Reviewing this code first
            teacherTimeTable[secInstances[sections[i]][j].teacher][day][slot] ==
              0 &&
            inProcessTimeTable[day][slot] == 0
          ) {
            daySlots.push(slot);
          }
        }
        availSlots.push(daySlots);
      }

      // console.log("INFO", sections[i], j, "avai\t", availSlots);
      //calculating number of lec that can be divided into working days
      let eachDay = Math.floor(
        secInstances[sections[i]][j].numLectures / numDays
      );
      let extraDays = secInstances[sections[i]][j].numLectures % numDays;

      //console.log("extra days ", numDays);

      for (let x = 0; x < numDays; x++) {
        let count;
        if (extraDays > 0) {
          count = eachDay + 1;
          extraDays--;
        } else {
          count = eachDay;
        }
        let flag = true;
        let radCount = 0;
        while (flag) {
          //console.log("call after red count ", availSlots, count);
          const ret = ranD(availSlots, count);
          // console.log("ret", ret);
          // console.log(count);
          // console.log("timeTable", inProcessTimeTable);
          if (
            ret != undefined &&
            ret != null &&
            ret.day != undefined &&
            ret.slot != undefined &&
            ret.day >= 0 &&
            ret.day < givenSlots.length &&
            ret.slot.length == count
          ) {
            secInstances[sections[i]][j].mapp.push({
              day: ret.day,
              slot: ret.slot,
            });
            for (let z in ret.slot) {
              inProcessTimeTable[ret.day][ret.slot[z]] =
                secInstances[sections[i]][j];
              teacherTimeTable[secInstances[sections[i]][j].teacher][ret.day][
                ret.slot[z]
              ] = secInstances[sections[i]][j];
            }
            availSlots[ret.day] = [];
            flag = false;
          } else {
            if (radCount < 10) {
              //console.log("rad", radCount, j);
              radCount++;
            } else if (regenerateCountSI < 100) {
              //For regenration of timeTable setimeTableing timeTable eqauls to empty
              regenerateSI = true;
              regenerateCountSI++;
              flag = false;
              regenerateFlagSI = true;
              if (secInstances[sections[i]][j].mapp[0] == undefined) {
                regenerateListSI = { day: null, slot: null };
              } else {
                regenerateListSI = secInstances[sections[i]][j].mapp[0];
              }

              // console.log(
              //   "regSI",
              //   regenerateCountSI,
              //   regenerateCountSI,
              //   regenerateListSI
              // );
              //console.log("hey", "i \t", i, "j \t", j);
              for (let y in secInstances[sections[i]][j].mapp) {
                for (let w in secInstances[sections[i]][j].mapp.slot) {
                  b++;
                  inProcessTimeTable[secInstances[sections[i]][j].mapp[y].day][
                    secInstances[sections[i]][j].mapp[y].slot[w]
                  ] = 0;
                  teacherTimeTable[secInstances[sections[i]][j].teacher][
                    secInstances[sections[i]][j].mapp[y].day
                  ][secInstances[sections[i]][j].mapp[y].slot[w]] = 0;
                }
              }
              secInstances[sections[i]][j].mapp = [];
              j--;
            } else {
              if (regenerateCountSec < 100) {
                b++;
                //console.log("regenerateCountSec",regenerateCountSI, regenerateCountSec)
                regenerateCountSI = 0;
                regenerateSec = true;
                regenerateCountSec++;
                regenerateFlagSec = true;
                flag = false;
                if (secInstances[sections[i]][j].mapp[0] == undefined) {
                  regenerateListSec = { day: null, slot: null };
                } else {
                  regenerateListSec = secInstances[sections[i]][0].mapp[0];
                }
                for (let x in secInstances[sections[i]]) {
                  for (let y in secInstances[sections[i]][x].mapp) {
                    for (let w in secInstances[sections[i]][x].mapp.slot) {
                      b++;
                      teacherTimeTable[secInstances[sections[i]][x].teacher][
                        secInstances[sections[i]][x].mapp[y].day
                      ][secInstances[sections[i]][x].mapp[y].slot[w]] = 0;
                    }
                  }
                }
                for (x in secInstances[sections[i]])
                  secInstances[sections[i]][x].mapp = [];
                i--;
              } else {
                if (notPossibleCount < 1000) {
                  flag = false;
                  regenerateCountSec = 0;
                  console.log("notPossibleCount", notPossibleCount);
                  notPossible = true;
                  notPossibleCount++;
                  i = -1;
                  timeTable = [];
                  teacherTimeTable = {};
                  classTimeTable = {};
                  inProcessTimeTable = [];
                  for (let u in sections) {
                    let mapp = givenSlots.map((x) => {
                      z = [];
                      for (let w = 0; w < x; w++) {
                        z.push(0);
                      }
                      return z;
                    });
                    secInstances[sections[u]] = [];
                    classTimeTable[sections[u]] = mapp;
                    delete mapp;
                  }
                  for (u in teachers) {
                    let mapp = givenSlots.map((x) => {
                      z = [];
                      for (w = 0; w < x; w++) {
                        z.push(0);
                      }
                      return z;
                    });
                    teacherTimeTable[teachers[u]] = mapp;
                    delete mapp;
                  }
                  for (let u in sections) {
                    for (let v in slotSubjTeacInstance) {
                      for (let w in slotSubjTeacInstance[v].sections) {
                        c++;
                        if (
                          slotSubjTeacInstance[v].sections[w] == sections[u]
                        ) {
                          slotSubjTeacInstance[v]["mapp"] = [];
                          secInstances[sections[u]].push(
                            slotSubjTeacInstance[v]
                          );
                        }
                      }
                    }
                  }

                  //console.log("not" , " ", i, " ", j)
                } else {
                  impossible = true;
                  flag = false;
                }
              }
            }
          }
        } // flag

        if (
          impossible ||
          notPossible ||
          regenerateFlagSec ||
          regenerateFlagSI
        ) {
          // console.log("break1", i, j);
          a++;
          // console.log(a);
          break;
        }
      } // numDays

      if (impossible || notPossible || regenerateFlagSec) {
        //console.log("break2", i, j);
        break;
      }
    } // j
    if (!impossible && !regenerateFlagSec && !notPossible) {
      timeTable.push(inProcessTimeTable);
      classTimeTable[sections[i]] = inProcessTimeTable;
    }

    if (notPossible) {
      notPossible = false;
    }
    if (impossible) {
      console.log("Could not generate in this case, please refresh/restart.\n");
      break;
    }
  }
  // console.log("timeTable", timeTable[1], notPossibleCount);

  // for (let i in timeTable["T1"]) {
  //   for (let j in timeTable["T1"][i]) {
  //     console.log(timeTable["T1"][i][j].mapp);
  //   }
  // }

  console.log(timeTable);
  //console.log("SDFGHJKLLGFGGHJ");
};

//Testing input
generate(
  [
    {
      teacher: "Samyan",
      sections: ["A"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["B"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["C"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Awais Hasan",
      sections: ["A"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Awais Hasan",
      sections: ["B"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["C"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["A"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["B"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["C"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["A"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Irfan",
      sections: ["B"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Samyan",
      sections: ["C"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Amina",
      sections: ["A"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Amina",
      sections: ["B"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Amina",
      sections: ["C"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "A",
      sections: ["A1"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "A",
      sections: ["B1"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "A",
      sections: ["C1"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "B",
      sections: ["A1"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "B",
      sections: ["B1"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "C",
      sections: ["C1"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "D",
      sections: ["A1"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "D",
      sections: ["B1"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "D",
      sections: ["C1"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "E",
      sections: ["A1"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "E",
      sections: ["B1"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "F",
      sections: ["C1"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "G",
      sections: ["A1"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "G",
      sections: ["B1"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "G",
      sections: ["C1"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "H",
      sections: ["A2"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "H",
      sections: ["B2"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "H",
      sections: ["C2"],
      subject: "AOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "J",
      sections: ["A2"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "J",
      sections: ["B2"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "J",
      sections: ["C2"],
      subject: "DBMS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "K",
      sections: ["A2"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "K",
      sections: ["B2"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "K",
      sections: ["C2"],
      subject: "TOA",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "L",
      sections: ["A2"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "L",
      sections: ["A2"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "Q",
      sections: ["C2"],
      subject: "Calculus",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "W",
      sections: ["A2"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "W",
      sections: ["B2"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
    {
      teacher: "W",
      sections: ["B2"],
      subject: "OS",
      numLectures: "3",
      numLabs: null,
    },
  ],
  [7, 7, 7, 7, 7],
  [
    "Samyan",
    "Awais Hasan",
    "Amina",
    "Maam",
    "Irfan",
    "Touqeer",
    "Atif",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "K",
    "W",
    "E",
    "Q",
    "Z",
    "V",
    "M",
    "N",
    "L",
    "J",
  ],
  ["A", "B", "C", "A1", "B1", "C1", "A2", "B2", "C2"]
);
