#!/bin/bash



##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################




pagehtml=$1  #ici la premiere page html au test
#echo $1 la page dacceuil
numeroPage=${pagehtml//[!0-9]/}
#echo $numeroPage
numerotronque=${numeroPage#*3} #couper a partir du deuxieme caractere pour enlever le 3
#echo le numero final $numerotronque


# on va produire deux pages html
# la premiere sera celle brouiller qui demandera d'identifier comment fonctionne le css
# Et la seconde sera la solution au test
pageSansSolution="noSolution$numerotronque.html"  
pageAvecSolution="Solution$numerotronque.html"

#Ps: Recursive pour tout les tests


python3 resultatSansSolution.py $pagehtml $numerotronque > $pageSansSolution
python3 resultatAvecSolution.py $pagehtml $numerotronque > $pageAvecSolution
