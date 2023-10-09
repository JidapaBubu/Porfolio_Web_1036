alert("EeeeeeeEeeeeee");

function postFunction(){
     var Inputbyuser = document.getElementById("text1").value;

    if (Inputbyuser == ""){
        alert ("เตงกรอกข้อความก่อนสิฮ้าฟฟู่ว");
        return;
    }
    
     if (document.getElementById("topic1").innerHTML=="")
     {
        document.getElementById("topic1").innerHTML = Inputbyuser;
     }
    
     else if (document.getElementById("comment1").innerHTML=="")
     {
        document.getElementById("comment1").innerHTML = Inputbyuser;
     }
     else if (document.getElementById("comment2").innerHTML=="")
     {
        document.getElementById("comment2").innerHTML = Inputbyuser;
     }

}

function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML= "";
    document.getElementById("comment2").innerHTML= "";
}
  