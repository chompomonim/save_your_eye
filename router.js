FlowRouter.route('/', {
    action: function(params, queryParams) {
        if (Meteor.isCordova) {
            ReactLayout.render(MobileWelcome, {name: "Jaro"})
        } else {
            ReactLayout.render(WelcomeComponent, {name: "Jaro"})
        }
    }
});

FlowRouter.route('/symbol', {
    action: function(params, queryParams) {
        ReactLayout.render(SymbolComponent, {size: 200, r: 55, a: 90, cx: 100, cy:100})
    }
});
