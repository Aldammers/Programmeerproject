import csv
import json

# open files and create empty file
csvfile = open('military.csv', 'r')
jsonfile = open('data/military.json', 'w')
data = []
fieldnames = ("Country", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016")

# read csv 
reader = csv.DictReader(csvfile, fieldnames)

# get data array and fill with data
for row in reader:
    data.append(row)

# fill new json file 
json.dump(data, jsonfile, indent = 10)
