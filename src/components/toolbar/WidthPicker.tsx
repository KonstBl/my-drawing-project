export function WidthPicker(props: any) {

    const handleWidthChange = (width: number)=> {
        props.onWidthChange(width)
    }

    return(
        <select className="m-1 p-1 cursor-pointer bg-dusty-rose rounded-md shadow-md transition focus:text-rose-quartz dark:focus:text-rose-quartz hover:bg-coral dark:hover:bg-coral">
            <option className="text-rose-quartz" value="1" onClick={() => handleWidthChange(1)}>1px</option>
            <option className="text-rose-quartz" value="2" onClick={() => handleWidthChange(2)}>2px</option>
            <option className="text-rose-quartz" value="3" onClick={() => handleWidthChange(3)}>3px</option>
            <option className="text-rose-quartz" value="4" onClick={() => handleWidthChange(4)}>4px</option>
            <option className="text-rose-quartz" value="6" onClick={() => handleWidthChange(6)}>6px</option>
            <option className="text-rose-quartz" value="8" onClick={() => handleWidthChange(8)}>8px</option>
        </select>

    )
}