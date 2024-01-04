import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export function SaveButton() {

    const handleSave = () => {
        const svgElement = document.getElementById('svgElement');

        if (svgElement) {
            domtoimage.toBlob(svgElement)
                .then(function (blob) {
                    saveAs(blob, 'my_drawing.png');
                });
        }
    }

    return (
        <button className='mt-2 
        mr-3 
        p-1 
        cursor-pointer 
        bg-dusty-rose
        rounded-md 
        shadow-md 
        transition 
        hover:text-rose-quartz dark:hover:text-rose-quartz
        hover:bg-coral dark:hover:bg-coral'
        onClick={handleSave}>
            Save .png
            </button>
    );
}

export default SaveButton;
