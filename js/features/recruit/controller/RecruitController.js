
class RecruitController {

    /*@ngInject*/
    constructor($scope, RecruitService) {
        this.$scope = $scope;
        this.RecruitService = RecruitService;
        this._init_();
        this._destroy_();
    }
    _init_(){
        this.jobs = [];
        this.showTabNumber = 0;
        this.RecruitService
          .getInitRecruit()
          .then(job => {
              this.jobsSum = job.length;
              this.jobs = job;
              this.jobsIt = job.filter(data => data.type === 'technology')
              this.jobsOperator = job.filter(data => data.type === 'operation')
          });
    }
    showTab(a) {
        this.showTabNumber = a;
    }
    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }

}

export default RecruitController;
