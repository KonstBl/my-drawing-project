import { useRef, useState } from "react";
import { ColorPicker } from "../components/toolbar/ColorPicker";
import { DrawZone } from "../components/DrawZone";
import SaveButton from "../components/SaveButton";
import { WidthPicker } from "../components/toolbar/WidthPicker";
import { Eraser } from "../components/toolbar/Eraser";

export function CanvasPage() {
    const [currentColor, setCurrentColor] = useState<string>('#000')
    const [currentWidth, setCurrentWidth] = useState<number>(1)
    const [eraser, setEraser] = useState<boolean>(false)

    const handleColorChange = (color: string)=> {
        setCurrentColor(color)
    }

    const handleWidthChange = (width: number)=> {
        setCurrentWidth(width)
    }

    const handleEraserChange = (eraserStatus: boolean)=> {
        setEraser(eraserStatus)
    }

        return(
            <div className={`h-screen bg-rose-quartz`}>
                <div className="flex bg-rose-quartz">
                    <ColorPicker onColorChange={handleColorChange} />
                    <WidthPicker onWidthChange={handleWidthChange} />
                    <Eraser 
                    onColorChange={handleColorChange} 
                    onWidthChange={handleWidthChange}
                    eraserToggle={handleEraserChange}
                    />
                    <div className="ml-auto">
                        <SaveButton />
                    </div>
                </div>
                <DrawZone
                color={ eraser ? '#f9f1f0' : currentColor} 
                width={ eraser ? 25 : currentWidth } 
                />
            </div>
        )
}