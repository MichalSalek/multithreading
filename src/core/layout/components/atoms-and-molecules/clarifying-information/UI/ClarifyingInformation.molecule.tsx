import React from 'react'
import { Typography } from '@mui/material'
import scss from './clarifyingInformation.module.scss'



const ClarifyingInformationMolecule = (): JSX.Element => {

    return <main className={scss.host}>


        <section className={scss.textBlock}>
            <Typography variant="h4">

                Multithreading in-browser CPU stability test.

            </Typography>
            <Typography variant="h6">

                The application can artificially load the CPU with random calculations performed by JavaScript.

            </Typography>
            <Typography variant="body1">

                Using a WebWorkers you can delegate heavy tasks to the other
                threads.<br/>

                What does means?<br/>

                Instead of wasting server resources and client transfer
                - does it instantly within the browser mechanisms - but without slowing down the User Interface.

            </Typography>
        </section>


        <section className={scss.textBlock}>
            <Typography variant="h6">

                To understand what is happening,

            </Typography>
            <Typography variant="body1">

                you need to monitor your device&apos;s CPU current load.

            </Typography>
        </section>


        <section className={scss.textBlock}>
            <Typography variant="h5">

                How to do it?

            </Typography>
            <Typography variant="h6">

                Are you a Microsoft Windows user?

            </Typography>
            <Typography variant="body1">

                Press all these buttons simultaneously:

            </Typography>
            <Typography variant="body1">

                CTRL <strong>+</strong> LEFT SHIFT <strong>+</strong> ESC
                <i className="fad fa-keyboard"/>

            </Typography>
            <Typography variant="body1">

                Then go to second tab - Performance.

            </Typography>
        </section>


        <section className={scss.textBlock}>
            <Typography variant="h6">

                Using smartphone?

            </Typography>
            <Typography variant="body1">

                Find and use an app like CPU monitor in the app store.

            </Typography>
        </section>

    </main>
}

export default ClarifyingInformationMolecule
