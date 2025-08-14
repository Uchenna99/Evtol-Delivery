
interface Props {
    text: string;
    onClick: ()=>void;
}

const Button1 = ({ text, onClick }:Props) => {
  return (
    <button className="bg-primary text-background max-2xs:text-sm px-3 py-2 rounded-md cursor-pointer hover:bg-secondary 
        transition-all duration-300 text-nowrap font-medium"
        onClick={onClick}>
        {text}
    </button>
  )
}

export default Button1;