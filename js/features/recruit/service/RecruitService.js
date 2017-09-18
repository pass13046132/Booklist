/**
 *  Defines the HomeService
 *
 *  @author  ddx-b3
 *  @date    Aug 26, 2016
 *
 */

class RecruitService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getInitRecruit() {
        return Promise.resolve([
            {
                type:'operation',
                position:'市场运营总监',
                url:'http://www.lagou.com/jobs/1623380.html',
                salary:'25k-40k',
                ps:'经验10年以上／本科及以上／全职',
                date:'2016-05-26'
            },
            {
                type:'operation',
                position:'市场运营经理',
                url:'http://www.lagou.com/jobs/2019725.html',
                salary:'15k-20k',
                ps:'经验5-10年以上／本科及以上／全职',
                date:'2016-05-26'
            },
            {
                type:'technology',
                position:'资深Android开发工程师',
                url:'http://www.lagou.com/jobs/1434668.html',
                salary:'15k-23k',
                ps:'经验5-10年以上／本科及以上／全职',
                date:'2016-05-26'
            },
            {
                type:'technology',
                position:'Node.js软件工程师',
                url:'http://www.lagou.com/jobs/1402315.html',
                salary:'15k-25k',
                ps:'经验1-3年以上／本科及以上／全职',
                date:'2016-05-26'
            },
            {
                type:'technology',
                position:'测试主管',
                url:'http://www.lagou.com/jobs/1623380.html',
                salary:'10k-20k',
                ps:'经验3-5年以上／本科及以上／全职',
                date:'2016-05-26'
            }
        ]);
    }
}

export default RecruitService;
