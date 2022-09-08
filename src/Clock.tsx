import React, { useEffect, useRef, useState } from 'react'

export default function Clock(){
    const refTimeout = useRef<any>(null);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        refTimeout.current = setTimeout(()=> setSeconds(oldSeconds => oldSeconds + 1), 1000)
        return () => {
            clearTimeout(refTimeout.current)
        }
    }, [seconds])

    return (
        <span>{seconds}</span>
    )
}