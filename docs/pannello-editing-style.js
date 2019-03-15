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
";

var base_interface = "\
<div class='stage'>\
<div><textarea></textarea></div></div></div>\
</div>\
";


$(document).ready(function(){
    $('body').prepend('<div>Pannello</div>')
});
