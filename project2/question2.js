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
        $("#recherche").hide();
      
    });


    $("#accueil").click(function(){
        $("#table").show();
        $("#interfaceConsultation").hide();
        $("#concept").hide();
        $("#interfaceJeux").hide();
        
    });

	showTable()//affiche table

	recherche()


});
const relations = new Set()
const concepts = new Set()

let showTable = ()=>{ //afficher la table du json
	//$('#table2').empty()
	const debutTable = $("<table>")
	debutTable.addClass("table text-center  table-info table-striped")
	debutTable.attr("id","tablefait")
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
			console.log(data.faits.length)
			
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
	
	$('#table2').append(debutTable)	
}


const recherche=()=>{

	$('#submit').click(function(){ //apres le click dans l'interface consultation
		let concepts = $('#concepts').val()
		let relations = $('#relations').val()
		//console.log(concepts, relations)
		let url=""
		if(concepts && relations){
			url = 'https://api.conceptnet.io/query?node='
			+concepts+'&rel='+
			relations+'&limit=1000'
		}
		else if(concepts){
			url = 'https://api.conceptnet.io/query?node='
			+concepts
			+'&limit=1000'
		}
		else if(relations){
			url = 'https://api.conceptnet.io/query?rel='
			+relations
			+'&limit=1000'
		}
		//lorsque concept et relation
		recherche_sous(url)
		

		//Maintenant gerer comment completer le tableau
		//a faire dans la fonction recherche_sous
	})
}


const recherche_sous = (url)=>{

	$("#resultatSubmit").empty();
	console.log(url)
		let tableau=[];
		$.ajax({
			type:'GET',
			url:url,
			success: function(data){
				//console.log(data)
				console.log('here data', data)
				$.each(data.edges, function(index, value){
					let arrayJson = {"start": "", "end":"", "rel":""}
					//console.log(value)
					if((value['end']['language']=='en' || value['end']['language']=='fr')
					&&
					(value['start']['language']=='en' || value['start']['language']=='fr')
					){
						arrayJson['start']= value.start
						arrayJson['end']= value.end
						arrayJson['rel']= value.rel
						tableau.push(arrayJson)
					}
				})
				console.log(tableau)

				/**
				 * fusionner les tableaux
				*/

				ajoutTable(tableau)


				/**
				 * 
				 * 
				 * 
				 * 
				 * 
				 * creation du tableau
				*/

				const debutTable = $("<table>")
			    debutTable.addClass("table text-center  table-danger table-striped")
				debutTable.attr("id","tablefait")
				const thead = $("<thead>")
				thead.addClass("thead-dark")
				let tr = $("<tr>")
				tr.append($("<th>").text("Début"))
				tr.append($("<th>").text("Relation"))
				tr.append($("<th>").text("Fin"))
				thead.append(tr)
				debutTable.append(thead) //tete du tableau
		 
				tableau.forEach((item, index)=>{
					//console.log(here)
					let tr1 = $("<tr>")
					 
					tr1.append($("<td>").text(item['start'].label))
					tr1.append($("<td>").text(item['rel'].label))
					tr1.append($("<td>").text(item['end'].label))
					debutTable.append(tr1)
				})
				//$("#resultatSubmit").empty();
				$('#resultatSubmit').append(debutTable)


				//Maintenant si on a view faire pagination

				if(data.view){
					if(data.view['firstPage']){
						console.log("you smart")
						$("#prev").click(function(e){
							e.preventDefault();
							recherche_sous('https://api.conceptnet.io'+data.view.firstPage);
						})
					}

					if(data.view.nextPage){
						$("#suiv").click(function(e){
							e.preventDefault();
							recherche_sous('https://api.conceptnet.io'+data.view.nextPage);
						})
					}
				}
			}
		})
}


const ajoutTable = (table)=>{

	table.forEach((item, index)=>{
		//console.log(here)
		let tr1 = $("<tr>")
		 
		tr1.append($("<td>").text(item['start'].label))
		tr1.append($("<td>").text(item['rel'].label))
		tr1.append($("<td>").text(item['end'].label))
		$('#tablefait').append(tr1)

		concepts.add(item['start']['@id'])
		concepts.add(item['end']['@id'])
		relations.add(item['rel']['@id'])
	})

	//compter le nombre de faits 
	$("#nfm").text(parseInt($('#nfm').text())+table.length)
	$("#ncd").text(concepts.size)
	$("#nrd").text(relations.size)
}
