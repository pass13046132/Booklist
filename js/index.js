/**
 *  index.js launch the application.
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure(['css/layout.scss', 'splash-screen', './main'], function(require) {

    require('css/layout.scss').use();

    var App = require('./main').default;
    (new App()).run();
});
