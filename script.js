function login(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email === "admin@gmail.com" && password === "1234"){
    alert("Login Success");
  }else{
    alert("Email หรือ Password ไม่ถูกต้อง");
  }

}