let user1 = "monther";
let pass1 = 123456789;

function getValue2() {
    let form1 = document.forms[0].user.value;
    let form2 = document.forms[0].pass.value;
    
    if (form1 === user1 && form2 === pass1) {
        console.log("correct user and password");
    }}
