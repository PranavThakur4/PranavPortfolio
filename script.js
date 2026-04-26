function sendEmail() {
    let parms = {
        firstname : document.getElementById("fname").value,
        lastname : document.getElementById("lname").value,
        email : document.getElementById("femail").value,
        message : document.getElementById("fmessage").value,
        subject : document.getElementById("fsubject").value,

    }

    emailjs.send("service_fuuvh53", "template_zszg22u", parms).then(alert("Email Sent Successfully!"));

}