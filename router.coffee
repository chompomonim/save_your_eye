FlowRouter.route '/',
  action: (params, queryParams) ->
    ReactLayout.render(WelcomeComponent)

FlowRouter.route '/exam/:user',
  subscriptions: (params) ->
    @register 'userState', Meteor.subscribe 'states', params.user
  action: (params, queryParams) ->
    FlowRouter.subsReady 'userState', =>
      if Meteor.isCordova
        FlowRouter.subsReady 'userState', =>
          ReactLayout.render(ControlsComponent, {user: params.user})
      else
        ReactLayout.render(SymbolScreen, {user: params.user})

# This route is used for testing from browser
FlowRouter.route '/controls/:user',
  subscriptions: (params) ->
    @register 'controlState', Meteor.subscribe 'states', params.user
  action: (params) ->
    FlowRouter.subsReady 'controlState', =>
      ReactLayout.render(ControlsComponent, {user: params.user})
