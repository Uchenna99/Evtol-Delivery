
interface Props {
    text: string;
}

const AboutUsCard = ({ text }:Props) => {
  return (
    <div className="w-[350px] rounded-2xl bg-secondary/10 flex flex-col shadow-sm">

        <div className="w-full h-[200px] bg-accent/10 "></div>

        <div className="w-full flex p-5">
            <p className="text-text text-sm font-medium">
                {text}
            </p>
        </div>
    </div>
  )
}

export default AboutUsCard;