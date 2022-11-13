import React, { FC } from 'react'

import { LayoutContent, LayoutFooter, LayoutHeader } from '../parts'
import { OnlyChildProps } from '../../../types/types'
import Sidebar from "../../navigation/SideBar/Sidebar";

const Layout: FC<OnlyChildProps> = ({ children }) => {
    return (
        <div>
            <LayoutHeader />
            <LayoutContent>{children}</LayoutContent>
            <LayoutFooter />
        </div>
    )
}

export default Layout
