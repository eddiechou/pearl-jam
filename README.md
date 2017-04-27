## Pearl Jam

Pearl Jam is a real-time multiplayer game. Control your marble to smash your enemies and dodge destruction. There are holes located throughout the map, your objective is to collide with your opposition and knock them into the holes all the while avoiding them yourself. Spectator mode lets you watch ongoing games, and bet on their outcomes. Have a favorite player? Go in, watch their game, and bet some Pearls (in game currency). Then hate them when you lose it all.



## Development Team

  - [Eddie Chou](github.com/eddiechou)
  - [Jeff Briner](github.com/jdbriner07)
  - [Mike Liao](github.com/mikeliao97)
  - [Mycah Anast](github.com/mycahjay)

## Table of Contents
1. [Features](#features)
2. [Architecture Overview](#architecture-overview)
  1. [Tech Stack](#tech-stack)
  2. [System Architecture](#system-architecture)
  3. [Database Design](#database-design)
1. [Contributing](#contributing)
  1. [Setting up ](#setting-up)
  2. [Useful Commands](#useful-commands)


<a name="features"></a>
## Features

### User sign-up

Pick your color and a unique username!

### Game mechanics

- Hearts indicate how many lives you have left. 
- Knock your opponents into the explosions. 
- Last pearl rolling wins!

### Spectator system

### Play with your friends

<a name="architecture-overview"></a>
## Architecture Overview


<a name="tech-stack"></a>
### Tech Stack

1) `React 15`: Front-end framework | [Docs](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) | [v15 Release Blog](https://facebook.github.io/react/blog/2016/04/07/react-v15.html)
2) `Redux`: State container | [Docs](http://redux.js.org/)
3) `Firebase`: Realtime NoSQL database + authentication | [Docs](https://firebase.google.com/)
4) `Socket.io`: Bi-directional realtime communication | [Docs](https://socket.io/)
5) `Phaser.io`: HTML game framework | [Docs](http://phaser.io/)
6) `MaterialUI`: A set of React Components that implement Google's Material UI | [Docs](http://www.material-ui.com/#/)

<a name="system-architecture"></a>
### System Architecture

<a name="database-design"></a>
### Database Design
#### Firebase

<a name="contributing"></a>
## Contributing

<a name="setting-up"></a>
### Getting started
- Ensure you have node >= 6.4.0 and npm | [Guide for Mac Installation](http://treehouse.github.io/installation-guides/mac/node-mac.html)
- Fork the Pearl Jam repo to your account
- Clone the forked version to your local machine
- Run `npm install` to install all the project dependencies
- Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on our development flow and how to contribute

<a name="useful-commands"></a>
### Useful commands
- Refer to the scripts property in `package.json` for useful commands
- `npm build` runs webpack to bundle files
- `npm start` runs the server at `localhost:3000`
- `npm run dev-server` runs webpack-dev-server, which serves the application at `localhost:8080` with hot-reloading

<a name="useful-dev-tools"></a>
### Useful development tools
- `React Developer Tools`: Chrome Extension: Allows you to inspect the React component hierarchies in Chrome Developer Tools
- `Redux DevTools`: Chrome Extension: Graphical representation of the Redux state in Chrome Developer Tools
### In the works

## Contact

Feel free to contact us if you have any questions regarding the project.

