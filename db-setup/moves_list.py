from itertools import permutations
import json

# Create permutations of "X", "O" and " " of size 9
permutates = []
coorNames = ["ONNNNNNNN", "OXONNNNNN", "OXOXONNNN", "OXOXOXONN"]
for i in coorNames:
    permutates.append(set(["".join(p) for p in permutations(i)]))
tablesList = set.union(permutates[0], permutates[1], permutates[2], permutates[3])
tablesList = list(tablesList)

# Remove all the tables that are not valid
removeList = []
for i in tablesList:
    if i[0] == i[1] == i[2] == "X" or i[0] == i[1] == i[2] == "O":
        removeList.append(i)
    elif i[3] == i[4] == i[5] == "X" or i[3] == i[4] == i[5] == "O":
        removeList.append(i)
    elif i[6] == i[7] == i[8] == "X" or i[6] == i[7] == i[8] == "O":
        removeList.append(i)
    elif i[0] == i[3] == i[6] == "X" or i[0] == i[3] == i[6] == "O":
        removeList.append(i)
    elif i[1] == i[4] == i[7] == "X" or i[1] == i[4] == i[7] == "O":
        removeList.append(i)
    elif i[2] == i[5] == i[8] == "X" or i[2] == i[5] == i[8] == "O":
        removeList.append(i)
    elif i[0] == i[4] == i[8] == "X" or i[0] == i[4] == i[8] == "O":
        removeList.append(i)
    elif i[2] == i[4] == i[6] == "X" or i[2] == i[4] == i[6] == "O":
        removeList.append(i)

for i in removeList:
    if i in tablesList:
        tablesList.remove(i)


# Configure the final file
data = {}
data['moves'] = []
for i in tablesList:
    for j in range(9):
        if i[j] == "N":
            data['moves'].append({
                'table': i,
                'target': j
            })

# Write the file
with open('moves.json', 'w') as outfile:
    json.dump(data, outfile)
