import _ from 'lodash'
import flattenColorPalette from '../util/flattenColorPalette'
import withAlphaVariable from '../util/withAlphaVariable'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const colors = flattenColorPalette(theme('borderColor'))

    const utilities = _.fromPairs(
      _.map(_.omit(colors, 'default'), (value, modifier) => {
        return [
          `.${e(`border-${modifier}`)}`,
          withAlphaVariable({
            color: value,
            property: 'border-color',
            variable: '--border-opacity',
          }),
        ]
      })
    )

    addUtilities(utilities, variants('borderColor'))
  }
}
