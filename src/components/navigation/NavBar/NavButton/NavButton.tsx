import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    link: string
    children: JSX.Element | JSX.Element[] | string | string[]
}

const NavButton: FC<Props> = ({ link, children }) => {
    return (
        <Link to={link} style={{ color: 'white' }}>
            {children}
        </Link>
    )
}

export default NavButton
