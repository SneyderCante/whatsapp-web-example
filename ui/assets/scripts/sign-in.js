var auth = WeDeploy.auth('auth-mychatapp.wedeploy.io');


/* Redirect if user is signed in */

if (auth.currentUser) {document.location.href = './chat/index.html';}


/* Create User Method */

var login = document.querySelector('.login');
var button = document.querySelector('button');

function signIn() {
	auth.signInWithEmailAndPassword(login.email.value, login.password.value)
		.then(function() {
			button.disabled = true;
			button.innerText = 'Loading...';
			document.location.href = './chat/index.html';
		})
		.catch(function(err) {
			button.disabled = false;
			button.innerText = 'Sign In';
			alert('Sign-in failed.');
			console.log(err);
		});
}