import React from 'react'
//import firebase from "firebase/compat/app";
import { auth } from './firebaseDB';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from '@material-ui/core'

export default function SignIn() {

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				console.log(credential + ':' + result.user);


			}).catch((error) => {
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(credential);
			});;
	}

	return (
		<div>
			<Button onClick={signInWithGoogle}>GoogleでLOGIN</Button>
		</div>
	)
}
