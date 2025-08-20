
interface Props {
    text: string;
    onClick: ()=>void;
}

const Button2 = ({ text, onClick }:Props) => {
  return (
    <button className="w-full h-full flex items-center justify-center bg-primary text-background max-2xs:text-sm rounded-md 
        cursor-pointer hover:bg-secondary transition-all duration-300 text-nowrap font-medium"
        onClick={onClick}>
        {text}
    </button>
  )
}

export default Button2;