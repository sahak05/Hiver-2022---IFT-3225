

##################################
#   Abdoul Sadikou 20158628      #
#                                #
#   Marguerite Camara 20143122   #
##################################
import os
import sys, getopt
from sys import argv


from bs4 import BeautifulSoup
i = sys.argv[2]
'''def beautifulsoup():
    testPage = sys.argv[1]
    with open(testPage) as file:
        soup = BeautifulSoup(file, 'html.parser')
        css = soup.select(".rules")[0].get_text()
        return css

print(beautifulsoup())'''

fichier = "mySaas"+i+".scss"
testPage = sys.argv[1]
with open(testPage) as file:
    soup = BeautifulSoup(file, 'html.parser')
    css = soup.select(".rules")[0].get_text()
    mySaas = open(fichier, "w+")
    mySaas.write(css)
    mySaas.close()
