import user from '../../client/src/reducers/user'

describe('User Reducer', () => {
  it('has a default state', () => {
    expect(user(undefined, {type: 'expected'})).toEqual({})
  })

  xit('can handle SET_USER', () => {
    const type = 'SET_USER'
    const payload = {
      uid: '111',
      displayName: 'test',
      email: 'test@test.com',
      photoURL: 'http://photo.facebook.com/uid=1928'
    }
    expect(user(undefined, {type, payload})).toHaveProperty('uid')
    expect(user(undefined, {type, payload})).toHaveProperty('displayName')
    expect(user(undefined, {type, payload})).toHaveProperty('email')
    expect(user(undefined, {type, payload})).toHaveProperty('photoURL')
  })

  xit('can handle CREATE_NEW_USER', () => {
    const type = 'CREATE_NEW_USER'
    const payload = {
      uid: '111',
      displayName: 'test'
    }
    expect(user(undefined, {type, payload})).toHaveProperty('uid')
    expect(user(undefined, {type, payload})).toHaveProperty('email')
    expect(user(undefined, {type, payload})).toHaveProperty('photoURL')
  })

  xit('can handle SET_DISPLAY_NAME', () => {
    const type = 'SET_DISPLAY_NAME'
    const payload = {displayName: 'test'}
    expect(user(undefined, {type, payload})).toHaveProperty('displayName')
  })

  it('can handle SET_GAME', () => {
    const type = 'SET_GAME'
    const payload = {gameID: 5}
    expect(user(undefined, {type, payload})).toHaveProperty('gameID', 5)
  })


})