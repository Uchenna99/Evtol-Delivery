

interface Props {
    name: string;
    description: string;
    price: number;
}

const SupplyCard = ({ name, description, price }:Props) => {
  return (
    <div className="w-full max-w-80 h-[360px] rounded-lg ring ring-transparent hover:ring-secondary transition-all duration-200 
        cursor-pointer p-4 shadow-sm">

        <div className="w-full aspect-[3/2] rounded-lg bg-gray-100"></div>

        <div className="flex flex-col gap-2 py-4">
            <p className="text-text font-semibold">
                {name}
            </p>
            <p className="text-text/70 text-sm">
                {description}
            </p>
            <p className="text-primary font-semibold">
                ₦{price.toLocaleString()}
            </p>
        </div>

    </div>
  )
}

export default SupplyCard;