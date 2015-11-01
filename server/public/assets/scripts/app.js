
//create blank object to add to
var values = {};
//Set Output DIV
$el = $('#calcOutput');

//DOC READY
$(document).ready(function(){
    init();
});

//event listeners
function init(){
    $('#addButton').on('click', function(event){
        submitFunctions(event);
        callAjaxAddFunction();
    });

    $('#subtractButton').on('click', function(event){
        submitFunctions(event);
        callAjaxSubtractFunction();
    });
    $('#multiplyButton').on('click', function(event){
        submitFunctions(event);
        callAjaxMultiplyFunction();
    });
    $('#divideButton').on('click', function(event){
        submitFunctions(event);
        callAjaxDivideFunction();
    });
}
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
        data: values,
        success: function(data){

            $('#calcOutput').text(data.outputTotal);
        }
    });
}


function callAjaxSubtractFunction(){
    $.ajax({
        type: "POST",
        url: "/subtract",
        data: values,
        success: function(data){

            $('#calcOutput').text(data.outputTotal);
        }
    });
}

function callAjaxMultiplyFunction(){
    $.ajax({
        type: "POST",
        url: "/multiply",
        data: values,
        success: function(data){

            $('#calcOutput').text(data.outputTotal);
        }
    });
}

function callAjaxDivideFunction(){
    $.ajax({
        type: "POST",
        url: "/divide",
        data: values,
        success: function(data){

            $('#calcOutput').text(data.outputTotal);
        }
    });
}