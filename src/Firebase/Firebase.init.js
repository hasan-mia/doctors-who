import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAiA1pjnl_lK1I1jV-pCiZ2qTtd930K1U",
	authDomain: "doctors-who.firebaseapp.com",
	projectId: "doctors-who",
	storageBucket: "doctors-who.appspot.com",
	messagingSenderId: "341098518703",
	appId: "1:341098518703:web:60ab9a018d58f70fe4dc5a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;