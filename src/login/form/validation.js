import {form} from "../../js/model";

function validateForm() {
    if ((form.login.value == null || form.login.value == "") && (form.device.value == null || form.device.value == "") &&((form.password.value ==null )|| (form.password.value == "")))
    {

        return false;
    }
    else if (form.login.value == null || form.login.value == "") {

        return false;
    }
    else if (form.device.value == null || form.device.value == "") {

        return false;
    }
    else  if (form.password.value == null || form.device.value == ""){

        return false;
    }

    const testLogin = form.login.value;

    if (!isLoginValid(testLogin)) {

        return false;
    }

    const testDevice = form.device.value;
    if (!isDeviceValid(testDevice)) {

        return false;
    }

    const testPassword = form.password.value;
    if (!isPasswordValid(testPassword)) {
        return false;
    }

}
form.submit.addEventListener("click", function () {
    validateForm();
});

function isLoginValid(testLogin) {
    const loginValidation = RegExp('^[a-zA-Z\-\_]{1,20}$');
    return testLogin.match(loginValidation) != null;
};

function isDeviceValid(testDevice) {
    return 0 < testDevice.length && testDevice.length <21;
}

function isPasswordValid (testPassword) {
    return 6 <= testPassword.length && testPassword.length <21;
};