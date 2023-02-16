import { SubmitHandler, useForm } from 'react-hook-form';
import { REGISTRATION_VALIDATION } from '@/constants/registration';
import { REGISTRY_STYLES } from '@/components/Shared/AuthForm/styles';

type Inputs = {
  email: string;
  password: string;
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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, 'data');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={REGISTRY_STYLES.FORM_WRAPPER}>
      <input
        type="email"
        placeholder="Your email"
        {...register('email', REGISTRATION_VALIDATION.EMAIL)}
        className={REGISTRY_STYLES.COMMON_INPUT}
      />
      {errors.email && (
        <span className={REGISTRY_STYLES.ERROR_MESSAGE}>{errors.email.message}</span>
      )}

      <input
        type="password"
        placeholder="Your password"
        {...register('password', REGISTRATION_VALIDATION.PASSWORD)}
        className={REGISTRY_STYLES.COMMON_INPUT}
      />
      {errors.password && (
        <span className={REGISTRY_STYLES.ERROR_MESSAGE}>{errors.password.message}</span>
      )}

      <input
        type="submit"
        value={signUp ? 'Register' : 'Login'}
        className={REGISTRY_STYLES.BUTTON_SUBMIT}
      />
    </form>
  );
};

export default AuthForm;
