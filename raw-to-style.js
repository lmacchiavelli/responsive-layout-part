/*Questo Script va disattivato in produzione
  ha utilità solo nell acreazione del template
  in cui il file css a cui si sta lavorando 
  viene linkato da un repository github*/

function appendStyleFromRepo(file_url){
    $.get( file_url , function( data ) {
        $('<style type="text/css">'+data+'</style>').appendTo($('head'));
    });
}
appendStyleFromRepo("https://raw.githubusercontent.com/lmacchiavelli/responsive-layout-part/master/docs/style-test.css");