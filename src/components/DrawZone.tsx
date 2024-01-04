import { useEffect, useRef, useState } from "react"
import { Selection, pointer, select } from "d3-selection";

export function DrawZone(props: any) {

    const ref = useRef<SVGSVGElement | null >(null)
    const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    let lineData: any = []

    const handleClearCanvas = () => {
        select(ref.current).selectAll("line").remove();
        localStorage.removeItem('drawZoneData');
      };

    useEffect(()=> {
        const svg = select("#svgElement")
            .attr('width', '100%')
            .attr('height', '100%')
            .style('max-width', '100%')
            .style('max-height', '100%')
            .style('margin', '1')
            .style('background', '#F9F1F0')
            .style('box-shadow', '1px 1px 5px white')

        const component = ref.current

            svg.on('mousedown', ()=> {
                setIsDrawing(true);
                lineData = []
            });

        
            svg.on('mousemove', (event) => {
                if(isDrawing) {
                    const point = pointer(event, component)
                    lineData.push(point)
                    if(lineData.length > 1) {
                        svg
                        .append('line')
                        .attr('x1', lineData[lineData.length - 2][0])
                        .attr('y1', lineData[lineData.length - 2][1])
                        .attr('x2', point[0])
                        .attr('y2', point[1])
                        .attr('stroke', props.color)
                        .attr('stroke-width', props.width)
                    }
                }
               
                svg.on('mouseup', ()=> {
                    setIsDrawing(false);
                    });

            return ()=> {
                svg.on('mousedown', null)
                svg.on('mouseup', null)
                svg.on('mousemove', null)
            }
        })
        }, [props.color, props.width, isDrawing])

        

    return(
        <div className="bg-rose-quartz p-4 rounded-lg h-5/6">
            <svg id="svgElement" ref={ref} />
            <button 
                onClick={handleClearCanvas} 
                className="mt-2 p-2 cursor-pointer bg-dusty-rose rounded-md shadow-md 
                hover:bg-coral dark:hover:bg-coral">
                clear all
            </button>
        </div>
    )
}