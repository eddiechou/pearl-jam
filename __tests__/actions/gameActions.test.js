import {addUserToGame, setAvailableServers, setGame, createGame, updateCurrentActiveGames} from '../../client/src/actions/gameActions.js'

describe('Game Actions', () => {
  it('`addUserToGame` dispatches an ADD_USER_TO_GAME action', () => {
    const type = 'ADD_USER_TO_GAME'
    const user = 'A1fk2'
    const displayName = 'eddie'
    expect(addUserToGame({user, displayName})).toEqual({type, payload: {user, displayName}})
  })

  it('`setAvailableServers` dispatches a SET_AVAILABLE_SERVERS action', () => {
    const type = 'SET_AVAILABLE_SERVERS'
    const servers = ['server1', 'server2']
    expect(setAvailableServers({servers})).toEqual({type, payload: {servers}})
  })

  it('`setGame` dispatches a SET_GAME action', () => {
    const type = 'SET_GAME'
    const currentGame = {gameID: 124, players: ['john', 'jacob']}
    const gameID = 124
    expect(setGame({currentGame, gameID})).toEqual({type, payload: {currentGame, gameID}})
  })

  it('`createGame` dispatches a CREATE_GAME action', () => {
    const type = 'CREATE_GAME'
    const gameName = 'pearl'
    expect(createGame({gameName})).toEqual({type, payload: {gameName}})
  })

  it('`updateCurrentActiveGames` dispatches a UPDATE_CURRENT_ACTIVE_GAMES action', () => {
    const type = 'UPDATE_CURRENT_ACTIVE_GAMES'
    const currentActiveGames = ['game1', 'game2']
    expect(updateCurrentActiveGames({currentActiveGames})).toEqual({type, payload: {currentActiveGames}})
  })
})