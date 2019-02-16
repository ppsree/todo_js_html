var list = $('#list-items');
var item_num=0;

var table = $('#item-table');

var todo = [];
var done=[];
var all=[];



$(document).ready(function(){
    $("#item-input").focus();
})

$('#item-input').keydown(function(event){
    if (event.keyCode == '13') {
        // list.append("<li id='item_" + item_num + "'>" + $('#item-input').val() + "</li>");
        table.append("<tr id='item_" + (item_num) + "'><td><input id='input_item_" + item_num + "' type='checkbox'></td><td class='col-md-10'>"+ $('#item-input').val() +"</td><td class='col-md-1 close'>x</td></tr>")
        item_num++;
        $('#item-input').val("");
    }
});

$('#search-box').keyup(function(){
    let listItems = $('#list-items').children();
    listItems = $('#item-table').children();
    for(let i=0;i<listItems.length;i++){
        // if(listItems[i].innerText.toLowerCase().indexOf($('#search-box').val().toLowerCase()) > -1) {
        //     $(listItems[i]).removeClass("hide");
        // } else {
        //     $(listItems[i]).removeClass('hide').addClass('hide');
        // }

        if($(listItems[i]).children()[1].innerText.toLowerCase().indexOf($('#search-box').val().toLowerCase()) > -1) {
            $(listItems[i]).removeClass("hide");
        } else {
            $(listItems[i]).removeClass('hide').addClass('hide');
        }
    }
});

