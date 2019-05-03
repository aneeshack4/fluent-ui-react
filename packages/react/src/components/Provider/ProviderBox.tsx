import * as React from 'react'
import { commonPropTypes } from '../../lib'
import createComponent from '../../lib/createComponent'
import { StardustProps } from '../../types'

const ProviderBox = createComponent<StardustProps<React.PropsWithChildren<{}>, any>>({
  displayName: 'ProviderBox',

  className: 'ui-provider__box',

  propTypes: {
    ...commonPropTypes.createCommon(),
  },

  render(config, props) {
    const { ElementType, classes, unhandledProps } = config
    const { children } = props
    if (ElementType === React.Fragment) {
      // do not spread anything - React.Fragment can only have `key` and `children` props.
      return <>{children}</>
    }

    return (
      <ElementType className={classes.root} {...unhandledProps}>
        {children}
      </ElementType>
    )
  },
})

export default ProviderBox
