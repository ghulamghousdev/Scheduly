# Pseudo Code for Time Table Generator

# Input:

    In this algorithm we will be giving following input to get desired results.

## instances:

            Data Structure which stores info about provided slots to be organized i.e
            [[Ti, Ci, Si, LTi, Li],......,[Tn, Cn, Sn, LTn, Ln]]
            Here
                T = Teacher
                C = Class
                S = Subject
                LT = noOfLectures
                L = Labs
                ins = which keeps record of lecture assigned & will be added in the generate function according to number of slots given

## givenSlots:

            Data structure which stores info about GivenSlots on each day i.e
            [3,4,5,3,2]

## classes:

            Data structure which stores info about Classes(classes) i.e
            ["A", "B"]

## teachers:

            Data structure which stores info about Teachers i.e
            ["T1", "T2"]

# Variables used in the algorithm

- sectionInstances: data structure to store info about each section
- TT: data structure which is initialized with all given slots with 0 and further on the variable containing info about lecture replaces zero which is decided and given that specific slot

- teacherTT: it stores info about each teacher and the slot which he is assigned a lecture
- numOfDays: it stores total working days;

### Flags & Counters to keep track of clashes

- regenerateTimeTableCountSec
- regenerateTimeTableFlagSec: flag to check if there comes any clash
- regenerateTimeTableListSec: Keeps record of input which causes clash
- timeTableNotPossibleCount: keeps count of how many time time table generation fails on specific input
- impossible: it says that it is impossible to generate time table with given data

## Generate-Time-Table(instances, givenSlots, classes, teachers){

