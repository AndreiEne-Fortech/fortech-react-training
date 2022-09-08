import { ReactNode } from "react";
import React from 'react';

interface ICTAButtonProps{
    children: ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CTAButton = ({ children, onClick }: ICTAButtonProps) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default CTAButton;