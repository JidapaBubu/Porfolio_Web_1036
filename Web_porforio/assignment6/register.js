window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var pass1 = document.forms ["myForm"]["password"][0];
    var pass2 = document.forms ["myForm"]["password"][1];

    if (pass1.value != pass2.value){
        document.getElementById('errormsg').innerHTML = "พาสเวิร์ดไม่ตรงกันนะครับพี่";
        alert ("พาสเวิร์ดไม่ตรงกันนะครับพี่");
        return false;
    }
    alert ("ตรงไปทางขวามือเลยครับพี่");
}