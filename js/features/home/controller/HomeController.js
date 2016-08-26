/**
 *  Defines the HomeController controller
 *
 *  @author  sherwin
 *  @date    Aug 26, 2016
 *
 */

class HomeController {

    /*@ngInject*/
    constructor($scope, $interval) {
        this.$scope = $scope;
        this._init_();
        this._destroy_();
        $interval(function(){this._slider()}.bind(this), 6000);
    }

    _init_() {
        this.slider = true;
    }
    _slider() {
        this.slider = !this.slider;
    }

    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default HomeController;
