import React from 'react'

interface ILinkProps{
    to:string
    children:React.ReactNode
}

const Link = ({ to, children }:ILinkProps) => {
    return (
        <a href={to}>{children}</a>
    )
}

export default Link;