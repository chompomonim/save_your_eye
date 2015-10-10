FlowRouter.route('/', {
    action: function(params, queryParams) {
        if (Meteor.isCordova) {
            ReactLayout.render(MobileWelcome, {name: "Jaro"})
        } else {
            ReactLayout.render(WelcomeComponent, {name: "Jaro"})
        }
    }
});

FlowRouter.route('/exam/:user', {
    action: function(params, queryParams) {
        console.log("Params", params)
        exam = examination.getSession(params.user)
        ReactLayout.render(SymbolComponent, {size: 200, r: exam.size, a: exam.direction*90, cx: 100, cy:100})
    }
});
