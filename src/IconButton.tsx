import React, { ReactNode } from 'react'


const IconButton = ({ children }: { children: ReactNode }) => {
    return (
        <button>{children}</button>
    )
}

export default IconButton;