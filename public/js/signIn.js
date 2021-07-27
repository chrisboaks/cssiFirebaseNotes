function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider(); 

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    const credential = result.credential;
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    window.location = 'writeNote.html';
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    const err = {
      errorCode,
      errorMessage,
      email,
      credential
    };
    console.log(err);
  });
}