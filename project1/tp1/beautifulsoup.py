import os
import sys, getopt
from sys import argv


from bs4 import BeautifulSoup
'''testPage = sys.argv[1]
#print(testPage)
soup = BeautifulSoup(testPage, 'html.parser')
print(soup)
css = soup.select('.rules')
#css = soup.find_all("pre", class_="rules")[0].get_text()
print(css)'''
testPage = sys.argv[1]
with open(testPage) as file:
    soup = BeautifulSoup(file, 'html.parser')
    css = soup.select(".rules")[0].get_text()
    print(css)