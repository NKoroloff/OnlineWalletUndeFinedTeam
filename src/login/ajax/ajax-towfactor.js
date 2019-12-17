import {formTwoFactor} from "../../js/model";
import model from "../../js/model";

formTwoFactor.submitVerification.addEventListener('click', function(e) {
    e.preventDefault();
    const requestAuth = new XMLHttpRequest();
    requestAuth.onload = () => {
        let responseObject = null;
        try {
            responseObject = JSON.parse(requestAuth.responseText);
        } catch (e) {
            console.error('Could not parse JSON!');
        }
        if (responseObject) {
            handleResponseAuth(responseObject);
        }
    };
    const requestDataAuth = `authcode=${formTwoFactor.twoFactorAuthentification.value}`;
    requestAuth.open('post', 'check-twofactor');
    requestAuth.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    requestAuth.send(requestDataAuth);
});

function handleResponseAuth (responseObject) {
    if (responseObject.ok) {
        location.href = '/view-dashboard';
    } else {
        model.modalVerification.classList.remove('show');
        model.modalError.classList.add('show');
    }
};