```
    let i, j, k, numOfDays = 0
    for (i = 1 to givenSlots.length){
        if givenSlots[i] > 0
        add 1 to numOfDays
    }

    initialize teachers, classes data structure upto number of given slots

    for i in classes
    	for j in instances
    		for k in instances[j].classes
    			if(instances[j].classes[k] == classes[i])
    				instances[j][ins] = []
    				add instances[j] to secInstances at classes[i]
    regenerateCountSec = 0
    regenerateFlagSec =false
    regenerateListSec = []
    notPossibleCount = 0
    impossible = false

    for i in classes
    	if impossible flag is true then return "Table not possible"  & break
    	 notPossible = false
    	 currentTT = [][]
    	 regenerateCountSI = 0
    	 regenerateFlagSI = false
    	 regenerateListSI = []

    	for j in secInstances[classes[i]]
    		availableSlots = []

    		for day in givenSlots
    			let declare an empty data structure daySlots
    			for slot in givenSlots[day]
    				if regenerateFlagSI is true then make slot flag true
    					for a in regenerateListSI.slot
    						make dumFlag false
    						for b in slot
    							if slot at b is equal to regenerateListSI.slot at a then make dumFlag true & break
                            if dum flag is false then make slot flag false and break

                        if( ( (!slotFlag) || (day != regenerateListSI.day)) && (teacherTT[secInstances[classes[i]][j].teacher][day][slot] == 0) && (currentTT[day][slot] == 0))
                            then add slot to daySlots;
                        regenerateFlagSI = false
                    else if regenerateFlagSec is true then make slot flag true
                        for a in regenerateListSI.slot
                            dumFlag = false
                            for b in slot
    	                        if(slot[b] == regenerateListSI.slot[a]) then make dumpFlag True & break
                            if dumFlag is false then make slotFlag = true & break
    					if(( (!slotFlag) || (day != regenerateListSec.day)) &&(teacherTT[secInstances[classes[i]][j].teacher][day][slot] == 0) &&  (currentTT[day][slot] == 0))
                            then make regenerateFlagSec  false
    				elseif((teacherTT[secInstances[classes[i]][j].teacher][day][slot] == 0) && (currentTT[day][slot] == 0))
                        add slot to daySlots and then add daySlots to availableSlots;
            eachDay = secInstances[classes[i]][j].numLectures / numDays
            extraDays = secInstances[classes[i]][j].numLectures % numDays
            for i in range(numDays)
    			if there exits an extra day then add eachDay and plus 1 day to count and decrement extraDays by 1 & repeat else make count equal to each day
                flag = true , radCount = 0
    			while(flag)
    				const buffer = ranD(availableSlots, count)
    			    if((buffer != undefined) && (buffer != null) && (buffer.day != undefined) && (buffer.slot!= undefined) &&  (buffer.day >= 0) && (buffer.day < givenSlots.length) && (buffer.slot.length == count))
                        secInstances[classes[i]][j].push(buffer.day,ret.slot)
                        for z in buffer.slot
                        currentTT[buffer.day][buffer.slot[z]] = secInstances[classes[i]][j]
                        teacherTT[secInstances[classes[i]][j].teacher][buffer.day][buffer.slot[z]] = secInstances[classes[i]][j]
    					availableSlots[buffer.day] = []
                        flag = false
                    else if radCount is less then 10 increment is by 1
                    else if regenerateCountSI is greater then 100 then
                        make regenerateSI and regenerateFlagSI to  true & flag to false
    		            regenerateCountSI = regenerateCountSI + 1
    		            regenerateListSI = secInstances[classes[i]][j].mapp[0]
    					for y in secInstances[classes[i]][j].mapp
    			            for w in secInstances[classes[i]][j].mapp.slot
                                currentTT[secInstances[classes[i]][j].mapp[y].day][secInsances[classes[i]][j].mapp[y].slot[w]] = 0
                                teacherTT[secInstances[classes[i]][j].teacher][secInstances[classes[i]][j].mapp[y].day][secInstances[classes[i]][j].mapp[y].slot[w]] = 0
    					secInstances[classes[i]][j].mapp = []
                        j--
                    else if regenerateCountSec is less then 100)
                        make regenerateSec & regenerateFlagSec to true and flag to false and also make regenerateCountSI = 0 and inc regenerateCountSec by 1
    			        regenerateListSec = secInstances[classes[i]][0].mapp[0]
    				    for x in secInstances[classes[i]]
                            for y in secInstances[classes[i]][x].mapp
    					        for w in secInstances[classes[i]][x].mapp.slot
                                    teacherTT[secInstances[classes[i]][x].teacher][secInstances[classes[i]][x].mapp[y].day][secInstances[classes[i]][x].mapp[y].slot[w]] = 0

    			        for x in secInstances[classes[i]]
    			            secInstances[classes[i]][x].mapp = []
    			        i--
                    else
                        if notPossibleCount is less 1000 then
    				        make flag to false and notPossible to true also make regenerateCountSec = 0 and inc notPossibleCount by 1
    						let i= -1, TT = [], teacherTT = {}, secTT = {}, currentTT = []
                            for u in classes
    					        for v in instances
    						for w in instances[v].classes
    						    if(instances[v].classes[w] == classes[u])
    								instances[v]["mapp"] = []
                                    secInstances[classes[u]].push(instances[v])
    							else make impossible to true and flag to false
                if(impossible ||  notPossible || regenerateFlagSec || regenerateFlagSI) then break
            if( impossible ||  notPossible || regenerateFlagSec) then break
    	if( (!impossible) && (!regenerateFlagSec) && (!notPossible))
            add currentTT to TT
            secTT[classes[i]] = currentTT
    	if notPossible is true then make it false
    	if impossible is true then return("Could not generate in this case, please refresh/restart")
    return TT
```

}

## ranD (slots, count) {

```
    let i, viableDays, slot
    for i in slots
    	if slots[i].length >= count
    		add i in viable days
    if viableDays is empty then return null
    let buff = crypto.randomBytes(2);
    let n = parseInt(buff.toString('hex'),16)
    let index = n % (viableDays.length);
    let day = viableDays[index]
    for i = 0 to count {
    	buff = crypto.randomBytes(2);
    	n = parseInt(buff.toString('hex'),16)
    	let s = n % slots[day].length;
    	slot.push(slots[day][s]);
    	slots[day].splice(s,1);
    	return day, slot
    }
```

}
