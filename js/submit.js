// Initialize Firebase
firebase.initializeApp(firebaseConfig);
		
const database = firebase.database();

function submitText() {
  const text1 = document.getElementById('text1').value;
  const text2 = document.getElementById('text2').value
  const text3 = document.getElementById('text3').value;


  const data = {
    Username: text1,
    Pass: text2,
    Email: text3

  };

  database.ref('Registration').push(data);
  alert('Registration successful!');
}