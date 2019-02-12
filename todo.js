var list = $('#list-items');
var item_num=0;



$('#item-input').keydown(function(event){
    if (event.keyCode == '13') {
        list.append("<li id='item_" + item_num + "'>" + $('#item-input').val() + "</li>");
        item_num++;
        $('#item-input').val("");
    }
});

$('#search-box').keyup(function(){
    let listItems = $('#list-items').children();
    for(let i=0;i<listItems.length;i++){
        if(listItems[i].innerText.toLowerCase().indexOf($('#search-box').val().toLowerCase()) > -1) {
            $(listItems[i]).removeClass("hide");
        } else {
            $(listItems[i]).removeClass('hide').addClass('hide');
        }
    }
});
