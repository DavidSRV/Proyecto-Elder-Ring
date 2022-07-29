import { getAuth, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js" ;

let botonLogin = document.getElementById("button")
botonLogin.addEventListener("click", () =>{

    let email = document.getElementById("emailLogin").value
    let password = document.getElementById("passwordLogin").value
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = "index.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
})
let botonsalir = document.getElementById('salir')

botonsalir.addEventListener("click", function () {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href="../index.html"
  }).catch((error) => {
    // An error happened.
  });

})
