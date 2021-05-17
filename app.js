//Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAvOZNU6tMZSnLMKF_3sElo_N0rTSKvQj0",
  authDomain: "examenunidad4-eca15.firebaseapp.com",
  databaseURL: "https://examenunidad4-eca15-default-rtdb.firebaseio.com",
  projectId: "examenunidad4-eca15",
  storageBucket: "examenunidad4-eca15.appspot.com",
  messagingSenderId: "929138374037",
  appId: "1:929138374037:web:87051302442c972861f29c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//obtener datos del html

  var txtUsuario = document.getElementById("usuario");
  var txtMensaje = document.getElementById("mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje
    })
  });

  /*Mostrar datos*/
  firebase.database().ref('chat').on('value', (snapshot) => {
    var html1 = '';
    //console.log(snapshot.val());
    snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.message;
      html1 += "<li><div class='txt'><img id='profile-photo' src='http://nicesnippets.com/demo/man01.png' class='rounded-circle' width='30px'/>"
      +usuario1+" dice: </br><div class='chat ml-6 p-3'>"+mensaje1+"</li></div></div>";
    });
    chatlista.innerHTML = html1;
  })