import * as React from 'react'
import { Image } from '@stardust-ui/react'

const Logo: any = props => <Image {...props} src="logo.png" />

Logo.propTypes = (Image as any).propTypes

export default Logo
