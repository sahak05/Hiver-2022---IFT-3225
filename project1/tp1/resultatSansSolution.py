
##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################


import sys
from bs4 import BeautifulSoup



def scramble(text): 
    resultat = ""
    tag=0;
    j  = len(text)
    
    for i in range(0, len(text)):
        if text[i] == '<':
            tag+=1
            j-=1
            resultat+= '<'
            continue
        elif text[i] == '>':
            tag+=1
            j-=1
            resultat+='>'
            continue
        
        if tag%2==0:
            resultat+=text[j-1]
            j-=1
        else: 
            resultat+=text[i]
            j-=1
        
    #print(resultat)
    return resultat




the_page = sys.argv[1]
template = "./template.html"

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
    solution = soup.find(id="solution1")

#avoir un numero de page 
#mais Probleme est que notre numero de page commence par un 3 a chaque fois
#Donc on va devoir l'enlever en dure pour l'utiliser 
numero_page = sys.argv[2]
real_int_numero = int(numero_page)
 

#inserer le css 
template_css.insert(0, css)

#inserer le html pour le quiz
temp_Html.insert(0, scramble(html)) #a brouiller plus tard

#la ou solution
temp_Solution.insert(0, BeautifulSoup(scramble(str(text_without)),"html.parser")) #here to scramble to 

#we want to insert a link for the solution so with that we can change the page
#yes this is not the best way to make it 
solution['href'] = "Solution" + numero_page + ".html"


#now the link #we want to dive on the no answer page for the next and the previous testText
#the same thing like the solution
#remember => 1 and 172 don't have both


if(the_page != "./monrep/3-modsel-1.html"):
    prev_link['href'] = "noSolution" + str(real_int_numero-1) + ".html"

if(the_page != "./monrep/3-modsel-172.html"):
    next_link['href'] = "noSolution"  + str(real_int_numero+1) + ".html"


print(soup.prettify())