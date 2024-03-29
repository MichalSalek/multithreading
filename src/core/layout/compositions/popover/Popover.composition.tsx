import {Popover, Typography} from '@mui/material'
import React, {ReactNode} from 'react'
import scss from './Popover.module.scss'



type Props = {
  children: ReactNode
  textContent: string
}



export const PopoverComposition = ({children, textContent}: Props): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <span className={scss.host}>
            <button aria-describedby={id} onClick={handleClick}>{children}</button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
            >
                <Typography sx={{p: 3}} className={scss.textContent}>{textContent}</Typography>
            </Popover>
        </span>
    )
}