let url;

$(document).ready(function(e){
    $("#jeuConsigne").click(function () {
        $("#interfaceJeuOuiNon").hide();
        $("#interfaceConsigne").show();

    });
    
    $('#demarrer').click(function(){
        $("#put").attr("disabled", false);
        showconsigne()//affiche le questionnaire
    })
    

    $('#put').click(function(){
        $("#put").attr("disabled", true);
        

        $('#resultatConsigne').empty()
        let valeurR = $('#resultC').val()+"," 
        valeurR = valeurR.split(',')
        let tab=[]
        console.log(valeurR)


       $.ajax({
            type:'GET',
            url:url,
            success: function(data){
                //.log('here data', data)
                $.each(data.edges, function(index, val){
                    tab.push(val.end.label)
                })
                
                valeurR.forEach(element => {
                    if(element==""){
                        
                    }else{
                        for (let index = 0; index < tab.length; index++) {
                            if(tab[index] == element)
                            {
                                $('#resultatConsigne').append($('<p>').text( element +' : TRUE'))
                                break;
                            }
                            
                        }
                        $('#resultatConsigne').append($('<p>').text( element +' : FALSE'))
                    }
                });


            }
        })
    })
})



function showconsigne(){

    $.getJSON("json_dataJ.json", function(data){

        let choice= Math.floor(Math.random() * (data.faits.length - 1)) + 1
        
        let value = data.faits[choice]
        let question = '=> \"'+value['start']['label'] + "\" " +value.rel.label + "  ???"

        $('#consigne').text(question)
        
        url  = 'https://api.conceptnet.io/query?node='
        +value.start['@id']+'&rel='+
        value.rel['@id']+'&limit=100'
        
        

        
    })

}


