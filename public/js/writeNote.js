console.log('wow');
let googleUser;

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('logged in as', user.displayName);
            googleUser = user;
        } else {
            window.location = 'index.html';
        }
    });
}

function handleNoteSubmit() {
    // 1. get info from the form
    // 2. format the data & write to db
    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        text: noteText.value
    });
    // 3. clear out the form
}