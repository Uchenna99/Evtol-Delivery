

interface Props {
    title: string;
    placeHolder?: string;
    require?: boolean;
    value: string;
    onInputChange: (value: string) => void;
}

const InputText = ({ title, placeHolder, require, value, onInputChange }:Props) => {
  return (
    <div className="w-full min-w-[100px] flex flex-col gap-1">
        <label htmlFor={title} className="text-text">{title}{require && <span className="text-red-500"> *</span>}</label>
        <input type="text" 
            id={title}
            className="h-10 px-4 rounded-md border-none outline-none ring-1 ring-primary focus:ring-2
            placeholder:text-primary/50 transition-all duration-200"
            placeholder={placeHolder}
            value={value}
            onChange={(e)=>onInputChange(e.target.value)}
            required={require}
        />
    </div>
  )
}

export default InputText;