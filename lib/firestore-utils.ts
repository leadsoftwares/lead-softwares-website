import { addDoc, collection, DocumentData } from 'firebase/firestore'
import { db } from './firebase'

const FirebaseUtils = {
	addDocument: async (
		collectionName: string,
		data: DocumentData
	): Promise<string> => {
		try {
			const docRef = await addDoc(collection(db, collectionName), data)
			console.log('Document written with ID: ', docRef.id)
			return docRef.id
		} catch (error) {
			console.error('Error adding document:', error)
			throw error
		}
	},
}

export default FirebaseUtils
