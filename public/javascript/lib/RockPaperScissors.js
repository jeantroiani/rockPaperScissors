function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};


Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.beats   = {rock:     {beat: ['scissors','lizard']},
                 paper:     {beat: ['rock'    ,'spock' ]},
                 scissors:  {beat: ['paper'   ,'lizard']},
                 lizard:    {beat: ['spock'   ,'paper' ]},
                 spock:     {beat: ['scissors','rock'  ]}
               };
};

Game.prototype.winner = function() {
  
  if (this.draw()) {
    return null;
  }
  else if (this.win()) {
  return this.player1;
  }
  else {
    return this.player2;
  }
};


Game.prototype.random_pick = function(){
  var picks = Object.keys(this.beats)
  return picks[Math.floor(Math.random()*picks.length)];
};

Game.prototype.win =function() {
  return ((this.beats[this.player1.pick]['beat'].indexOf(this.player2.pick) !== -1))
};

Game.prototype.draw = function() {
  return (this.player1.pick === this.player2.pick)
};

Game.prototype.announce = function(){
  if (this.winner() === null) {
    return "draw";
  }
  else {
    return (this.winner().name + " " + this.winningVerb() + " " + this.loser().name + " with "+ this.winner().pick);
  }
};

Game.prototype.winningVerb =  function(){
   return (this.verbs[this.winner().pick][this.loser().pick]);
};

Game.prototype.verbs = {
              rock:     {lizard:   'crushes' ,scissors:  'crushes'    },
              lizard:   {spock:    'poisons' ,paper:     'eats'       },  
              paper:    {rock:     'covers'  ,spock:     'disproves'  },
              spock:    {scissors: 'smashes' ,rock:      'vaporizes'  },
              scissors: {paper:    'cuts'    ,lizard:    'decapitates'}
                  
};


Game.prototype.loser = function() { 
  if (this.winner() === this.player1) {
    return this.player2;
  } 
  else {
    return this.player1;
  }
};


