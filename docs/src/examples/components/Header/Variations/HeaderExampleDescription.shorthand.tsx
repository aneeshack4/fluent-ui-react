import * as React from 'react'
import { Header } from '@stardust-ui/react'

const HeaderExampleDescriptionShorthand = () => (
  <Header<'h2'>
    as="h2"
    content="Account Settings"
    description="Manage your account settings and set email preferences."
  />
)

export default HeaderExampleDescriptionShorthand
