class Examination
  getSession: (user)->
    state = States.findOne({user: user})
    console.log "Found #{user}", state, States.find({user: user}).fetch();
    unless state
      state =
        user: user,
        direction: _.random(0,3),
        size: 100,
        mistake: 0
      States.insert state
    return state

  submitTest: (context, direction)->
    state = context.data.status
    if direction is state.direction
      state.size = state.size * 0.9
    else
      state.mistake++
      
    state.direction = _.random(0,3);
    States.update(state._id, state);


@examination = new Examination
