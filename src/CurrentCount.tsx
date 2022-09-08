import React from 'react'

interface ICurrentCountProps{
    count: number
}

export default function CurrentCount({ count } : ICurrentCountProps) {
    return (
        <h1>Current count: {count}</h1>
    )
}