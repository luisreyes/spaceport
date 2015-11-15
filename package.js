Package.describe({
  name: 'luisreyes:spaceport',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor CMS for Portfolio websites',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['mongo','ecmascript','templating']);
    api.use(["iron:router@1.0.12"]);

    api.addFiles([
        'lib/controllers/SpacePortAdminController.js',
        'lib/controllers/SpacePortAdminLoginController.js',
        'lib/collections/SpacePortCollection.js',
        'lib/Routes.js'
    ], ['client','server']);

    api.addFiles([
        'client/client.js',
        'spaceport.js',
        'client/templates/layouts/layout.html',
        'client/templates/layouts/layout-login.html',
        'client/templates/layouts/loading.html',
        'client/templates/layouts/not-found.html',
        'client/templates/admin/pages/admin-home.html',
        'client/templates/admin/pages/admin-login.html',
        'client/templates/admin/pages/admin-pages.html',
        'client/templates/admin/pages/admin-posts.html',
        'client/templates/admin/pages/admin-settings.html'
    ], 'client');

    api.export([
        'SpacePortAdminController',
        'SpacePortAdminLoginController',
        '_SpacePort',
    ], ['client','server']);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('luisreyes:spaceport');
  api.addFiles('spaceport-tests.js');
});
