
interface Props {
    text: string;
}

const Button1 = ({ text }:Props) => {
  return (
    <button className="bg-primary text-background px-3 py-2 rounded-md cursor-pointer hover:bg-secondary 
        transition-all duration-300 text-nowrap font-medium">
        {text}
    </button>
  )
}

export default Button1;