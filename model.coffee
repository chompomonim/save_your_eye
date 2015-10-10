@States = new Meteor.Collection("States");

if Meteor.isServer
  Meteor.publish 'states', (user) ->
    return States.find({user: user})
