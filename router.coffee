FlowRouter.route '/',
  action: (params, queryParams) ->
    if Meteor.isCordova
      ReactLayout.render(MobileWelcome, {name: "Jaro"})
    else
      ReactLayout.render(WelcomeComponent, {name: "Jaro"})

FlowRouter.route '/exam/:user',
  subscriptions: (params) ->
    @register 'userState', Meteor.subscribe 'states', params.user
  action: (params, queryParams) ->
    FlowRouter.subsReady 'userState', =>
      exam = examination.getSession(params.user)
      ReactLayout.render(SymbolComponent, {size: 200, r: exam.size, a: exam.direction*90, cx: 100, cy:100})
