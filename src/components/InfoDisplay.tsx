
interface Props {
    value: string;
    text: string;
}

const InfoDisplay = ({ value, text }:Props) => {
  return (
    <div className="w-[165px] flex flex-col items-center gap-2">
        <h1 className="text-4xl text-primary font-bold">
            {value}
        </h1>
        <p className="">
            {text}
        </p>
    </div>
  )
}

export default InfoDisplay;