'use client'
import {signIn, useSession, signOut} from 'next-auth/react'

export default function Home() {
  const {data:session} = useSession();
  console.log(session);
  return (
  <main>
    <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
      <div>
      {!session?<button className="rounded-lg bg-white px-4 py-2" onClick={()=>signIn('github')}>Login with Github</button>
    :  
    <button className="rounded-lg bg-white px-4 py-2" onClick={()=>signOut('github')}>Logout from Github</button>
  }
      </div>
    </div>    
  </main>
  )
}
