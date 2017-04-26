import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const colors = {
  purple:'#f001f2',
  pink: '#ffbfda',
  white: '#ffffff',
  black: '#000000'
}
const customTheme = darkBaseTheme;
customTheme.fontFamily = 'Quicksand'  
customTheme.palette.canvasColor = colors.black
customTheme.palette.textColor = colors.pink
customTheme.palette.alternateTextColor = colors.white
customTheme.palette.primary1Color = colors.pink
customTheme.palette.primary2Color = colors.pink
customTheme.palette.primary3Color = colors.pink
customTheme.palette.accent1Color = colors.purple
customTheme.palette.accent2Color = colors.purple
customTheme.palette.accent3Color = colors.purple
const customMuiTheme = getMuiTheme(customTheme)


const titleStyle = {
  marginTop: '75px',
  letterSpacing: '12px',
  textAlign: 'center'
}


export { customMuiTheme, titleStyle }