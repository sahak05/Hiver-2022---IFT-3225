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
	
	$.getJSON("json_dataJ.json", function(data){
		$.each(data.faits, function(index,i){
			//console.log(i)
			
			let tr1 = $("<tr>")
			
			tr1.append($("<td>").text(i['start'].label))
			tr1.append($("<td>").text(i['rel'].label))
			tr1.append($("<td>").text(i['end'].label))
			debutTable.append(tr1)
		
			
		})
	})
	
	
	/*$.ajax({
		type:"GET",
		url:"json_dataJ.json",
		success:function(data){
			$.each(data.faits, function(i){
			
				$.each(i, function(key, value){
					let tr1 = $("<tr>")
					tr1.append($("<td>").text(value['start']['label']))
					tr1.append($("<td>").text(value['rel']['label']))
					tr1.append($("<td>").text(value['end']['label']))
					debutTable.append(tr1)
				})
				
			})	
		}
	});*/
	$('#table').append(debutTable)
}

