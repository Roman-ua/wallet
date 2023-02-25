import React, { useState } from 'react';
import AuthForm from '@/components/Shared/AuthForm/AuthForm';
import { REGISTRY_STYLES } from '@/components/Shared/AuthForm/styles';
import AuthLayout from '@/components/Shared/AuthLayout/AuthLayout';

export default function Home() {
  const [signUp, setSignUp] = useState(true);

  const changeFormHandler = () => {
    setSignUp(!signUp);
  };

  return (
    <AuthLayout>
      <div className={REGISTRY_STYLES.AUTH_PAGE_WRAPPER}>
        <div className={REGISTRY_STYLES.AUTH_FORM_WRAPPER}>
          <AuthForm signUp={signUp} />
          <div className={REGISTRY_STYLES.AUTH_FORM_SWITCHER} onClick={changeFormHandler}>
            {signUp ? 'Sign In' : 'Sign Up'}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
