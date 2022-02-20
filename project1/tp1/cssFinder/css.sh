#!/bin/bash


##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################

i=1
for FILE in "../monrep"/*; do
    python3 beautifulsoup.py $FILE $i
    sass --error-css "mySaas$i.scss" "style$i.css"
    #echo $saasFile
    #print(css)
    i=$((i+1))
done