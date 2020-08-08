const crypto = require("crypto");
const { Console } = require("console");

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

  let index = n % viableDays.length;
  let day = viableDays[index];
  let slot = [];

  for (i = 0; i < count; i++) {
    buff = crypto.randomBytes(2);
    n = parseInt(buff.toString("hex"), 16);
    let s = n % slots[day].length;
    slot.push(slots[day][s]);
    slots[day].splice(s, 1);
  }

  return { day, slot };
};

const generateTimeTable = async (
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

  for (i in sections) {
    let mapp = givenSlots.map((x) => {
      z = [];
      for (j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });
    secInstances[sections[i]] = [];

    classTimeTable[sections[i]] = mapp;
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
    delete mapp, j;
  }
  for (i in sections) {
    for (j in slotSubjTeacInstance) {
      for (let k in slotSubjTeacInstance[j].sections) {
        if (slotSubjTeacInstance[j].sections[k] == sections[i]) {
          slotSubjTeacInstance[j]["mapp"] = [];
          secInstances[sections[i]].push(slotSubjTeacInstance[j]);
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

    let regenerateCountSI = 0;
    let regenerateFlagSI = false;
    let regenerateListSI = {};
    for (j = 0; j < secInstances[sections[i]].length; j++) {
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
      //calculating number of lec that can be divided into working days
      let eachDay = Math.floor(
        secInstances[sections[i]][j].numLectures / numDays
      );
      let extraDays = secInstances[sections[i]][j].numLectures % numDays;
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
          const ret = ranD(availSlots, count);
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
              radCount++;
            } else if (regenerateCountSI < 100) {
              regenerateSI = true;
              regenerateCountSI++;
              flag = false;
              regenerateFlagSI = true;
              if (secInstances[sections[i]][j].mapp[0] == undefined) {
                regenerateListSI = { day: null, slot: null };
              } else {
                regenerateListSI = secInstances[sections[i]][j].mapp[0];
              }
              for (let y in secInstances[sections[i]][j].mapp) {
                for (let w in secInstances[sections[i]][j].mapp.slot) {
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
          break;
        }
      } // numDays

      if (impossible || notPossible || regenerateFlagSec) {
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
  console.log(timeTable[0]);
  return timeTable;
};

module.exports = generateTimeTable;
