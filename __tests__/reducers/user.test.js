import user from '../../client/src/reducers/user'
import sinon from 'sinon'

import { firebaseApp } from '../../client/src/base'

const base = firebaseApp.database()

describe('User Reducer', () => {
  it('has a default state', () => {
    expect(user(undefined, {type: 'expected'})).toEqual({})
  })

  it('can handle SET_USER action', () => {
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

  it('can handle CREATE_NEW_USER action', () => {
    // Makes base.ref().set into a stub
    var stub = sinon.stub(base, 'ref', () => {
      return {set: () => {}}
    });

    const type = 'CREATE_NEW_USER'
    const payload = {
      uid: '111',
      displayName: 'test'
    }
    expect(user(undefined, {type, payload})).toHaveProperty('uid')
    expect(user(undefined, {type, payload})).toHaveProperty('email')
    expect(user(undefined, {type, payload})).toHaveProperty('photoURL')

    stub.restore()
  })

  xit('can handle UPDATE_USER_INFO action', () => {
    const type = 'SET_DISPLAY_NAME'
    const payload = {displayName: 'test'}
    expect(user(undefined, {type, payload})).toHaveProperty('displayName')
  })

  it('can handle SET_GAME action', () => {
    const type = 'SET_GAME'
    const payload = {gameID: 5}
    expect(user(undefined, {type, payload})).toHaveProperty('gameID', 5)
  })
})