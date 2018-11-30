import Typography from 'typography'
// import funstonTheme from 'typography-theme-funston'
// import githubTheme from 'typography-theme-github'

// const typography = new Typography(githubTheme)

// // Hot reload typography in development.
// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles()
// }
const typography = new Typography()

export default typography

// typography.rhythm is a function that accept a number rhythm(1) or fraction rhythm(1/2)
// it will return a "rhythm unit" (the height of the base line height) in rem for the current typography function
export const rhythm = typography.rhythm

// typography.scale is a function that will return an javascript object containing the
// base fontSize and lineHeight and will accept a number scale(1) or fraction scale(1/2)
export const scale = typography.scale
