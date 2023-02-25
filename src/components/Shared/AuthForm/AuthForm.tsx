import { SubmitHandler, useForm } from 'react-hook-form';
import { REGISTRATION_VALIDATION } from '@/constants/registration';
import { REGISTRY_STYLES } from '@/components/Shared/AuthForm/styles';
import useAuth from '@/hooks/useAuth';

type Inputs = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

interface Props {
  signUp: boolean;
}

const AuthForm = ({ signUp }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const { loginHandler, registrationHandler } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (signUp) {
      await registrationHandler(data);
    } else {
      await loginHandler({ email: data.email, password: data.password });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={REGISTRY_STYLES.FORM_WRAPPER}>
      {signUp && (
        <>
          <div className={REGISTRY_STYLES.INPUT_WRAPPER}>
            <input
              type="text"
              placeholder="First Name"
              {...register('firstname', REGISTRATION_VALIDATION.FIRST_NAME)}
              className={REGISTRY_STYLES.COMMON_INPUT}
            />
            {errors.firstname && (
              <span className={REGISTRY_STYLES.ERROR_MESSAGE}>{errors.firstname.message}</span>
            )}
          </div>
          <div className={REGISTRY_STYLES.INPUT_WRAPPER}>
            <input
              type="text"
              placeholder="Last Name"
              {...register('lastname', REGISTRATION_VALIDATION.LAST_NAME)}
              className={REGISTRY_STYLES.COMMON_INPUT}
            />
            {errors.lastname && (
              <span className={REGISTRY_STYLES.ERROR_MESSAGE}>{errors.lastname.message}</span>
            )}
          </div>
        </>
      )}
      <div className={REGISTRY_STYLES.INPUT_WRAPPER}>
        <input
          type="email"
          placeholder="Your email"
          {...register('email', REGISTRATION_VALIDATION.EMAIL)}
          className={REGISTRY_STYLES.COMMON_INPUT}
        />
        {errors.email && (
          <span className={REGISTRY_STYLES.ERROR_MESSAGE}>{errors.email.message}</span>
        )}
      </div>

      <div className={REGISTRY_STYLES.INPUT_WRAPPER}>
        <input
          type="password"
          placeholder="Your password"
          {...register('password', REGISTRATION_VALIDATION.PASSWORD)}
          className={REGISTRY_STYLES.COMMON_INPUT}
        />
        {errors.password && (
          <span className={REGISTRY_STYLES.ERROR_MESSAGE}>{errors.password.message}</span>
        )}
      </div>

      <input
        type="submit"
        value={signUp ? 'Register' : 'Login'}
        className={REGISTRY_STYLES.BUTTON_SUBMIT}
      />
    </form>
  );
};

export default AuthForm;
