$('body').addClass('home');
$( "#mainSearchFormButton" ).click(function(){
var a = $(this).attr('style')
if(a.split(' ')[2]=='-16px;'){
$(this).removeClass("open");
}else{
$(this).toggleClass("open");
}
});
