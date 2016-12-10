$(document).ready(function () {

    create();

    // initialize the Materialize select featurs -- required per documentation
    $('select').material_select();

    // clicklistener for the submitButton
    $("#submitButton").on("click", function (e) {
        e.preventDefault();

        // create object to post of user's values and answers
        var values = {
            name: $("#name").val(),
            photo: $("#photo").val()
        };

        // create array to store answers and push answers to the array
        var answers = [];
        for (var i = 0; i < questions.length; i++) {
            answers.push($("#select" + i).val());
        }

        // add answers to values object
        values.answers = answers;
        console.log(values);

        var currentURL = window.location.origin;

      $.post(currentURL + "/api/friends", values, function(data) {});

    });

});

function create() {

    var location = $("#questionnaire");

    for (var i = 0; i < questions.length; i++) {

        var questionDiv = $("<div class='question col s6'>");
        location.append(questionDiv);

        var questionHeading = $("<h4>");
        questionHeading.text("Question " + (i + 1));
        questionDiv.append(questionHeading);

        var inputDiv = $("<div class='inputDiv'>");
        inputDiv.addClass("input-field");
        questionDiv.append(inputDiv);

        var questionP = $("<p>");
        questionP.text(questions[i].q);
        inputDiv.append(questionP);

        var select = $("<select>");
        select.attr("id", "select" + i);
        inputDiv.append(select);

        var option = $('<option disabled selected>');
        option.text("Choose your option");
        option.attr("id", "option" + i);
        select.append(option);

        for (var inc = 0; inc < questions[i].choices.length; inc++) {
            var value = (questions[i].choices.length - inc);
            var questionOption = $("<option>");
            questionOption.attr("value", value);
            questionOption.text(questions[i].choices[inc]);
            select.append(questionOption);
        }

    }

}