
interface Props {
    text: string;
    image: string;
}

const AboutUsCard = ({ text, image }:Props) => {
  return (
    <div className="w-[350px] rounded-2xl bg-secondary/10 flex flex-col shadow-sm hover:bg-white hover:shadow-md
      transition-all duration-200 overflow-hidden">

        <div className="w-full h-[200px] bg-accent/10 bg-no-repeat bg-center bg-cover"
        style={{backgroundImage:`url(${image})`}}></div>

        <div className="w-full flex p-5">
            <p className="text-text text-sm font-medium">
                {text}
            </p>
        </div>
    </div>
  )
}

export default AboutUsCard;