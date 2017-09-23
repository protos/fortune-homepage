#{
#    fortunes: [
#        {fortune: 'sssssss'},
#        {fortune: 'sssssss'},
#        {fortune: 'sssssss'},
#        {fortune: 'sssssss'},
#        {fortune: 'sssssss'},        
#    ]
#}



import json

file = open("fortune.dat", 'r')
json_file = open ("fortunes.json", "w")
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


