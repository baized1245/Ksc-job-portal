import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config'
import { FaGoogle } from 'react-icons/fa'

// import {} from 'firebase/auth'

const Login = () => {
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button
        className="bg-blue px-12 py-4 text-white rounded-sm"
        onClick={handleLogin}
      >
        <FaGoogle size={40} className="text-orange-500" />
      </button>
    </div>
  )
}

export default Login
