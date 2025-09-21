// Import the functions you need from the SDKs you need
import { Analytics, getAnalytics } from 'firebase/analytics'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
// Use getApps() to check if an app is already initialized to prevent multiple initialization errors
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

// Initialize Firestore
const db = getFirestore(app)

// Initialize Analytics (only in browser environment)
let analytics: Analytics | null = null
if (typeof window !== 'undefined') {
	analytics = getAnalytics(app)
}

export { analytics, app, db }
