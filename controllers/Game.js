const Game = require('../models/Game');
const PlayerController = require('./Player');

let game = null;
const basicJobs = ['mafia', 'policia', 'medico', 'pueblo'];
const getRandom = (min, max) => min + Math.floor((max - min) * Math.random());

const assignJobs = () => {
  const allJobs = [...basicJobs];
  for (let i = 0; i < (game.players.length - 5); i += 1) {
    allJobs.push('pueblo');
  }

  const newPlayers = game.players.map((p) => {
    const r = getRandom(0, allJobs.length - 1);
    return {
      ...p,
      job: p.isAdmin ? 'admin' : allJobs.splice(r, 1)[0],
    };
  });
  return newPlayers;
};

const isGameOver = () => {
  const hasMafia = game.players.find((p) => p.job === 'mafia').status === 'alive';
  const alive = game.players
    .filter((p) => p.job !== 'admin' && p.job !== 'mafia' && p.status === 'alive').length;
  return {
    isOver: !hasMafia || alive <= 1,
    winner: alive >= 1 ? 'Pueblo' : 'Mafia',
  };
};

exports.getGame = () => {
  if (!game) {
    // const players = PlayerController.getMockPlayers();
    const players = PlayerController.getPlayers();
    game = new Game(players);
  }
  return game;
};

exports.updatePlayers = (players) => {
  game.players = players;
  return game;
};

exports.begin = () => {
  game.status = 'in_progress';
  game.players = assignJobs();
  return game;
};

exports.reset = () => {
  const players = PlayerController.getPlayers();
  // const players = PlayerController.getMockPlayers();
  game = new Game(players);
  return game;
};

exports.changeTurn = (job) => {
  game.turn = job;
  return game;
};

exports.toggleDay = () => {
  const newDaytime = game.daytime === 'day' ? 'night' : 'day';
  if (newDaytime === 'day') game.dayCount += 1;
  game.daytime = newDaytime;
  game.players = game.players.map((p) => ({
    ...p,
    status: newDaytime === 'day' ? p.nextStatus : p.status,
    nextStatus: newDaytime === 'night' ? p.status : p.nextStatus,
    isProtected: false,
  }));

  game.alreadyPlayed = game.players
    .filter((p) => p.status === 'dead' && p.job !== 'pueblo');

  const gameOver = isGameOver();
  if (gameOver.isOver) {
    game.status = 'game_over';
    game.winner = gameOver.winner;
  }
  return game;
};

exports.kick = (who) => {
  game.players = game.players.map((p) => ({
    ...p,
    status: p.id === who ? 'dead' : p.status,
  }));
  return game;
};

exports.kill = (who) => {
  const updatedPlayers = game.players.map((p) => ({
    ...p,
    nextStatus: p.id === who && !p.isProtected ? 'dead' : p.status,
  }));
  game.players = updatedPlayers;
  game.turn = 'admin';
  game.alreadyPlayed.push('mafia');
  return game;
};

exports.protect = (who) => {
  game.players = game.players.map((p) => ({
    ...p,
    isProtected: p.id === who,
    nextStatus: p.id === who ? 'alive' : p.nextStatus,
  }));
  game.turn = 'admin';
  game.alreadyPlayed.push('medico');
  return game;
};

exports.investigate = (who) => {
  const suspect = game.players.find((p) => p.id === who);
  // game.turn = 'admin';
  game.alreadyPlayed.push('policia');
  return suspect.job === 'mafia';
};
