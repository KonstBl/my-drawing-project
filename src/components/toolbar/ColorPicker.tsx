import {useState} from 'react'


export function ColorPicker(props: any) {
    
    const handleColorChange = (color: string)=> {
        props.onColorChange(color)
    }

    return(
        <div className='flex items-center'>
    <input 
        onChange={(e) => handleColorChange(e.target.value)} 
        className="m-1 cursor-pointer" 
        type="color" 
    />
</div>

    )
}