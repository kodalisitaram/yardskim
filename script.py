#!/usr/bin/env python3
from __future__ import print_function
import time
import binascii
from datetime import datetime
import mercury
import AEITagParser as tReader
reader = mercury.Reader("tmr:///dev/ttyUSB0", baudrate=115200)

#print(reader.get_model())
#print(reader.get_supported_regions())

reader.set_region("NA")
reader.set_read_plan([1,2,3,4], "ATA")
#print(reader.read())
tagList = []
reader.start_reading(lambda tag: tagList.append(tag.epc))
#reader.start_reading(tag: tReader.AEITagParser(tag.epc),5000,0)
#epcs = map(lambda t: t.epc, reader.read(3000))
time.sleep(5)
reader.stop_reading()
#print(list(tagList))
#print("---------------------")
#print(list(set(list(tagList)))) 
tReader.AEITagParser(list(set(list(tagList))))
