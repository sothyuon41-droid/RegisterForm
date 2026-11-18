let txtUsername = document.getElementById("username");
let txtpassword = document.getElementById("password");
let placeOfbirth = document.getElementById("place-of-birth");
let btnSubmit = document.getElementById("btn-submit");

btnSubmit.onclick = function(event) {
    event.preventDefault();
    console.log(
        `Username: ${txtUsername.value}\n` +
        `Password: ${txtpassword.value}\n` +
        `Place of Birth: ${placeOfbirth.value}`
    );

    txtUsername.value = null;
    txtpassword.value = null;
    placeOfbirth.selectedIndex = null;
}
