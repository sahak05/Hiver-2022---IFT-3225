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
  

	showTable()

   


});


let showTable = ()=>{
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
	
	/*$.getJSON("json_dataJ", function(data){
		$.each(data.faits, function(i){
			>
			$.each(i, function(key, value){
				let tr1 = $("<tr>")
				let tr2 = tr1.append($("<td>").text(value['start']['label']))
				let tr3 = tr1.append($("<td>").text(value['rel']['label']))
				let tr4 = tr1.append($("<td>").text(value['end']['label']))
				debutTable.append(tr1)
			})
			
		})
	})*/
	
	
	/*$.ajax({
		type:"GET",
		url:"json_dataJ.json",
		success:function(data){
			$.each(data.faits, function(i){
			
				$.each(i, function(key, value){
					let tr1 = $("<tr>")
					let tr2 = tr1.append($("<td>").text(value['start']['label']))
					let tr3 = tr1.append($("<td>").text(value['rel']['label']))
					let tr4 = tr1.append($("<td>").text(value['end']['label']))
					debutTable.append(tr1)
				})
				
			})	
		}
	});*/
	$('#table').append(debutTable)
}

