const style = {
  main: {
    position: 'relative',
    width: '500px'

  },
  // container: {
  //   position: 'relative',
  //   display: 'block'
  // },
  input: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '13px',
    letterSpacing: '3px',
    fontFamily: 'Quicksand',
    width: 240,
    height: 30,
    padding: '10px 20px',
    border: 'transparent'
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
  sectionDiv: {
    color: '#ffffff',
    borderBottom: '2px solid #ffffff',
    marginLeft: '15px',
    marginRight: '15px'
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ffbfda'
  }
  // button: {
  //   backgroundColor: 'transparent',
  //   border: '2px solid #ffbfda',
  //   marginRight: '20px',
  //   color: '#ffffff',
  //   fontSize: '13px',
  //   letterSpacing: '1px',
  //   padding: '10px 20px',
  //   margin: '10px',
  //   fontFamily: 'Quicksand',
  //   cursor: 'pointer'
  // },
  // buttonHover: {
  //   backgroundColor: '#ffbfda',
  //   border: '2px solid #ffbfda',
  //   marginRight: '20px',
  //   color: '#000000',
  //   fontSize: '13px',
  //   letterSpacing: '1px',
  //   padding: '10px 20px',
  //   margin: '10px',
  //   fontFamily: 'Quicksand',
  //   cursor: 'pointer'
  // }
}

export default style
