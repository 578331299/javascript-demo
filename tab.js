(function($) {
    // 原型模式
    var Tab = function(tab) {
        var _this_ = this;
        this.tab = tab;
        this.config = {
            "triggerType": "mouseover",
            "effect": "default",
            "invoke": 1,
            "auto": false
        };
        this.getConfig();
    }
    Tab.prototype = {
        getConfig: function() {
            //var config = this.tab.attr("data-config");
            console.log(this.tab);
        }
    }

    window.Tab =Tab;
})(jQuery)