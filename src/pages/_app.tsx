import React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '@/core/store.core'
import LayoutComposition from '@/layout/Layout.composition'
import BrowserStoragePersistController from '@/features/background/browser-storage/BrowserStoragePersist.controller'
import SocketConnectionAndListeningController
    from '@/features/background/socket-client/SocketConnectionAndListening.controller'
import WorkersActiveInstancesAndCommunicationController
    from '@/features/background/web-workers/WorkersActiveInstancesAndCommunication.controller'
import { CssBaseline, ThemeProvider } from '@mui/material'
import FPSMonitorWindowMolecule from '@/features/building/fps-monitor/UI/FPSMonitorWindow.molecule'
import IconPackController from '@/features/background/icon-pack/IconPack.controller'
import BorderColorChangeController from '@/features/background/border-color-change/BorderColorChange.controller'
import { createTheme } from '@mui/material/styles'
import { grey, lightBlue } from '@mui/material/colors'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ROUTE_START_PAGE_SCREEN } from '@/core/routes.core'
import WorkersScoreboardWindowMolecule from '@/features/building/workers-scoreboard/UI/WorkersScoreboardWindow.molecule'
import WorkersGlobalWorkControlWindowMolecule
    from '@/features/building/workers-global-work-control/UI/WorkersGlobalWorkControlWindow.molecule'
import MetaHead from '@/layout/partials/MetaHead'
import '@/global-styles/variables-and-mixins.scss'
import '@/global-styles/global-styles.scss'



const ControlPanelMolecule = dynamic(() =>
    import('@/features/building/control-panel/UI/ControlPanel.molecule'), {ssr: false})



// Main application component.
// Includes app layout as well as realtime controllers
//
export default function ApplicationComposition({Component, pageProps}: AppProps) {

    const router = useRouter()


    const isTheStartPageActually = (): boolean => router.route === ROUTE_START_PAGE_SCREEN

    const theme = createTheme({
        palette: {
            primary: {
                main: grey[900]
            },
            secondary: {
                main: lightBlue[800],
                contrastText: lightBlue[100]

            },
            mode: 'dark'
        },

        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        boxShadow: '0 0 1rem 0 rgba(204, 204, 204, 0.3)',
                        borderWidth: '1px',
                        borderColor: 'rgba(153, 153, 153, 0.7)',
                        borderStyle: 'solid'
                    }
                }
            },
            MuiPopover: {
                styleOverrides: {
                    paper: {
                        maxWidth: '590px',
                        width: '100%',
                        backgroundColor: '#027bde',
                        color: 'white'
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        color: '#e0e0e0'
                    }
                }
            },
            MuiButtonGroup: {
                styleOverrides: {
                    root: {
                        borderColor: '#027bde',
                        borderWidth: '1px',
                        borderStyle: 'solid'
                    }
                }
            },
            MuiBadge: {
                styleOverrides: {
                    badge: {
                        pointerEvents: 'all'
                    }
                }
            }
        }
    })

    return (<ThemeProvider theme={theme}>

        <CssBaseline/>

        <MetaHead/>


        <Provider store={store}>

            {/* Controllers required for keeping the proper functionality of some the application parts.
			With them, operating the each others APIs they served, at a different app's nooks becomes simple and DECLARATIVE. */}
            <IconPackController/>
            <SocketConnectionAndListeningController/>
            <WorkersActiveInstancesAndCommunicationController/>
            <BrowserStoragePersistController/>
            <BorderColorChangeController/>


            {/* Whole app runtime components - above all pages during a whole app life. */}
            {isTheStartPageActually() ? <></> : (<>
                <FPSMonitorWindowMolecule/>
                <WorkersScoreboardWindowMolecule/>
                <WorkersGlobalWorkControlWindowMolecule/>
                <ControlPanelMolecule/>
            </>)}


            <LayoutComposition>
                <Component {...pageProps} />
            </LayoutComposition>

        </Provider>

    </ThemeProvider>)
}

