function validateFormInput(form, input, errorMessage) {
	if (typeof input === 'undefined') {
		return true;
	}
	let validationResult = validateMandatoryInput(input);
	if (validationResult === true) {
		SetKVP(input);
		console.log('VALIDACION TRUE:', input);
		if (input[0].checkValidity() === false) {
			validationResult = false;
		}
	}
	if (validationResult === false) {
		showErrorMessage(form, errorMessage);
		form.last().children().css({"color": "red"}); 
	} else {
		showErrorMessage(form, '');
	}
	return validationResult;
}

function validateMandatoryInput(input) {
	return input.val().trim().length > 0;
}

function showErrorMessage(form, errorMessage) {
	form.last().children().text(errorMessage);
}

function SetKVP(input) {
 /*if (input[0].name==='email'){
	 customChatRegFormDef.inputs[4].value = input[0].value;
 };*/
}
