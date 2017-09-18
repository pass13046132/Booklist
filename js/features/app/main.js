import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';

class Feature extends FeatureBase {
  constructor() {
    super('app');
    this.routes = Routes;
  }
  execute() {
  }
}
export default Feature