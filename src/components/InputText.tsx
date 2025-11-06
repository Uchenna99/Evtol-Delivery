

interface Props {
    title: string;
    placeHolder?: string;
    require?: boolean;
}

const InputText = ({ title, placeHolder, require }:Props) => {
  return (
    <div className="w-full min-w-[100px] flex flex-col gap-1">
        <label htmlFor="input" className="text-text">{title}</label>
        <input type="text" 
            id="input"
            className="h-10 px-4 rounded-md border-none outline-none ring-1 ring-primary focus:ring-2
            placeholder:text-primary/50 transition-all duration-200"
            placeholder={placeHolder}
            required={require}
        />
    </div>
  )
}

export default InputText;