import React, {useState} from 'react'
import {Button} from '@mui/material'
import {ButtonProps} from '@mui/material/Button/Button'
import scss from './AppComponents.module.scss'
import {freezeThreadAndWait} from '@/utils/asyncOperations.api'



type Props = {
  freezeAfterClick?: boolean
}

const AppButtonAtom = (props: ButtonProps & Props): JSX.Element => {

    const [initialSettingsButtonDisabledState, setInitialSettingsButtonDisabledState] = useState(false)

    const disableTemporary = async () => {
        setInitialSettingsButtonDisabledState(true)
        await freezeThreadAndWait(450)
        setInitialSettingsButtonDisabledState(false)
    }

    return <Button
        color={'primary'}
        variant={'contained'}
        className={scss.button}
        {...props}
        disabled={props.disabled || initialSettingsButtonDisabledState}
        onClick={(event) => {
            props.freezeAfterClick && disableTemporary()

            props.onClick && props.onClick(event)
        }}
    />
}

export default AppButtonAtom
