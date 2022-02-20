#!/bin/sh


##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################

mkdir -p $2
#copier les fichiers py pour pouvoir creer les fichier dedans
#cp resultatAvecSolution.py $2
#cp resultatSansSolution.py $2
#cd $2


for i in $1/*
do
    ./transf.sh "$i"
done

for j in Solution*
do
	chmod og+r $j
	mv $j $2
done

for j in noSolution*
do
	chmod og+r $j
	mv $j $2
done
