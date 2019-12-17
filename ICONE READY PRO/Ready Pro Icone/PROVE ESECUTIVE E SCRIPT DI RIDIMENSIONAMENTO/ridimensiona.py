import os
from PIL import Image

# define the path
basepath = input("Basepat es: ./a/: ")
outpath = "./OUTPUT/"
fileNames = os.listdir(basepath)

basesize = int(input("Inserisci la dimensione in pixel del lato del quadrato")) 
padding = basesize - 2
paddingsize = (basesize - padding) / 2

count = 0
for i in fileNames:
	if i==".DS_Store":
		fileNames.pop(count)

	count+= 1 

for i in fileNames:
	
	im = Image.open(basepath + i)
	width, height = im.size
	
	transparent = Image.new('RGBA', (basesize, basesize), (0,0,0,0))

	if width > height:

		## Piu lunga  
		im.thumbnail((padding,padding), Image.ANTIALIAS)
		
		w, h = im.size
		gap = basesize - h

		offset = 0

		if gap > 1:
			offset = (gap / 2)
			print(offset) 

		transparent.paste(im, (int(paddingsize),int(offset)))
		
	else:
		## Piu alta
		im.thumbnail((padding,padding), Image.ANTIALIAS)

		w, h = im.size
		gap = basesize - w 

		offset = 0
		
		if gap > 1:
			offset = gap / 2

		transparent.paste(im, (int(offset),int(paddingsize)))

	transparent.save(outpath+i, "PNG")
