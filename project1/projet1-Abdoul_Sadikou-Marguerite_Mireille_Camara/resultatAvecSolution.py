
##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################


#Same code as resultatSansSolution.py with some differents parts


import sys
from bs4 import BeautifulSoup


the_page = sys.argv[1]
template = "./templateSolution.html"

with open(the_page) as file:
    soup = BeautifulSoup(file, 'html.parser')
    css = soup.select(".rules")[0].get_text()
    html = soup.select(".rules")[1].get_text()
    text_without = soup.select(".testText")[0]
    
    

with open(template) as file:
    soup = BeautifulSoup(file, 'html.parser')
    template_css = soup.select(".forCss")[0]
    temp_Html = soup.select(".forHtml")[0]
    temp_Solution = soup.select(".solution")[0]
    prev_link = soup.find(id="prev")
    next_link = soup.find(id="next")
    #solution = soup.find(id="solution1")



#inserer le css 
template_css.insert(0, css)

#inserer le html pour le quiz
temp_Html.insert(0, html) #a brouiller plus tard

#la ou solution
temp_Solution.insert(0, text_without) #here to scramble to 

#add style
newTag = soup.new_tag("style")
newTag.string = css
soup.html.head.append(newTag)   #but this apply all the html
#soup.find_all(id="1")[0]["style"]=css #.style.insert(0, css)
#soup.style.insert(0, css)


#now the link #we want to dive on the no answer page for the next and the previous testText
#the same thing like the solution
#remember => 1 and 172 don't have both

#avoir un numero de page 
#mais Probleme est que notre numero de page commence par un 3 a chaque fois
#Donc on va devoir l'enlever en dure pour l'utiliser 
numero_page = sys.argv[2]
real_int_numero = int(numero_page)
 

if(the_page != "./monrep/3-modsel-1.html"):
    prev_link['href'] = "noSolution" + str(real_int_numero-1) + ".html"

if(the_page != ",/monrep/3-modsel-172.html"):
    next_link['href'] = "noSolution"  + str(real_int_numero+1) + ".html"


print(soup.prettify())