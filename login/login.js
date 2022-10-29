var attempt = 3;
function validate() {
    var mobile = document.getElementById("mobile").value;
    var otp = document.getElementById("otp").value;
    if ((mobile == 9995300187 && otp == 1234) || (mobile == 7012863749 && otp == 1897 || (mobile == 7593021323 && otp == 1323))) {
        alert("Login successfully");
        window.location = "/index.html";
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");
        if (attempt == 0) {
            document.getElementById("mobile").disabled = true;
            document.getElementById("otp").disabled = true;
            document.getElementById("btn-verify").disabled = true;
            return false;
        }
    }
}
function getOtp() {
    document.getElementById("btn-otp").disabled = true;
    document.getElementById("btn-verify").disabled = false;
    document.getElementById("otp").disabled = false;
}
