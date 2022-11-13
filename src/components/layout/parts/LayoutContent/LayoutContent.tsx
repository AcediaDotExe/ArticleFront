import React, { FC } from 'react'
import { OnlyChildProps } from '../../../../types/types'
import Sidebar from '../../../navigation/SideBar/Sidebar'

const LayoutContent: FC<OnlyChildProps> = ({ children }) => {
    return (
        <>
            <div>{children}</div>
        </>
    )
}

export default LayoutContent
