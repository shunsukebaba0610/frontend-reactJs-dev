import React, { useState, useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from './firebaseDB';
import { collection, getDocs } from '@firebase/firestore';
import SignIn from './SignIn';
import SignOut from './SignOut';
import SendMessage from './SendMessage';
import './Line.css';

function Line() {
	const [user] = useAuthState(auth);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const messageCllectionRef = collection(db, "messages");
		const getMessages = async () => {
			const data = await getDocs(messageCllectionRef);
			setMessages(data.docs.map((doc) => doc.data()));
		}
		getMessages();
		// db.collection("messages")
		// 	.orderBy('createdAt')
		// 	.limit(50)
		// 	.onSnapshot((snapshot) => {
		// 		const data = snapshot.docs.map((doc) => doc.data());
		// 		setMessages(data);
		// 	});
	}, []);

	return (
		<>
			{user ? (
				<div>
					<SignOut />
					<div className='msgs'>
						{messages.map(({ id, text, photoURL, uid }) => (
							<div>
								<div>{user.currentUser}</div>
								<div key={id}
									className={`msg ${(uid === user.uid) ? 'sent' : 'received'}`} >
									<img src={photoURL} alt="" />
									<p>{text}</p>
								</div>
							</div>
						))}
					</div>
					<SendMessage />
				</div>
			) : (
				<SignIn />
			)}
		</>
	)
}

export default Line;