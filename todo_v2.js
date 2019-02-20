$(document).ready(function(){
    
    $('#add').show();
    $('#view').hide();
    
    $('#date_start').hide();
    $('#date_finish').hide();
    $('#select-priority').hide();
})

$("#initial_start").on("focus", function(){
    $('#date_start').show();
    $('#initial_start').hide();
    $('#date_start').trigger("focus");
})

$("#date_start").on("focusout",function(){
    if($("#date_start").val() == ''){
        $('#date_start').hide();
        $('#initial_start').show();
    }
})

$("#initial_finish").on("focus", function(){
    $('#date_finish').show();
    $('#initial_finish').hide();
    $('#date_finish').trigger("focus");
})

$("#date_finish").on("focusout",function(){
    if($("#date_finish").val() == ''){
        $('#date_finish').hide();
        $('#initial_finish').show();
    }
})

$("#priority").on("focus", function(){
    $('#select-priority').show();
    $('#priority').hide();
    $('#select-priority').trigger("focus");
})

$("#select-priority").on("focusout",function(){
    if($("#select-priority").val() == 'Select'){
        $('#select-priority').hide();
        $('#priority').show();
    }
})

function toggleView(id){
    let btnText = $('#'+id)[0].innerText;
    if(btnText.indexOf('View') > -1){
        $('#'+id)[0].innerText = 'Hide Details';
    } else {
        $('#'+id)[0].innerText = 'View Details';
    }
    $('#'+id+'_details').toggle();
}

function showAddSection(){
    $('#add').show();
    $('#view').hide();
}

function showViewSection(){
    $('#add').hide();
    $('#view').show();
}