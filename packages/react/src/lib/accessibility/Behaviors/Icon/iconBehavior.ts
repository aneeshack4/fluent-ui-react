import { Accessibility } from '../../types'

/**
 * @description
 * Icon is usually only visual representation and therefore is hidden from screen readers.
 *
 * @specification
 * Adds attribute 'aria-hidden=true' to icon.
 */

const iconBehavior: Accessibility = (props: any) => ({
  attributes: {
    root: {
      role: 'img',
      'aria-hidden': props['alt'] || props['aria-label'] ? undefined : 'true',
    },
  },
})

export default iconBehavior
