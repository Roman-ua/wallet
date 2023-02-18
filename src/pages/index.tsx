import React, { useState } from 'react';
import AuthForm from '@/components/Shared/AuthForm/AuthForm';
import Link from 'next/link';
import AuthLayout from '@/components/Shared/AuthLayout/AuthLayout';
import { REGISTRY_STYLES } from '@/components/Shared/AuthForm/styles';

export default function Home() {
  const [signUp, setSignUp] = useState(true);

  const changeFormHandler = () => {
    setSignUp(!signUp);
  };

  return (
    <AuthLayout>
      <div className={REGISTRY_STYLES.AUTH_FORM_WRAPPER}>
        <div className={REGISTRY_STYLES.AUTH_FORM_TITLE}>{signUp ? 'Sign Up' : 'Sign In'}</div>
        <AuthForm signUp={signUp} />
        <div className={REGISTRY_STYLES.AUTH_FORM_SWITCHER} onClick={changeFormHandler}>
          {signUp ? 'Sign In' : 'Sign Up'}
        </div>
        <Link href="/main/dashboard">TEST</Link>
      </div>
    </AuthLayout>
  );
}
