import Auth from "../../network/auth";
import Config from "../../config/config";
import Utils from "../../utils/utils";
import CheckUserAuth from "./ChechkUserAuth";

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add("was-validated");
        await this._getLogged();
      },
      false,
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log("formData");
      console.log(formData);
      const loaderSpinner = document.getElementById("loaderSpinner");
      loaderSpinner.style.visibility = "visible";
      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 200) {
          Utils.setUserToken(
            Config.USER_TOKEN_KEY,
            response.data.loginResult.token,
          );
          window.alert("Berhasil Masuk");
          this._goToDashboardPage();
        } else {
          if (formData.password.length <= 8) {
            window.alert(`Password harus minimal 8 karakter`);
          } else {
            window.alert(`${response.response.data.message}`);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        loaderSpinner.style.visibility = "hidden";
      }
    }
  },

  _getFormData() {
    const email = document.querySelector("#validationCustomRecordEmail");
    const password = document.querySelector("#validationCustomPassword");

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === "",
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = "/";
  },
};

export default Login;
