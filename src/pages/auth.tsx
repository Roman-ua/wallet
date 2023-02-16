import React, { useState } from 'react';
import AuthForm from '@/components/Shared/AuthForm/AuthForm';

export default function Auth() {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="dark">
      <div className="bg-white dark:bg-slate-800 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4 h-400 w-96 bg-amber-50/25 p-14 rounded  backdrop-blur-md">
          <div className="font-bold text-2xl text-slate-50 w-full text-left">
            {signUp ? 'Sign Up' : 'Sign In'}
          </div>
          <AuthForm signUp={signUp} />
          <div
            className="cursor-pointer w-full text-right text-slate-800"
            onClick={() => setSignUp(!signUp)}>
            {signUp ? 'Sign In' : 'Sign Up'}
          </div>
        </div>
      </div>
    </div>
  );
}
