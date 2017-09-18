/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  ddx-b3
 *  @date    Aug 26, 2016
 *
 */

import tpl from './partials/recruit.html';

export default [
    {
        id: 'recruit',
        isDefault: false,
        when: '/recruit',
        controller: 'RecruitController',
        controllerAs: 'recruit',
        template: tpl
    }
];
