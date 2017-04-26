/*
const style = {
  container: {
    width: '1100px',
    height: '700px',
    overflowY: 'scroll',
    display: 'fixed'
  },
  entryNonClicked: {
    width: '1100px',
    height: '150px',
    borderRadius: '10px',
    backgroundColor: '#c0c0c0',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/assault.png")',
    textAlign: 'center'
  },
  entryClicked: {
    width: '1100px',
    height: '150px',
    borderRadius: '10px',
    backgroundColor: '#8c2d53',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
    textAlign: 'center'
  }
}
*/
const style = {
  container: {
    width: '1000px',
    height: '500px',
    overflowY: 'scroll',
    display: 'fixed'
  },
  entryNonClicked: {
    /*
    width: '1100px',
    height: '150px',
    borderRadius: '10px',
    backgroundColor: '#c0c0c0',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/assault.png")',
    textAlign: 'center'
    */
    
    textAlign: 'center',
    border: '4px solid #ffffff',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '20px',
    padding: '30px 60px',
    margin: '10px',
    fontFamily: 'Quicksand',
    cursor: 'pointer',
    'letterSpacing': `12px`
  },
  entryClicked: {
    
    textAlign: 'center',
    border: '4px solid #ffffff',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '20px',
    padding: '30px 60px',
    margin: '10px',
    fontFamily: 'Quicksand',
    cursor: 'pointer'
  }
}

export default style
