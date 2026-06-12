import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const requiredFirebaseEntries = [
  ['apiKey', 'VITE_FIREBASE_API_KEY'],
  ['authDomain', 'VITE_FIREBASE_AUTH_DOMAIN'],
  ['projectId', 'VITE_FIREBASE_PROJECT_ID'],
  ['appId', 'VITE_FIREBASE_APP_ID'],
]

function getMissingFirebaseKeys(config) {
  return requiredFirebaseEntries.filter(([key]) => !config[key]).map(([, envName]) => envName)
}

const missingFirebaseKeys = getMissingFirebaseKeys(firebaseConfig)

export const firebaseApp = missingFirebaseKeys.length ? null : initializeApp(firebaseConfig)
export const firebaseAuth = firebaseApp ? getAuth(firebaseApp) : null
export const googleProvider = new GoogleAuthProvider()

export async function initFirebaseAnalytics() {
  if (!firebaseApp) {
    return null
  }

  if (!(await isSupported())) {
    return null
  }

  return getAnalytics(firebaseApp)
}

export function signInWithGoogle() {
  if (!firebaseAuth) {
    throw new Error(
      `Firebase is not configured. Missing frontend env vars: ${missingFirebaseKeys.join(', ')}`,
    )
  }

  return signInWithPopup(firebaseAuth, googleProvider)
}
