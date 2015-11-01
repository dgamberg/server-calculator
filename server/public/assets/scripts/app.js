var $el;
//create blank object to add to
var values = {};

$(document).ready(function(){
    $el = $('#calcOutput');

    $('#equalsButton').on('click', function(event){
        submitFunctions(event);
        callAjaxAddFunction();
    });
});

function submitFunctions(event){
    event.preventDefault();

    //get all items from form submit and add to values
    $.each($('#mainCalculator').serializeArray(), function(i, field){
        values[field.name] = field.value;
    });
    // Clear out form after submit
    $('#mainCalculator').find("input[type=text]").val("");
}

function callAjaxAddFunction(){
    $.ajax({
        type: "POST",
        url: "/add",
        //from values in line 19
        data: values,
        success: function(data){
            console.log(data);
            $('#calcOutput').text(data.outputTotal);
        }
    });
}

// TO DO Move this out
// Create HTML Message
//var htmlForDOM =
//    "<p class='calcResponse'>When " +
//    "<strong id='valueOneOutput'>" + data.value1 + "</strong> " +
//    "and <strong id='valueTwoOutput'>" + data.value2 + "</strong> are " +
//    "<span id='valueTwoOutput'>" +  data.operation + "</span> the result is " +
//    "<strong id='valueTotalOutput'>" + data.outputTotal + "</strong>" +
//    "</p>";


    ////serialize all items from the form into an object
    //$.each($('#mainCalculator').serializeArray(), function(i, field){
    //    values[field.name] = field.value;
    //});
    //// Clear out form after submit
    //$('#mainCalculator').find("input[type=text]").val("");

    ////ajax call
    //$.ajax({
    //    type: "POST",
    //    url: "/add",
    //    data: values,
    //    success: function(data){
    //
    //        //create HTML Message
    //        var htmlForDOM =
    //            "<p class='calcResponse'>When " +
    //            "<strong id='valueOneOutput'>" + data.value1 + "</strong> " +
    //            "and <strong id='valueTwoOutput'>" + data.value2 + "</strong> are " +
    //            "<span id='valueTwoOutput'>" +  data.operation + "</span> the result is " +
    //            "<strong id='valueTotalOutput'>" + data.outputTotal + "</strong>" +
    //            "</p>";
    //
    //        $('#calcOutput').text(data.outputTotal);
    //
    //    }
    //});

