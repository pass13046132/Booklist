/**
 *  Defines the Toolbar of whole application.
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */

import FeatureBase from 'lib/FeatureBase';
import FooterTpl from './Footer.html';
import {element} from 'angular';

class Feature extends FeatureBase {

    constructor() {
        super('FooterModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.append(FooterTpl);
    }
    execute() {
    }
}

export default Feature;
