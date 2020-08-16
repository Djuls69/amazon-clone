import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
})

export const auth = firebase.auth()
export const db = firebase.firestore()

export const SignInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await firebase.auth().signInWithPopup(provider)
}

export const createUserProfileDB = async (user, otherData) => {
  if (!user) return
  const { uid, displayName, email } = user
  const userProfile = {
    id: uid,
    name: displayName,
    email,
    timestamp: new Date(),
    ...otherData
  }
  const ref = await db.collection('users').doc(uid).get()
  if (!ref.exists) {
    await db.collection('users').doc(uid).set(userProfile)
  }
}
