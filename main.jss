function copyAddress() {
    var homeAddress = document.getElementById("homeAddress").value;
    var postalAddress = document.getElementById("postalAddress");
    if (document.getElementById("sameAsHome").checked) {
        postalAddress.value = homeAddress;
    } else {
        postalAddress.value = "";
    }
}
