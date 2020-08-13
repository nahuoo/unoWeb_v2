const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px'
}

const device = {
  mobile: (styles) => {
    return `@media (min-width: ${sizes.mobile}) {
      ${styles}
    }`
  },

  tablet: (styles) => {
    return `@media (min-width: ${sizes.tablet}) {
      ${styles}
    }`
  },
  
  desktop: (styles) => {
    return `@media (min-width: ${sizes.desktop}) {
      ${styles}
    }`
  },
}

export default device