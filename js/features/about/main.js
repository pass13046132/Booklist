/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  sherwin
 *  @date    Aug 11, 2016
 *
 * ******************************************************************************************************
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    execute() {
    }
}

export default Feature;
