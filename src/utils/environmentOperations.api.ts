import { UnknownFunctionType } from '@/core/types.core'
import { addConsoleVerbose } from '@/application/logger/logger.api'



// Server Side Rendering guard for browser common objects access while Next.js making a build.
//
export const fireClientSide = <D>(clientSideCallback: UnknownFunctionType<undefined, D>, loggerAdditionalEcho = ''): D | null => {
    loggerAdditionalEcho && addConsoleVerbose(`[Trying to -> ${loggerAdditionalEcho}]`)
    if (!(typeof window === 'undefined' && !process.browser)) {
        return clientSideCallback()
    } else {
        loggerAdditionalEcho && addConsoleVerbose(`[Failed -> ${loggerAdditionalEcho}] - Probably server side.`)
        return null
    }
}
