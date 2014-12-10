

$(document).ready(function(){
	$(".carousel").carousel({
	interval:2000
});
	$(".boton1").click(function(){
		$("#imgColumna1").attr('src','img/new1.png');
	});
	$(".boton2").click(function(){
		$("#imgColumna1").attr('src','img/new2.png');
	});
	$(".boton3").click(function(){
		$("#imgColumna1").attr('src','img/new3.png');
	});
	$(".boton4").click(function(){
		$("#imgColumna1").attr('src','img/arbol.png');
	});

	$('#f1').submit(function(evento){
		evento.preventDefault();//limpiar el comportamiento por defecto del formulario cuando se envia
		var txt = $('#mensaje').val();//obtener el valor del imput#txt
		console.log("submit "+txt); //mostrar por la consola lo que se va cargando
		$('#mensajes').append('<p>'+txt+'</p>');//agregar un parrafo con el texto escrito en input#mensaje
		$('#mensaje').val('');//limpiar input#mensaje
	}); //$('#f1').submit(function(evento){

	 $( '.textoColumna').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');    
    }
  );
});