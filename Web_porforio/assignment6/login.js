window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	console.log(username);

	const password = urlParams.get('password');
	console.log(password);

	var user = document.forms ["myLogin"]["username"];
	var pass = document.forms ["myLogin"]["password"];

	if(user.value != username || pass.value != password){
		alert("กรอกไรผิดรึเปล่าครับพี่");
		return false;
	}
	alert("เรียบร้อย เชิญใช้บริการได้เลยครับพี่");

	



}

			