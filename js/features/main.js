/**
 *  Entrance of features
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */

import common from './common/main';
import home from './home/main';
import app from './app/main';
import cheats from './cheats/main';
import recruit from './recruit/main';
import about from './about/main';

export default [about, ...common, home, app, cheats, recruit];
