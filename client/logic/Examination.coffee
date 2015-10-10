class Examination
  getSession: (user)->
    state = States.findOne({user: user})
    console.log "Found #{user}", state, States.find({user: user}).fetch();
    unless state
      state = user: user, direction: _.random(0,3), size: 100
      States.insert state
    return state

@examination = new Examination
