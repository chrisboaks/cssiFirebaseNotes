let googleUser; 

window.onload = (event) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Logged in as: ' + user.displayName);
            googleUser = user;
        } else {
            window.location = 'index.html'; // If not logged in, navigate back to login page.
        }
    });
};

function handleNoteSubmit() {
    const noteTitle = document.querySelector('#noteTitle');
    const noteText = document.querySelector('#noteText');

    console.log(noteTitle, noteText); 
    console.log(firebase.database())
    firebase.database().ref(`users/${googleUser.uid}`).push({
    title: noteTitle.value,
    text: noteText.value
  })
  .then(() => {
    noteTitle.value = "";
    noteText.value = "";
  });
}