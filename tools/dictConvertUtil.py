## [
# { nld: "Word", eng: "Word" }
# { nld: "Word", eng: "Word" }
# { nld: "Word", eng: "Word" }
# { nld: "Word", eng: "Word" }
## ]

from xml.dom import minidom
import json


xmlDoc = minidom.parse("../data/nld-eng.tei")
json_file = open ("../data/nld-eng.json", "w")

wordList = xmlDoc.getElementsByTagName('entry')
arr = []

for word in wordList:
    englishString = ""
    for meaning in word.getElementsByTagName('sense'):
        englishString += meaning.getElementsByTagName('quote')[0].firstChild.data + " / "
    englishString = englishString[:-3]
    node = {
        'nld':word.getElementsByTagName('orth')[0].firstChild.data,
        'eng':englishString
    }
    print node
    arr.append(node)

json_file.write(json.dumps(arr))
json_file.close()


