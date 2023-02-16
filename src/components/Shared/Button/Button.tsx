interface Props {
  type: 'button' | 'submit' | 'reset',
  title: string,
  extraStyles?: string
}

const Button = ({type, title, extraStyles}: Props) => {
  return (
    <button
      type={type}
      className={`w-full rounded ${extraStyles}`}
    >{title}</button>
  )
}

export default Button;
