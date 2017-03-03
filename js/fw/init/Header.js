/**
 *  HeadInit set all needed head info to the index.html.
 *
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */

import InitBase from 'lib/InitBase';
import {element} from 'angular';
import __config from 'etc/config';

class Initializer extends InitBase {
    constructor(features) {
        super(features);
        this.head = element(document.head);
    }

    title(t) {
        var title = element('<title></title>');
        title.text(t);
        this.head.append(title);
    }

    meta(attr) {
        var meta = element('<meta>');
        meta.attr(attr);
        this.head.append(meta);
    }
    execute() {
        this.title(__config.appname);
        this.meta({'charset': 'utf-8'});
        this.meta({
            'name': 'viewport',
            'content': 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.0, user-scalable=yes, minimal-ui'
        });
        this.meta({'name': 'renderer', 'content': 'webkit'});
        this.meta({
            'http-equiv': 'X-UA-Compatible',
            'content': 'IE=edge,chrome=1'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
        this.meta({
            'name': 'apple-mobile-web-app-capable',
            'content': 'yes'
        });
        this.meta({
            'name': 'keywords',
            'content': '快涨、快涨APP、炒股APP、炒股软件、票炒股开户、炒股利器、搜股科技、搜股（北京）科技有限公司、快涨人工智能、证券大数据、全网影响力、投资、理财、证券、自选股、研究员、大数据炒股'
        });
        this.meta({
            'name': 'description',
            'content': '快涨是一款基于金融大数据和人工智能技术的服务股民的移动端APP产品。主要功能有反映股票活跃程度的『热股榜』；反映研究员最新荐股及该研究员荐股准确度的『研究员排名』；有反映当天市场热点的『头条内参』；有包括但不限于微博，微信，股吧，贴吧，论坛，新闻等全渠道财经资讯的『个股异动监测』。在满足股民看盘、选股、交易的同时、围绕头条舆情监控、题材消息追踪、买卖预警三方面特色内容，打造股市机构内参、股票异动情报。服务热线：021-80125603'
        });
    }
}

export default Initializer;
