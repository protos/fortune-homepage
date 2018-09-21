import json

file = open("../data/fortune.dat", 'r')
json_file = open ("../data/fortunes.json", "w")
lines = file.read().split('###')
arr = []

for fortune in lines:
    item = {
        'fortune': fortune
    }
    arr.append(item)

json_file.write(json.dumps(arr))

file.close()
json_file.close()


