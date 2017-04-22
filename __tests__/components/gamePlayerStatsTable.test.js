import React from 'react'
import { shallow } from 'enzyme'

import GamePlayerStatsTable from '../../client/src/components/gamePlayerStatsTable/gamePlayerStatsTable'

describe('<GamePlayerStatsTable/>', () => {
  const game = {
    players: [
      {
        displayName: 'eddie',
        rating: 1300
      },
      {
        displayName: 'jeff',
        rating: 1400
      }
    ]
  }
  it('should render 3 TableHeaderColumns', () => {
    const wrapper = shallow(<GamePlayerStatsTable game={game}/>)
    expect(wrapper.find('TableHeaderColumn').length).toBe(3)
  })

  xit('should have player, rating, and odds columns', () => {
    const wrapper = shallow(<GamePlayerStatsTable game={game}/>)
    // TODO: Check if the texts exist
    expect(wrapper.find('Player').length).toBe(1)
  })
})