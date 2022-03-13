$(document).ready(function(){     

    $("#consultation").click(function(){
        $("#table").hide();
        $("#interfaceConsultation").show();
        $("#concept").show();
        $("#interfaceJeux").hide();
        
    });


    $("#jeux").click(function(){
        $("#table").hide();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
        $("#interfaceJeux").show();
      
    });


    $("#accueil").click(function(){
        $("#table").show();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
        $("#interfaceJeux").hide();
        
    });
  

	showTable()//affiche table
	compter_element() //compte nos elements 

   


});
const relations = new Set()
const concepts = new Set()

let showTable = ()=>{ //afficher la table du json
	const debutTable = $("<table>")
	const finTable = $("</table>")
	debutTable.addClass("table text-center")
	const thead = $("<thead>")
	thead.addClass("thead-dark")
	let tr = $("<tr>")
	tr.append($("<th>").text("Début"))
	tr.append($("<th>").text("Relation"))
	tr.append($("<th>").text("Fin"))
	thead.append(tr)
	debutTable.append(thead) //tete du tableau
	
	$.getJSON("json_dataJ.json", function(data){
		$.each(data.faits, function(index,i){
			//console.log(i)
			
			let tr1 = $("<tr>")
			
			tr1.append($("<td>").text(i['start'].label))
			tr1.append($("<td>").text(i['rel'].label))
			tr1.append($("<td>").text(i['end'].label))
			debutTable.append(tr1)
			

			//compter le reste
			concepts.add(i['start']['@id'])
			concepts.add(i['end']['@id'])
			relations.add(i['rel']['@id'])
			
		})

		//compter le nombre de faits 
		$("#nfm").text(data.faits.length)
		$("#ncd").text(concepts.size)
		$("#nrd").text(relations.size)
		
		
	})
	
	$('#table').append(debutTable)
}

let compter_element = ()=>{
	$()
}

