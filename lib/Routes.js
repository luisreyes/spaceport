Router.configure({
    layoutTemplate: 'SpacePortLayout',
    loadingTemplate: 'SpacePortLoading',
    notFoundTemplate: 'SpacePortNotFound'
});

Router.route('/admin', {
    name: 'SpacePortAdminHome',
    controller: 'SpacePortAdminController',
    where: 'client'
});

Router.route('/admin/posts', {
    name: 'SpacePortAdminPosts',
    controller: 'SpacePortAdminController',
    where: 'client'
});

Router.route('/admin/pages', {
    name: 'SpacePortAdminPages',
    controller: 'SpacePortAdminController',
    where: 'client'
});

Router.route('/admin/settings', {
    name: 'SpacePortAdminSettings',
    controller: 'SpacePortAdminController',
    where: 'client'
});

Router.route('/admin/login', {
    name: 'SpacePortAdminLogin',
    layoutTemplate:'SpacePortLoginLayout',
    loadingTemplate: 'SpacePortLoading',
    notFoundTemplate: 'SpacePortNotFound',
    controller: 'SpacePortAdminLoginController',
    where: 'client'
});
