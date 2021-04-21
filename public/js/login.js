
  
var firebaseConfig = {
    apiKey: "AIzaSyDQ51f00QrLyoWwuTXZrCJe_HUqT5QnSHU",
    authDomain: "pandacore.firebaseapp.com",
    databaseURL: "https://pandacore-default-rtdb.firebaseio.com",
    projectId: "pandacore",
    storageBucket: "pandacore.appspot.com",
    messagingSenderId: "239305821806",
    appId: "1:239305821806:web:412fd52e24504ac705a07f",
    measurementId: "G-DPJL1FMWK9"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signup(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    
    try {
        const promise = auth.createUserWithEmailAndPassword(email,password);
        promise.catch(e => alert(e.message));

        location.href = "/loggedin";
    } catch (error) {
         console.error(error);
         alert("error signing up");
  }
    
    //alert("signed up");
}

function signin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

try {
  const promise = auth.signInWithEmailAndPassword(email,password);
  promise.catch(e => alert(e.message));
  location.href = "/loggedin";
} catch (error) {
  console.error(error);
  alert("error signing in");
}
  

  
  //alert("signed in");
}

function signout(){
  auth.signOut();
  alert("signed out");
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
    var email = user.email;
    alert("logged in " + email)
  } else {
    
  }

});
