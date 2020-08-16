import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyDfEW4ZNdMIiF06TtDFgXaE1Sjv_Eu-Gvo',
  authDomain: 'clone-dc5b0.firebaseapp.com',
  databaseURL: 'https://clone-dc5b0.firebaseio.com',
  projectId: 'clone-dc5b0',
  storageBucket: 'clone-dc5b0.appspot.com',
  messagingSenderId: '843212191492',
  appId: '1:843212191492:web:f05aaff7d17c0a69050251'
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
