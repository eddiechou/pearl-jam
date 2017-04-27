## Pearl Jam

Pearl Jam is a real-time multiplayer game. Control your marble to smash your enemies and dodge destruction. There are holes located throughout the map, your objective is to collide with your opposition and knock them into the holes all the while avoiding them yourself. Spectator mode lets you watch ongoing games, and bet on their outcomes. Have a favorite player? Go in, watch their game, and bet some Pearls (in game currency). Then hate them when you lose it all.



## Development Team

  - [Eddie Chou](http://www.github.com/eddiechou)
  - [Jeff Briner](http://www.github.com/jdbriner07)
  - [Mike Liao](http://www.github.com/mikeliao97)
  - [Mycah Anast](http://www.github.com/mycahjay)

## Table of Contents
1. [Features](#features)
2. [Application Overview](#application-overview)
	1. [Tech Stack](#tech-stack)
	2. [System Architecture](#system-architecture)
	3. [Database Design](#database-design)
	4. [Game Code](#game-code)
3. [Contributing](#contributing)
	1. [Getting Started](#setting-up)
	2. [Useful Commands](#useful-commands)
	3. [Useful DevTools](#useful-dev-tools)
4. [Contact](#contact)


<a name="features"></a>
## Features
### User sign-up

- On the homepage, click `Sign up` and enter your email address and a password.
- Pick a color for your Pearl and a username (must be unique).

### Game mechanics

- Hearts indicate how many lives you have left. 
- Knock your opponents into the explosions. 
- Last pearl rolling wins!

### Spectator system

### Play with your friends

<a name="application-overview"></a>
## Application Overview

<a name="tech-stack"></a>
### Tech Stack

1) `React 15`: Front-end framework | [Docs](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) | [v15 Release Blog](https://facebook.github.io/react/blog/2016/04/07/react-v15.html)
2) `Redux`: State container | [Docs](http://redux.js.org/) | [Code Academy Tutorial Series](https://www.youtube.com/watch?v=1w-oQ-i1XB8)
3) `Node`: Server | [Docs](https://nodejs.org/en/docs/)
4) `Firebase`: Realtime NoSQL database + authentication | [Docs](https://firebase.google.com/)
5) `Socket.io`: Bi-directional realtime communication | [Docs](https://socket.io/)
6) `Phaser.io`: HTML5 game framework | [Docs](http://phaser.io/)
7) `MaterialUI`: A set of React Components that implement Google's Material UI | [Docs](http://www.material-ui.com/#/)
8) `AWS Cloudfront`: Content Delivery Network (CDN) | [Link](https://aws.amazon.com/cloudfront/)
9) `Jest`: Facebook's testing framework | [Docs](https://facebook.github.io/jest/)
10) `Enzyme`: AirBnb's Javascript testing utilities for React | [Docs](http://airbnb.io/enzyme/docs/api/)
11) `CircleCI`: Continuous integration | [Link](http://circleci.com/)
12) `Heroku with Pipelines`: Deployment | [Link](https://devcenter.heroku.com/articles/pipelines)

<a name="system-architecture"></a>
### System Architecture
![System Architecture Diagram](https://github.com/pearlJam-hrsf72/hrsf72-thesis/blob/master/system-architecture.png)

<a name="database-design"></a>
### Database Design
Firebase: A NoSQL store that updates clients in realtime. 

Game Object

```
{
  bets: <Bet Object>,
  players: [<User Objects>],
  spectateUrl: "https://pearl-jam-game-server.herokuapp.com/spectate",
  status: "in-progress",
  winner: "TBD" || "<User Object>.displayName"
}
```

Bet Object
```
{
  betValue: "100",
  bettorID: "jam",
  predictedWinner: "I'm Da Best"
}
```

User Object
```
{
  avatar: 11,
  displayName: "pearl",
  email: "pearl@gmail.com",
  friends: [<User Objects>],
  game_invites: [<Game_Invite Object>]
  losses: 5,
  pearls: 1239,
  rating: 1102,
  wins: 3
}
```

Game_Invite Object
```
{
  gameRoom: 'Pearl Jam',
  user: 'mycah'
}
```
<a name="game-code"></a>
### Game Code
- The <strong>Game Client/Server</strong> code is located in another repository [here](https://github.com/pearlJam-hrsf72/gameServer).

<a name="contributing"></a>
## Contributing

<a name="setting-up"></a>
### Getting started
- Fork the Pearl Jam repo to your account.
- Clone the forked version to your local machine.
- Ensure you have node >= 6.4.0 and npm | [Guide for Mac Installation](http://treehouse.github.io/installation-guides/mac/node-mac.html).
- Run `npm install` to install all the project dependencies.
- Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on our development flow and how to contribute.

<a name="useful-commands"></a>
### Useful commands
- Refer to the scripts property in `package.json` for useful commands.
- `npm build` runs webpack to bundle files.
- `npm start` runs the server at `localhost:3000`.
- `npm run rollout` runs webpack-dev-server, which serves the application at `localhost:8080` with hot-reloading.

<a name="useful-dev-tools"></a>
### Useful development tools
- [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en): Allows you to inspect the React component hierarchies in Chrome Developer Tools.
- [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en): Graphical representation of the Redux state in Chrome Developer Tools.

<a name="contact"></a>
## Contact

Please feel free to contact us if you have any questions regarding the project.