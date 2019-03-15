"use strict";

var style_append = "";


var base_style="\
.stage{\
    display:flex;\
    flex-flow:row wrap;\
    height: 130px;\
}\
.text-code{\
    height:100%;\
    width:100%;\
    position:absolute;\
    left:0px;\
    top:0px;\
}\
.stage > div{\
    flex:1;\
}\
";

var base_interface = "\
<div>\
    <style>"+base_style+"</style>\
    <div class='stage'>\
        <div style='position:relative;'>\
            <textarea class='text-code'></textarea>\
        </div>\
        <div>\
                COLONNA\
        </div>\
    </div>\
</div>\
";


$(document).ready(function(){
    $('body').prepend(base_interface);
});


var myVar = setInterval(addStyle, 3000);

function addStyle(){
    var css_style = $(".text-code").val();
    
    var style_append = '<style type="text/css" id="style-app">'+css_style+'</style>';
    $('body').find('style-app').remove();
    $('body').prepend(style_append);
}




