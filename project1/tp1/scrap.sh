#!/bin/bash



##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################

set -e

# URL de l'index des tests (trouvée en regardant la source de n'importe quel test...)
URL=https://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/full/flat/index.html


# Validation du nom du dossier pour conenir les pages html
if [[ -z $1 ]]; then
  echo "Inscrivez le nom du dossier apres $(basename $0)" #ici monrep
  exit 1
fi

# Creation du dossier
mkdir -p $1

# Scrapping
wget --recursive -l 1 --no-host-directories --directory-prefix=$1 --no-parent robots=off -nd --reject "index.html*" --reject "robots.txt*" $URL