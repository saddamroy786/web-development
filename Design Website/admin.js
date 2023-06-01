//To make a fake array of object
var objUser=[
    {
        username:"Nargis khatoon",
        password:"Nargis@2002"
    },
    {
        username:"Saddam Husain",
        password:"Saddam@2001"
    },
    {
        username:"Abbas Hussain Abdi",
        password:"Abbas@123"
    }
]
// Make a function
function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   for(i=0; i<objUser.length; i++){
    if(username == objUser[i].username && password == objUser[i].password){
    alert(username + "is Loged In !");
    return 
    }
   }
   alert("Incorrect Username or Password");
}