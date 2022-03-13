##################################
#	Abdoul Sadikou 20158628      #
#								 #
#  	Marguerite Camara 20143122   #
##################################



import requests
import random
import json

#ici tootes les relations de conceptNet
listeRelations = ["/r/RelatedTo", "/r/FormOf",
 "/r/isA", "/r/PartOf", "/r/HasA",
 "/r/UsedFor", "/r/CapableOf",
 "/r/AtLocation", "/r/Causes",
 "/r/HasSubevent", "/r/HasFirstSubevent",
 "/r/HasLastSubevent", "/r/HasPrerequisite",
 "/r/HasProperty", "/r/MotivatedByGoal",
 "/r/ObstructedBy", "/r/Desires",
 "/r/CreatedBy", "/r/Synonym", "/r/Antonym",
 "/r/DistinctFrom", "/r/DerivedFrom", "/r/SymbolOf",
 "/r/DefinedAs", "/r/MannerOf", "/r/LocatedNear",
 "/r/HasContext", "/r/SimilarTo", "/r/EtymologicallyRelatedTo", 
 "/r/EtymologicallyDerivedFrom", "/r/CausesDesire", "/r/MadeOf",
 "/r/ReceivesAction", "/r/ExternalURL"
] 


# on doit recolter 100 faits de la forme start, relation, end et on doit en quelques sorte le retourner en json 
listeStart = []
listeFin = []
listeRel = []
langue = ['/c/en', '/c/fr']


while len(listeStart)<=100:
    for x in langue:
        resultat = {"start": "", "end":"", "rel":""}
        i = random.randint(0, len(listeRelations)-1)
        #i = int(i)
        relation = listeRelations[i] #une relation du tableau
        requete = 'https://api.conceptnet.io/query?rel='+relation+'&other='+x+'&limit=1000'
        obj = requests.get(requete).json()
        #print(obj)
        #print(len(obj['edges'])-1)
        #il faut eviter les array edges vides
        if len(obj['edges'])-1 <= 0:
            continue #avancer 
            
        index = random.randint(0, len(obj['edges'])-1)
        
        if obj['edges'][index]['start']['language']=='en' or obj['edges'][index]['start']['language']=='fr': 
            #print(obj['edges'][index]['start']['language'])
            #continue
            print(obj['edges'][index]['start'])
            resultat["start"] = obj['edges'][index]['start']
            resultat["rel"] = obj['edges'][index]['rel']
            resultat["end"] = obj['edges'][index]['end']
            listeStart.append(resultat)
            #listeStart.append(obj['edges'][index]['start'])
            #listeRel.append(obj['edges'][index]['rel'])
            #listeFin.append(obj['edges'][index]['end'])
    

result = {"faits":""}
#resultat = {"start": "", "end":"", "rel":""}
#resultat["start"] = listeStart
#resultat["rel"] = listeRel
result["faits"] = listeStart

#https://stackabuse.com/reading-and-writing-json-to-a-file-in-python/
#json
json_string = json.dumps(result)
with open('json_dataJ.json', 'w') as outfile:
    outfile.write(json_string)