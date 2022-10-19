import React, { FC } from 'react'
import { OnlyChildProps } from '../../../../types/types'

const LayoutContent: FC<OnlyChildProps> = ({ children }) => {
    return <div>{children}</div>
}

export default LayoutContent
