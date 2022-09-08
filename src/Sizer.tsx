import React, { useEffect, useRef, useState } from 'react'

export default function Sizer(){
    const refDiv = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(()=>{
        console.log(refDiv.current)
        console.log(refDiv.current?.clientHeight)
        console.log(refDiv.current?.clientWidth)
        if(refDiv.current?.clientHeight){
            setHeight(refDiv.current?.clientHeight)
        }
    })


    const clickHandler = ()=>{
        if (refDiv.current !== null){
            refDiv.current.setAttribute("style", "width: 500px; height: 500px; background-color: red")
            setHeight(refDiv.current?.clientHeight)
        }
    }

    return (
        <>
            <div>{height}</div>
            <div ref={refDiv} style={{width: 200, height: 200, backgroundColor: "red"}}>Hello! I am a Div!</div>
            <button onClick={clickHandler}>Enlarge</button>
        </>
    )
}