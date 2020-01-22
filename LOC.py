import math
import os
import random
import re
import sys

def LOC_array_gen(message): #generate an array to contain 2nd and 3rd element for each LOC
    message=message.split("\n")
    LOC_array=[]
    for i in message:
        Edifact=i.split("+")
        if Edifact[0]=="LOC":
            LOC_array.append(Edifact[1:3])
    return LOC_array

given_message="""UNA:+.? '
UNB+UNOC:3+2021000969+4441963198+180525:1225+3VAL2MJV6EH9IX+KMSV7HMD+CUSDECU-IE++1++1'
UNH+EDIFACT+CUSDEC:D:96B:UN:145050'
BGM+ZEM:::EX+09SEE7JPUV5HC06IC6+Z'
LOC+17+IT044100'
LOC+18+SOL'
LOC+35+SE'
LOC+36+TZ'
LOC+116+SE003033'
DTM+9:20090527:102'
DTM+268:20090626:102'
DTM+182:20090527:102'
"""
answer=LOC_array_gen(given_message)
print(answer)





