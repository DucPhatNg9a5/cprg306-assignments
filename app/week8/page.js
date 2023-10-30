"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }

  function handleSignOut() {
    firebaseSignOut();
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <Link href="/week8/shopping-list">Shopping List</Link>
          <br />
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Login with GitHub</button>
      )}
    </div>
  );
}

