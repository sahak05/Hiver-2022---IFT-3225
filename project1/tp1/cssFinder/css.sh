#!/bin/bash


##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################

#i=1
for FILE in "../monrep"/*; do

	i1=${FILE//[!0-9]/}
    i2=${i1#*3}
    python3 beautifulsoup.py $FILE $i2
    sass --error-css "mySaas$i2.scss" "style$i2.css"
    #echo $saasFile
    #print(css)
    i=$((i+1))
done