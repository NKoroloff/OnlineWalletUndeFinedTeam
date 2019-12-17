import model from "../../js/model";
export const toggleShowPassword = () => {
    if (model.inputPassword.type == "password") {
        model.inputPassword.type = "text";
    } else {
        model.inputPassword.type = "password";
    }
};