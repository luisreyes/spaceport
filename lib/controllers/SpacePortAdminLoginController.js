SpacePortAdminLoginController = RouteController.extend({

    subscriptions: function() {
    },

    waitOn: function() {
    },

    data: function() {
        return {};
    },

    onRun: function() {
        this.next();
    },
    onRerun: function() {
        this.next();
    },
    onBeforeAction: function() {
        this.next();
    },
    action: function() {
        this.render();
    },
    onAfterAction: function() {},

    onStop: function() {}
});