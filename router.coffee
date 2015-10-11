FlowRouter.route '/',
  action: (params, queryParams) ->
    ReactLayout.render(WelcomeComponent)

FlowRouter.route '/exam/:user',
  subscriptions: (params) ->
    @register 'userState', Meteor.subscribe 'states', params.user
  action: (params, queryParams) ->
    FlowRouter.subsReady 'userState', =>
      if Meteor.isCordova
        exam = examination.getSession(params.user)
        FlowRouter.subsReady 'userState', =>
          ReactLayout.render(ControlsComponent, {user: params.user})
      else
        ReactLayout.render(SymbolComponent, {user: params.user, size: 200, cx: 100, cy:100})

# This route is used for testing from browser
FlowRouter.route '/controls/:user',
  subscriptions: (params) ->
    @register 'userState', Meteor.subscribe 'states', params.user
  action: (params) ->
    FlowRouter.subsReady 'userState', =>
      ReactLayout.render(ControlsComponent, {user: params.user})

# This route is used for testing from browser using alternative controls
FlowRouter.route '/controlsB/:user',
  subscriptions: (params) ->
    @register 'userState', Meteor.subscribe 'states', params.user
  action: (params) ->
    FlowRouter.subsReady 'userState', =>
      ReactLayout.render(ControlsBComponent, {user: params.user})
