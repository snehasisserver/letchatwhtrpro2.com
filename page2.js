var firebaseConfig = {
    apiKey: "AIzaSyAGtYjlNKXdLVVB7uv-g1_trAJPFwphpmQ",
    authDomain: "socialdatabase-b9f43.firebaseapp.com",
    databaseURL: "https://socialdatabase-b9f43-default-rtdb.firebaseio.com",
    projectId: "socialdatabase-b9f43",
    storageBucket: "socialdatabase-b9f43.appspot.com",
    messagingSenderId: "516977061878",
    appId: "1:516977061878:web:631085326b6d5d76e721d7"
  };
  
  
  var firebaseapp = initializeApp(firebaseConfig);
user_name=localStorage.getItem("username",user_name);
document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}

