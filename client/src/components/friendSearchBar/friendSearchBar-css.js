const style = {
  container: {
    position: 'relative'
  },
  input: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '13px',
    letterSpacing: '3px',
    fontFamily: 'Quicksand',
    width: 240,
    height: 30,
    padding: '10px 20px',
    border: '2px solid #ffbfda',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: 280,
    color: '#ffffff',
    fontSize: '13px',
    letterSpacing: '1px',
    fontFamily: 'Quicksand',
    // border: '1px solid #aaa',
    // backgroundColor: '#fff',
    border: 'transparent',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ffbfda'
  },
  button: {
    backgroundColor: 'transparent',
    border: '2px solid #ffbfda',
    marginRight: '20px',
    color: '#ffffff',
    fontSize: '13px',
    letterSpacing: '1px',
    padding: '10px 20px',
    margin: '10px',
    fontFamily: 'Quicksand',
    cursor: 'pointer'
  },
  buttonHover: {
    backgroundColor: '#ffbfda',
    border: '2px solid #ffbfda',
    marginRight: '20px',
    color: '#000000',
    fontSize: '13px',
    letterSpacing: '1px',
    padding: '10px 20px',
    margin: '10px',
    fontFamily: 'Quicksand',
    cursor: 'pointer'
  }
}

// const style = {
//   'container': {
//     color: '#ffffff',
//     display: 'flex',
//     flexWrap: 'wrap',
//     justfityContent: 'center'
//   },
//   'input': {
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//     'width': '240px',
//     'height': '100%',
//     'padding': '10px 20px',
//     fontFamily: 'Quicksand',
//     fontSize: '15px',
//     'fontWeight': '500',
//     'border': 'transparent',
//     'WebkitAppearance': 'none'
//   },
//   'inputFocused': {
//     'outline': 'none'
//   },
//   'inputMsClear': {
//     'display': 'none'
//   },
//   'inputOpen': {
//     'borderBottomLeftRadius': '0',
//     'borderBottomRightRadius': '0'
//   },
//   'suggestionsContainer': {
//     'display': 'none'
//   },
//   'suggestionsContainerOpen': {
//     'display': 'block',
//     'position': 'absolute',
//     'top': '-1px',
//     'width': '280px',
//     fontFamily: 'Quicksand',
//     fontSize: '15px',
//     color: '#ffffff',
//     'border': 'transparent',
//     'backgroundColor': 'transparent',
//     'fontWeight': '300',
//     'borderBottomLeftRadius': '4px',
//     'borderBottomRightRadius': '4px',
//     'zIndex': '2'
//   },
//   'suggestionsList': {
//     'margin': '0',
//     'padding': '0',
//     'listStyleType': 'none'
//   },
//   'suggestion': {
//     margin: '10px',
//     'cursor': 'pointer',
//     'padding': '10px 20px'
//   },
//   'suggestionHighlighted': {
//     'backgroundColor': 'gray'
//   },
//   button: {
//     marginLeft: '20px',
//     backgroundColor: 'transparent',
//     border: 'transparent',
//     color: '#ffffff',
//     fontSize: '13px',
//     letterSpacing: '6px',
//     padding: '10px 20px',
//     margin: '10px',
//     fontFamily: 'Quicksand',
//     cursor: 'pointer'
//   }

// }

// const style = {
//   bar: {
//     backgroundColor: '#000000'
//   },

export default style
