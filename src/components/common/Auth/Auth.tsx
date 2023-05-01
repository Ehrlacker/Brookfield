import { auth, googleProvider } from "Utils/Firebase/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

import { useState, ChangeEvent } from "react"

export type userSigninValues = {
  email: string
  password: string
}

const Auth = () => {
  const [user, setInputVsetUseralues] = useState<userSigninValues>({
    email: "",
    password: "",
  })

  //get email of user
  // console.log(auth?.currentUser?.email)

  const handleRegister = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setInputVsetUseralues((prevValue) => {
      return { ...prevValue, [id]: value }
    })
  }

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
    } catch (error) {
      console.error(error)
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }

  const LogOut = async ()=>{
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <input
        placeholder="email"
        type="email"
        id="email"
        onChange={handleRegister}
        value={user.email}
      />
      <input
        placeholder="password"
        type="password"
        id="password"
        onChange={handleRegister}
        value={user.password}
      />
      <button onClick={signIn}>Sign in</button>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={LogOut}>Log Out</button>
    </div>
  )
}

export default Auth
