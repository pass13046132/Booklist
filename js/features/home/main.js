/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 * ******************************************************************************************************
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';

class Feature extends FeatureBase {

    constructor() {
        super('home');
        this.routes = Routes;
    }

    execute() {
        this.controller('HomeController', HomeController);
    }
}

export default Feature;
