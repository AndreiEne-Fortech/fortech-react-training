import React from 'react'

interface IIncrementButtonProps {
onClick: () => void;
}

export default function IncrementButton({ onClick }: IIncrementButtonProps) {
    const handleClick = () => { onClick(); }
    return (
        <button onClick={handleClick}>Increment</button>
    )
}