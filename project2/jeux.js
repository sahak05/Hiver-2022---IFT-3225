$(document).ready(function () {
    console.log("v")
    $("#jeuOuiNon").click(function () {
        $("#interfaceJeuOuiNon").show();

    });
    showQuestionnaire()//affiche le questionnaire
});

let showQuestionnaire = () => { //afficher le questionnaire
    $.ajax({
        type: "GET",
        url: "json_dataJ.json",
        dataType: "json",
        success: function (json) {
            //Quoi faire avec le contenu obtenu
            //Pour chaque question...
            //console.log(json.faits[0]["start"].label);
              let questionTrue;
              let questionFalse;
            
            $.each(json.faits, function (i) {
                const divQuest = $('<div>');
                const start = json.faits[i]["start"].label;
                const rel = json.faits[i]["rel"].label;
                const end = json.faits[i]["end"].label;
                const j = Math.floor(Math.random() * (json.faits.length - 1)) + 1;
                const endFalse = json.faits[j]["end"].label;
                var questionVrai = start + " " + rel + " " + end + " ?";
                var questionFausse = start + " " + rel + " " + endFalse + " ?";
                const randomQuestionNum = Math.floor(Math.random() * (1 - 0 +1)) + 0;
                console.log(json.faits.length);
                if (j != i && randomQuestionNum==1) {
                    $('<p>').text(questionFausse).appendTo(divQuest);
                    questionFalse = questionFausse;
                }
                else{
                    $('<p>').text(questionVrai).appendTo(divQuest);
                    questionTrue = questionVrai;
                }
                // Ajouter le bouton vrai
                $("<button>")
                    .attr("id" ,"vrai")
                    .addClass("btn btn-success")
                    .text("Vrai")
                    .css("margin-right", "15px")
                    .appendTo(divQuest);
                // Ajouter le bouton faux
                $("<button>")
                    .attr("id","faux")
                    .addClass("btn btn-danger")
                    .text("Faux")
                    .css("margin-right", "15px")
                    .appendTo(divQuest);
                    $('#questionnaire').append(divQuest)
                    $('<hr />').appendTo("#questionnaire");
                    
                    //Lorsqu'on clique sur un bouton dans une question
                    $("#vrai").click(function(e){
                        if(questionTrue){
                            $('<label>').addClass('text-success').text('Correct !').appendTo($(divQuest).parent());
                        }
                        else{
                            $('<label>').addClass('text-danger').text('Erreur !').appendTo($(divQuest).parent());
                        }
                         //désactiver l'autre bouton de la question
                         $(divQuest).siblings("button").attr("disabled", "disabled");
                      
                    });
                    $("#faux").click(function(){
                        if(questionFalse){
                            $('<label>').addClass('text-success').text('Correct !').appendTo($(divQuest));
                        }
                        else{
                            $('<label>').addClass('text-danger').text('Erreur !').appendTo($(divQuest));
                        }
                         //désactiver l'autre bouton de la question
                         $(divQuest).siblings("button").attr("disabled", "disabled");
                      
                    });

            });
      
        },

        error: function () {
            //Quoi faire en cas d'erreur de la requête
            alert("Erreur dans la requête Ajax");
        }


    });


}