FlowRouter.route('/', {
    action: function(params, queryParams) {
        if (Meteor.isCordova) {
            ReactLayout.render(MobileWelcome, {name: "Jaro"})
        } else {
            ReactLayout.render(WelcomeComponent, {name: "Jaro"})
        }
    }
});
