import os


basepath = "./vecchie/32x32/"
controllopath = "./OUTPUT/32x32/"

#Rimuovo le estensioni dei file 
fileNamesA = [word[:-4] for word in os.listdir(basepath)]
fileNamesB = [word[:-4] for word in os.listdir(controllopath)]

for i in fileNamesA:
	filecheck = (i in fileNamesB)
	if filecheck == False:
		print (i)