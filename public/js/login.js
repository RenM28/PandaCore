

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
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          location.href = "/monthly";
          

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("error signing in");
          // ..
        });
        
    } catch (error) {
        console.error(error);
        alert("error signing up");
  } 
}

function signin(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

try {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      location.href = "/monthly";
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("error signing in");
    });
  } catch (error) {
    console.error(error);
    alert("error signing in");
  }
}

function signout(){
  auth.signOut();
  alert("signed out");
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var email = user.email;
    localStorage.setItem("whatUser", email);  

    
    alert("logged in " + email)
  } else {
    
  }

});

