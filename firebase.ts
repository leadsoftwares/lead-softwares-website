// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBcaMaqhOzXYV9VyldJmP-kRYSP9soJB_s',
	authDomain: 'lead-softwares-e88cf.firebaseapp.com',
	projectId: 'lead-softwares-e88cf',
	storageBucket: 'lead-softwares-e88cf.firebasestorage.app',
	messagingSenderId: '460961263900',
	appId: '1:460961263900:web:f56178c6c5b95b67e94ad9',
	measurementId: 'G-DT7XVF334B',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { analytics, app }
