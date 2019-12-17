import {form} from "../../js/model";
import model from "../../js/model"

form.submit.addEventListener('click', function (e) {
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.onload = () => {
        let responseObject = null;
        try {
            responseObject = JSON.parse(request.responseText);
        } catch (e) {
            console.error('Could not parse JSON!');
        }
        if (responseObject) {
            handleResponse(responseObject);
        }
    };
    const requestData = `login=${form.login.value}&device=${form.device.value}&password=${form.password.value}`;
    request.open('post', 'check-login');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(requestData);
});

function handleResponse (responseObject) {
    if (responseObject.ok) {
        model.modalVerification.classList.add('show');
        model.overlayVerification.classList.add('show');
        form.errorMessage.style.display = "none";
    } else {
        form.errorMessage.style.display = "flex";
    }
};