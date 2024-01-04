import { useState } from "react";

export function Eraser(props: any) {

    const [eraserStatus, setEraserStatus] = useState<boolean>(false)

    const handleToggleEraser = (eraserStatus: boolean) => {
        setEraserStatus(prevState => !prevState);
        props.eraserToggle(!eraserStatus)
      };

    return(
        <button 
        onClick={()=> handleToggleEraser(eraserStatus)} 
        className={`
        m-1 p-1 
        cursor-pointer
        bg-${eraserStatus ? 'coral' : 'dusty-rose'}
        rounded-md 
        shadow-md 
        transition hover:bg-coral dark:hover:bg-coral
        `}>
            <img 
            width="30" 
            height="30" 
            src={eraserStatus ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABF0lEQVR4nO2WTQrCMBCFewHdVfQEekO3XkHxZLbYiRn8XXmDJpvI2Ir0jyTTRhR8MFDaho+8zuskiv76FZnDYaxQbDXClYqu6V5oaKyl2GkUplJSZOa8n30WigHhxgYNATeu0CHhBnGipUicoW94wm44NrQshbAJb2/rruHyeSg+7T6z7FUS7n3AytXqyjel5kCcKClWzN0mJstGfvZSHE7p9PVMIyw9oZX1LKg33AM6rtvb9a7V9iK7sRVKKqaMHWqF+0BJGuFGC/NjNo8c1YD7QknFTPUDF91eRo0D5VjdiBwH6ttcg0E749Qy0mpQt8j0hQeDdlmZn2BBpRHSwexlHeaG3mn78RU2NE+plIS10w//r2/RA21mGrTX4+NmAAAAAElFTkSuQmCC" 
            : "https://img.icons8.com/ios-glyphs/30/eraser.png"}
            />
        </button>
    )
}