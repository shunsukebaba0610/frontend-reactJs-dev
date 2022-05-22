import React from 'react'
import { auth } from './firebaseDB';
import { signOut } from "firebase/auth";
import { Button } from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call';

function SignOut() {
	return (
		<div className='header'>
			<Button 
				onClick={() => signOut(auth) }
				style={{color:'white', fontSize:'15px'}}>
				サインアウト
			</Button>
			<h3>{auth.currentUser.displayName}</h3>
			<CallIcon />
		</div>
	)
}

export default SignOut;