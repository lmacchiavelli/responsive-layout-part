"use strict";

var base_style="\
.stage{\
    display:flex;\
    flex-flow:row wrap;\
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
    <style class='text-code'>"+base_style+"</style>\
    <div class='stage'>\
        <div style='position:relative;'>\
            <textarea></textarea>\
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
