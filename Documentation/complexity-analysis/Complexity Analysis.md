# Time Complexity Analysis of Pseudo Code 

    We will analyze line by line and at the end will get sum of all the costs.

## Generate-Time-Table(instances, givenSlots, classes, teachers){

```
    //We will use these variables to make our analysis easier to understand
    givenSlots = m
    noOfDays = d
    classes = c
    noOfnstances = n


    let i, j, k
    let numOfDays = 0 ---------------------->  1
    for (i = 1 to givenSlots.length){----------------------> d+1
        if givenSlots[i] > 0----------------------> d
        add 1 to numOfDays ----------------------> d
    }

    initialize teachers, classes data structure upto number of given slots

    for i in classes   ---------------------->  c+1
    	for j in instances   ---------------------->  nc + c
    		for k in instances[j].classes----------------------> (n)(c)+nc
    			if(instances[j].classes[k] == classes[i]) ----------------------> nc
    				instances[j][ins] = []  ---------------------->nc
    				add instances[j] to secInstances at classes[i]  ----------------------> nc
    regenerateCountSec = 0    ---------------------->  1
    regenerateFlagSec =false   ----------------------> 1
    regenerateListSec = []   ----------------------> 1
    notPossibleCount = 0    ---------------------->   1
    impossible = false      ---------------------->  1

    for i in classes   ---------------------->c+1
    	if impossible flag is true then return "Table not possible"  & break  ----------------------> c+c+c
    	 notPossible = false    ----------------------> c
    	 currentTT = [][]    ---------------------->   c
    	 regenerateCountSI = 0   ---------------------->   c
    	 regenerateFlagSI = false    ---------------------->   c
    	 regenerateListSI = []   ----------------------> c

    	for j in secInstances[classes[i]]  ----------------------> cc+c
    		availableSlots = []  ---------------------->  cc

    		for day in givenSlots  ----------------------> dcc+cc
    			let declare an empty data structure daySlots  ----------------------> dcc
    			for slot in givenSlots[day] ----------------------> dcc*m + dcc


                  As we know the probability of the running of this code block is very low because it only run when need to generate whole timetable from the start. So using Probabilistic analysis we found out that running time of inner code is assumed 1 using probabilistic analysis So we will not need to calculate the running cost of each line in this block.


    				if regenerateFlagSI is true then make slot flag true  ----------------------> dccm * 1
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
            eachDay = secInstances[classes[i]][j].numLectures / numDays ----------------------> cc
            extraDays = secInstances[classes[i]][j].numLectures % numDays  ----------------------> cc
            for i in range(numDays)  ----------------------> dcc+cc
    			if there exits an extra day then add eachDay and plus 1 day to count and decrement extraDays by 1 & repeat ----------------------> dcc+dcc+dcc
                else make count equal to each day ----------------------> dcc
                flag = true , radCount = 0    ----------------------> dcc+dcc


               As we know the probability of the running of the three nested loops inside the while is very low, So using Probabilistic analysis we found out that running time of while loop will be 1 as the probability is relatively very higher that loop will only execute in each iteration of outer for loop.


    			while(flag)  ----------------------> dcc * 1
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
                if(impossible ||  notPossible || regenerateFlagSec || regenerateFlagSI) then break----------------------> dcc+dcc
            if( impossible ||  notPossible || regenerateFlagSec) then break ---------------------->cc+cc
    	if( (!impossible) && (!regenerateFlagSec) && (!notPossible))  ----------------------> c
            add currentTT to TT ---------------------->  c
            secTT[classes[i]] = currentTT ---------------------->  c
    	if notPossible is true then make it false   ---------------------->  c+c
    	if impossible is true then return("Could not generate in this case, please refresh/restart") ----------------------> c+c
    return TT    ---------------------->   1
```

}

## ranD (slots, count) {

```
    let i, viableDays, slot ----------------------> 1+1+1
    for i in slots  ----------------------> d+1
    	if slots[i].length >= count  ----------------------> d
    		add i in viable days  ----------------------> d
    if viableDays is empty then return null  ----------------------> 1+1
    let buff = crypto.randomBytes(2);  ----------------------> 1
    let n = parseInt(buff.toString('hex'),16)  ----------------------> 1
    let index = n % (viableDays.length);   ---------------------->  1
    let day = viableDays[index]    ----------------------> 1
    for i = 0 to count {    ---------------------->  d+1
    	buff = crypto.randomBytes(2);   ----------------------> d
    	n = parseInt(buff.toString('hex'),16)  ---------------------->  d
    	let s = n % slots[day].length;  ----------------------> d
    	slot.push(slots[day][s]);  ----------------------> d
    	slots[day].splice(s,1);  ----------------------> d
    }
    return day, slot  ----------------------> 1
```

}

## Time Complexity Calculations

In the above block we have calculated the running costs for each line and now we will sum all the costs for every line to find the total complexity of algorithm.

1 + d+1 + d + d c+1 nc+c + (n)(c)+nc + nc + nc + nc + 1 + 1 + 1 + c+1 + c+c+c + c + c + c + c + c + cc+c + cc + dcc+cc + dcc + dccm+dcc + dccm + cc + cc + dcc+cc + dcc + dcc+dcc + dcc + dcc+dcc + cc+cc + c + c + c c+c + c+c +
1+1+1 + d+1 + d + d + 1+1 + 1 + 1 + 1 + 1 + d+1 + d + d + d + d + d + 1

After further simplifying these numbers, we have

2d(c^2)m + 10d(c^2) + 6nc + 7(c^2) + 19c + 12d + 19

Now we will choose the polynomial of highest order and after  droping the coeficients we will get the desired time complexity for our algorithm which is 
- O(d(c^2)m)



