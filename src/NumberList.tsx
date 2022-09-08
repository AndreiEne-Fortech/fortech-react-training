import React, { useState, useMemo, useCallback } from 'react'

export default function NumberList(){
    const [numbers, setNumbers] = useState([10,7,25,45,1,6,3]);
    const sortedNumbers = useMemo(() =>{
            console.log("Sorting...")
            return numbers.sort((a,b) => a-b)
        },
        [numbers]
    )
    const handleClick = useCallback(()=>{
        setNumbers(oldNumbers => [...oldNumbers, Math.random()*100])
    },[setNumbers])

    return(
        <>
            <ul>
                {sortedNumbers.map((num) => <li key={num}>{num}</li>)}
            </ul>
            <button onClick={handleClick}>Add Random Number</button>
        </>
    )
}