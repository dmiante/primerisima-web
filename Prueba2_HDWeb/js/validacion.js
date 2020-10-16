// JavaScript Document

function validar()
{
	var nombre = document.getElementById("txtNombre");
	var apellido = document.getElementById("txtApellido");
	var email = document.getElementById("txtCorreo");
	var mensaje = document.getElementById("txtMensaje");
	
	if(nombre.value == "" || nombre.value == null)
	{
		document.getElementById("errorNomb").innerHTML=" Obligatorio";
		return false;
		
    }
	else
	{
		document.getElementById("errorNomb").innerHTML="";
	}
	
	var valNomAp = /^[A-Za-z]+[A-Za-z\s]*$/;
	
	if(!valNomAp.test(nombre.value))
	{
		document.getElementById("errorNomb").innerHTML="Solo letras y espacios";
		nombre.value="";
		nombre.focus();
		return false
	}
	else
	{
		document.getElementById("errorNomb").innerHTML="";
	}
	
	
	if(apellido.value == "" || apellido.value == null)
	{
		document.getElementById("errorAp").innerHTML=" Obligatorio";
		return false;
		
    }
	else
	{
		document.getElementById("errorAp").innerHTML="";
	}
	
	if(!valNomAp.test(apellido.value))
	{
		document.getElementById("errorAp").innerHTML="Solo letras y espacios";
		apellido.value="";
		apellido.focus();
		return false
	}
	else
	{
		document.getElementById("errorAp").innerHTML="";
	}
	
	
		if(email.value == "" || email.value == null)
	{
		alert ("Email Obligatorio")
		return false;
		
    }
	
	var expEmail=/^[\w\.\-]+@{1}[A-Za-z]+\.{1}[A-Za-z]{2,3}$/;
	
	if(!expEmail.test(email.value))
	{
		alert("Email no valido");
		email.focus();
		return false;
	}
	
		if(mensaje.value=="" || mensaje.value == null)
	{
		alert("Mensaje Obligatorio");
		clave.focus();
		return false;
	}
	
		var valMensaje = /^[\w\s]{1,200}$/;
	if(!valMensaje.test(mensaje.value))
	{
		alert("Alfanumerico maximo 200 caracteres");
		mensaje.focus();
		return false
	}
	
	
	return true;
	
}