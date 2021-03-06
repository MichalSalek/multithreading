import React, { useCallback, useEffect, useState } from 'react'

import scss from './controlPanel.module.scss'
import { useAppDispatch, useAppSelector } from '@/core/store.core'
import {
    handleControlPanelSwitchVisibility,
    ISystemComponentsVisibilities,
    selectSystemComponentsVisibilities
} from '@/features/building/control-panel/controlPanelSlice'
import { useControlPanelCollapseStateStoragePersist } from '@/features/background/browser-storage/browserStorage.hooks'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import {
    MIN_DESKTOP_INNER_WIDTH_MEDIA_QUERY,
    STORAGE_KEY_FLOATING_COMPONENT_ON_THE_SCREEN_POSITION
} from '@/app-config-constants'
import { getStorageItem, setStorageItem } from '@/features/background/browser-storage/browserStorage.api'
import useMediaQuery from '@mui/material/useMediaQuery'



const Y_AXIS_STORAGE_KEY = `${STORAGE_KEY_FLOATING_COMPONENT_ON_THE_SCREEN_POSITION}_controlPanelYAxis`


const ControlPanelMolecule = (): JSX.Element => {

    const dispatch = useAppDispatch()


    const nodeRef = React.createRef<HTMLDivElement>()


    const systemComponentsVisibilities: ISystemComponentsVisibilities = useAppSelector(selectSystemComponentsVisibilities)


    const [isListCollapsed, setIsListCollapsed] = useControlPanelCollapseStateStoragePersist(false)

    const collapseListHandler = () => setIsListCollapsed((prevVal) => !prevVal)


    const [isAlreadyDragged, setIsAlreadyDragged] = useState(false)


    const [YAxisPositionOfControlPanel, setYAxisPositionOfControlPanel] = useState(30)

    const isDesktopResolution = useMediaQuery(MIN_DESKTOP_INNER_WIDTH_MEDIA_QUERY)

    const [positionFlipped, setPositionFlipped] = useState(isDesktopResolution)

    useEffect(() => {
        setPositionFlipped(!isDesktopResolution)
        return () => undefined
    }, [isDesktopResolution])


    useEffect(() => {
        setIsListCollapsed(true)
        return () => undefined
    }, [positionFlipped, setIsListCollapsed])


    useEffect(() => {
        const memoizedValue = getStorageItem(Y_AXIS_STORAGE_KEY)
        if (typeof memoizedValue === 'string') {
            setYAxisPositionOfControlPanel(Number(memoizedValue))
        }
        return () => undefined
    }, [])


    const onStopDragHandler = (event: DraggableEvent, data: DraggableData) => {
        setIsAlreadyDragged(false)
        setYAxisPositionOfControlPanel(data.y)
        setStorageItem(Y_AXIS_STORAGE_KEY, String(data.y))
    }

    const getUIEnabledFeatureClassName = useCallback(
        (featureVisibilityState: boolean): string => featureVisibilityState ? scss.enabledControl : scss.disabledControl, [])


    return (<aside className={[scss.host, (() => positionFlipped ? scss.hostFlipped : '')()].join(' ')}>
        <Draggable
            nodeRef={nodeRef}
            handle="#moveHandler"
            bounds={'body'}
            axis={positionFlipped ? 'x' : 'y'}
            position={positionFlipped ? {
                x: 0,
                y: 0
            } : {
                x: 0,
                y: YAxisPositionOfControlPanel
            }}
            onStart={() => setIsAlreadyDragged(true)}
            onStop={onStopDragHandler}
        >
            <aside
                ref={nodeRef}
                className={[scss.innerHost, 'turn-on-opacity-animation'].join(' ')}>
                <section className={[scss.hostSection, 'turn-on-opacity-animation'].join(' ')}>

                    <nav id={'collapseSwitch'} onClick={collapseListHandler}
                        className={[scss.collapseHandler, 'enabled-border-state'].join(' ')}>
                        <section className={isListCollapsed ? 'display-none' : ''}>
                            <i className="fad fa-arrow-alt-from-right"/>
                        </section>

                        <section className={isListCollapsed ? '' : 'display-none'}>
                            <i className="fad fa-arrow-alt-to-right"/>
                        </section>
                    </nav>


                    <section
                        className={[
                            scss.controlsListContainer,
                            (() => isListCollapsed ? scss.collapsedControlsList : scss.expandedControlsList)(),
                            'enabled-border-state'
                        ].join(' ')}>


                        <section className={scss.placementControlsContainer}>
                            {!positionFlipped &&
                            <nav
                                id={'moveHandler'}
                                className={[scss.moveHandler, 'fa-2x', 'fa-swap-opacity', isAlreadyDragged ? scss.moveHandlerIsEnabled : ''].join(' ')}>
                                <i className="fad fa-arrows-alt-v"/>
                            </nav>
                            }

                            <nav
                                onClick={() => setPositionFlipped((prevState: boolean) => !prevState)}
                                className={[scss.changePositionHandler, 'fa-lg', 'fa-swap-opacity'].join(' ')}>
                                <i className="fad fa-exchange-alt"/>
                            </nav>
                        </section>


                        <ul className={scss.controlsList}>

                            <li className={[scss.listItem, getUIEnabledFeatureClassName(systemComponentsVisibilities.FPSMonitor)].join(' ')}>
                                <button
                                    onClick={() => dispatch(handleControlPanelSwitchVisibility({name: 'FPSMonitor'}))}>
                                    <span>FPS MONITOR</span>
                                    <i className="fad fa-tachometer-alt"/>
                                </button>
                            </li>

                            <li className={[scss.listItem, getUIEnabledFeatureClassName(systemComponentsVisibilities.scoreboard)].join(' ')}>
                                <button
                                    onClick={() => dispatch(handleControlPanelSwitchVisibility({name: 'scoreboard'}))}>
                                    <span>SCOREBOARD</span>
                                    <i className="fad fa-tasks-alt"/>
                                </button>
                            </li>

                            <li className={[scss.listItem, getUIEnabledFeatureClassName(systemComponentsVisibilities.workControl)].join(' ')}>
                                <button
                                    onClick={() => dispatch(handleControlPanelSwitchVisibility({name: 'workControl'}))}>
                                    <span>WORK CONTROL</span>
                                    <i className="fad fa-tools"/>
                                </button>
                            </li>
                        </ul>
                    </section>

                </section>

            </aside>
        </Draggable>
    </aside>)

}

export default ControlPanelMolecule