const firebaseConfig = {
  apiKey: "AIzaSyBrTDZiGMDK_ThzAQeplXv1O7qNex2lPOg",
  authDomain: "dias-c2068.firebaseapp.com",
  databaseURL: "https://dias-c2068-default-rtdb.firebaseio.com",
  projectId: "dias-c2068",
  storageBucket: "dias-c2068.appspot.com",
  messagingSenderId: "418361899416",
  appId: "1:418361899416:web:95feee98e11fa81d84d3ed",
  measurementId: "G-C2FTMK3WFJ"
};


  //ADICIONE SEUS LINKS FIREBASE
  function addUse(){
    userName = document.getElementById("userName").ariaValue;
    firebase.database().ref("/").child(useName).update({
        purpose : "adicionar usuario"
    });
  }
