// i'd prefer to use handlebars and templeting right here, but the homework called for otherwise

function create() {

var location = $("#questionnaire");

    for (var i = 0; i < questions.length; i++) {

        var questionDiv = $("<div>");
        location.append(questionDiv);

        var questionHeading = $("<h4>");
        questionHeading.text("Question " + (i + 1));
        questionDiv.append(questionHeading);

        var questionP = $("<p>");
        questionP.text(questions[i].q);
        questionDiv.append(questionP);

        var inputDiv = $("<div>");
        inputDiv.addClass("input-field");
        questionDiv.append(inputDiv);

        var select = $("<select>");
        inputDiv.append(select);

        var option = $('<option disabled selected>');
        option.text("Choose your option");
        select.append(option);

        for (var inc = 0; inc < questions[i].choices.length; inc++) {
            var value = questions[i].choices.length - inc;
            var questionOption = $("<option>");
            questionOption.val(value);
            questionOption.text(questions[i].choices[inc]);
            select.append(questionOption);
        }

    }
}

create();
$('select').material_select();