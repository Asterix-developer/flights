import React, { FC, PropsWithChildren, ReactNode } from 'react'
import './Card.scss';

interface CardProps {
    // children: ReactNode,
    style?: React.CSSProperties
}

const Card = ({ children, style }: PropsWithChildren<CardProps>) => {
    return (
        <div className='card' style={style}>
            {children}
        </div>
    )
}

export default Card