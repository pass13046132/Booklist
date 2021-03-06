/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */

import tpl from './partials/home.html';

export default [
    {
        id: 'home',
        isDefault: true,
        when: '/home',
        controller: 'HomeController',
        controllerAs: 'home',
        template: tpl
    }
];
