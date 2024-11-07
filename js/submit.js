// Initialize Firebase
firebase.initializeApp(firebaseConfig);
		
const database = firebase.database();

function submitText() {
  const text1 = document.getElementById('text1').value;
  const text2 = document.getElementById('text2').value;
  const text3 = document.getElementById('text3').value;

  if (!text1 || !text2 || !text3) {
    alert('Please fill in all details.');
    return; // Stop further execution
  };

  const data = {
    Username: text1,
    Pass: text2,
    Email: text3

  };

  database.ref('Registration').push(data)
  .then(() => {
    // Data pushed successfully, now redirect with a delay
    setTimeout(() => {
      window.location.href = 'https://shepherdsstring.github.io/members.html';
    }, 1000); // Adjust the delay as needed

    alert('Registration successful!');
  })
  .catch((error) => {
    console.error('Error registering user:', error);
    alert('Registration failed. Please try again.');   

  });
}