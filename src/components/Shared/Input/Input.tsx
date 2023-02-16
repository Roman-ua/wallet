interface Props {
  type: string;
  placeholder: string;
  extraStyles?: string;
}

const Input = ({ type, placeholder, extraStyles }: Props) => {
  return <input type={type} placeholder={placeholder} className={`w-full ${extraStyles}`} />;
};

export default Input;
