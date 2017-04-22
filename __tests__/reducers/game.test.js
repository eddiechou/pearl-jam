import games from '../../client/src/reducers/games'

describe('Games Reducer', () => {
  it('has a default state', () => {
    const type = ''
    const payload = {}
    expect(games(undefined, {type, payload})).toEqual({})
  })

  it('can handle UPDATE_CURRENT_ACTIVE_GAMES', () => {
    const type = 'UPDATE_CURRENT_ACTIVE_GAMES'
    const payload = {
      currentActiveGames: ['game1', 'game3']
    }
    expect(games(undefined, {type, payload})).toHaveProperty('currentActiveGames', ['game1', 'game3'])
  })

  it('can handle GET_AVAILABLE_SERVERS', () => {
    const type = 'GET_AVAILABLE_SERVERS'
    const payload = {
      servers: ['server1', 'server2']
    }
    expect(games(undefined, {type, payload})).toHaveProperty('servers', ['server1', 'server2'])
  })

  xit('can handle SET_GAME', () => {

  })

  xit('can handle CREATE_GAME', () => {

  })


})