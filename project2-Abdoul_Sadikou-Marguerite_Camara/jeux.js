$(document).ready(function (){
    $("#jeuOuiNon").click(function () {
        $("#interfaceJeuOuiNon").show();
        $("#interfaceConsigne").hide();

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
                let i = Math.floor(Math.random() * (json.faits.length - 1)) + 1;
                const divQuest = $('<div>');
                const p = $('<p>');
                p.attr("id", "question");
                const start = json.faits[i]["start"].label;
                const rel = json.faits[i]["rel"].label;
                const end = json.faits[i]["end"].label;
                let j = Math.floor(Math.random() * (json.faits.length - 1)) + 1;
                const endFalse = json.faits[j]["end"].label;
                var questionVrai = start + " " + rel + " " + end + " ?";
                var questionFausse = start + " " + rel + " " + endFalse + " ?";
                const randomQuestionNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                if (j != i && randomQuestionNum == 1) {
                    p.text(questionFausse).appendTo(divQuest);
                    questionFalse = questionFausse;
    
                }
                else {
                    p.text(questionVrai).appendTo(divQuest);
                    questionTrue = questionVrai;
    
                }
    
                // Ajouter le bouton vrai
                $("<button>")
                    .attr("id", "vrai")
                    .addClass("btn btn-success")
                    .text("Vrai")
                    .css("margin-right", "15px")
                    .appendTo(divQuest);
                // Ajouter le bouton faux
                $("<button>")
                    .attr("id", "faux")
                    .addClass("btn btn-danger")
                    .text("Faux")
                    .css("margin-right", "15px")
                    .appendTo(divQuest);
                // Ajouter le bouton next
                $("<button>")
                    .attr("id", "next")
                    .attr("disabled", true)
                    .addClass("btn btn-info")
                    .text("Next")
                    .css("margin-right", "15px")
                    .appendTo(divQuest);
    
                $('#questionnaire').append(divQuest)
                $('<hr />').appendTo("#questionnaire");
    
    
    
                //Lorsqu'on clique sur un bouton dans une question
                $("#vrai").click(function (e) {
                    e.preventDefault()
                    if (questionTrue) {
                        $('<label>').addClass('text-success').text('Correct !').appendTo($(divQuest));
                    }
                    else {
                        $('<label>').addClass('text-danger').text('Erreur !').appendTo($(divQuest));
                    }
                    //désactiver l'autre bouton de la question
                    $(this).siblings("#faux").attr("disabled", true);
    
    
    
    
                });
                $("#faux").click(function (e) {
                    e.preventDefault()
                    if (questionFalse) {
                        $('<label>').addClass('text-success').text('Correct !').appendTo($(divQuest));
                    }
                    else {
                        $('<label>').addClass('text-danger').text('Erreur !').appendTo($(divQuest));
                    }
                    //désactiver l'autre bouton de la question
                    $(this).siblings("#vrai").attr("disabled", true);
    
    
    
                });
    
    
            },
    
    
            error: function () {
                //Quoi faire en cas d'erreur de la requête
                alert("Erreur dans la requête Ajax");
            },
    
    
        })

        let timeleft = 10;
        let downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("count").innerHTML = "Finished";
                $("#next").attr("disabled", false);
            }
            else {
                document.getElementById("count").innerHTML = timeleft + " seconds remaining";
            }
            $("#vrai").click(function (e) {
                e.preventDefault()
                clearInterval(downloadTimer);
                $("#next").attr("disabled", false);


            });
            $("#faux").click(function (e) {
                e.preventDefault()
                clearInterval(downloadTimer);
                $("#next").attr("disabled", false);


            });
            $("#next").click(function (e) {
                console.log("2222");
                e.preventDefault()

                
                
                
            });

            timeleft -= 1;
        }, 1000);


      


    });

  


});



/*unction showQuestionnaire() { //afficher le questionnaire
   


}*/
