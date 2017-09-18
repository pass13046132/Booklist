/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  ddx-b3
 *  @date    Aug 26, 2016
 *
 * ******************************************************************************************************
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import RecruitController from './controller/RecruitController';
import RecruitService from './service/RecruitService';

class Feature extends FeatureBase {

    constructor() {
        super('recruit');
        this.routes = Routes;
    }

    execute() {
        this.controller('RecruitController', RecruitController);
        this.service('RecruitService', RecruitService);

    }
}

export default Feature;
