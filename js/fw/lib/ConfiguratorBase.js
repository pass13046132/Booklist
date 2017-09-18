/**
 *  ConfiguratorBase class
 *
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */

class ConfiguratorBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.config = app.config;
        this.constant = app.constant;
        this.value = app.value;
    }

    execute() {}
}

export default ConfiguratorBase;
