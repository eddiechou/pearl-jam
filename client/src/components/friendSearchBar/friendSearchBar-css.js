const style = {
  main: {
    position: 'relative',
    width: '200px'
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
    backgroundColor: '#fde4ef'
  }
}

export default style
