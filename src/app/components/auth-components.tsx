import { signIn } from 'next-auth/react';
import React from 'react'

const Login = ({
    provider,
  ...props
}:{ provider?: string }) => {
  return (
    <form 
    action={async () => {
        "use client";
        await signIn(provider);
    }}>
        <button>Login</button>
    </form>
  );
}

export default Login