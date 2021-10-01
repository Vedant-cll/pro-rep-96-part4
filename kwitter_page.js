  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgX9I1dfTA0JuAF2EocPjAjGufLg91-SU",
    authDomain: "kwitter-project-692c0.firebaseapp.com",
    databaseURL: "https://kwitter-project-692c0-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-692c0",
    storageBucket: "kwitter-project-692c0.appspot.com",
    messagingSenderId: "226743716561",
    appId: "1:226743716561:web:de8b1f8a464a5bdb3a53f0"
  };
  
  // Initialize Firebase
   
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0      
});
document.getElementById("msg").value="";     
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    window.location="index.html";
}