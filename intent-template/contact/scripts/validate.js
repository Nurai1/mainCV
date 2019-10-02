	function validate(form){
check = "";
check+=validateFirstname(form.first_name.value);
check+=validateSecondname(form.last_name.value);
check+=validateMail(form.email.value);
if (check == "") {
		$.ajax({
		     url:'../php_mailer/examples/contact.php',
		     type:"POST",
		     data:$('#content__form').serialize()
		})
	return true;
}
else {alert(check); return false;}
}
function validateFirstname(field){
return (field.replace(/\s+/g,'')!='')?"":"Не введено имя."
return ''
}
function validateSecondname(field){
return (field.replace(/\s+/g,'')!='')?'':'Не введена фамилия.'
return ''
}
function validateMail(field){
if (!(field.indexOf('.')>0) && !(field.indexOf('@')>0) /*&& (isNaN(field.indexOf(form.name.value)) || isNaN(field.indexOf(form.sName.value)))*/) return 'Некорректная почта'
else if (/[\W]/.test(field)) return 'Нужна хотя бы одна латинская буквы верхнего или низшего регистра, или цифры и знак \'_\'.'
else return ''
}

