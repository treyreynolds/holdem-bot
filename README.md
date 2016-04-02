# Holdem Bot - A Texas Hold'em Poker Simulator 

Holdem bot is a NodeJS based Texas Hold'em simulator designed to be a testbed for poker strategies, analysis, and any other poker related data question you might have.

### Dependencies

  - MongoDB running on the standard port (27017)
  - NodeJS (currently tested up to Node v5.10.0)

Everything you need to know to get up and running with MongoDB can be found here:
[docs.mongodb.org](https://docs.mongodb.org/getting-started/shell/installation/)

### Installation

Clone the repository and run NPM install

```sh
$ git clone https://github.com/treyreynolds/holdem-bot holdem-bot
```

```sh
$ cd holdem-bot
$ npm install
```

Make sure MongoDB is running (in another terminal)
```sh
$ mongod
```

### Run the App

We have a small shell script that should help you get the app up and running. If you're ambitious go out and get yourself a gulp or grunt script up and running on this bad boy. If you're not ambitious, you'll just do this:

**Please note that this WILL take 30-90 seconds to start because it loads the entire odds database of every possible Texas Hold'em hand into memory**
```sh
$ ./bin/www
```



### Screenshots

![Simulation Hand](https://www.dropbox.com/s/3unb0lo5v4t9tdv/Screenshot%202016-04-01%2022.46.57.png?dl=1 "Poker Hand Simulation")

![Login](https://www.dropbox.com/s/34f4d4lwpz97k1p/Screenshot%202016-04-01%2023.12.26.png?dl=1 "Login Screen")
