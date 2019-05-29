(function($) {
    // 原型模式
    var Tab = function(tab) {
        var self = this;
        this.tab = tab;
        this.config = {
            "triggerType": "mouseover",
            "effect": "default",
            "invoke": 1,
            "auto": false
        };
        // 扩展参数
        if (self.getConfig()) {
           $.extend(this.config, this.getConfig());
        }
        // console.log(config);
        // 保存标签
        this.tabItems = this.tab.find("ul.tab-nav li");
        this.contentItem = this.tab.find("div.content-wrap div.content-item");
        // 绑定事件
        this.tabItems.bind(this.config.triggerType, function() {
            self.invoke($(this));
            console.log($(this));
            console.log(this)
        })
        // 自动播放
        if (this.config.auto) {
            this.lop = 0;
            this.timer = null;
            self.autoPlay();
        }
        // 设置默认显示的第几个tab
        if (this.config.invoke) {
            self.invoke(this.tabItems.eq(this.config.invoke));
        }
        
    }
    Tab.prototype = {
        // 获取参数
        getConfig: function() {
            var config = this.tab.attr("data-config")
            if (config && config !== '') {
                return $.parseJSON(config);
            } else {
                return null;
            }
        },
        // 切换标签
        invoke: function(currentTab) {
            console.log(currentTab);
            currentTab.addClass("actived").siblings().removeClass("actived");
            var index = currentTab.index();
            var contentItem = this.contentItem;
            // 切换动画
            var effect = this.config.effect;
            if (effect === "default") {
                contentItem.eq(index).addClass("current").siblings().removeClass("current");
            } else {
                contentItem.eq(index).fadeIn().siblings().fadeOut();
            }
            if (this.config.auto) {
                this.lop = index;
            }
            
        },
        // 自动播放
        autoPlay: function(){
            // 注意this的用法
            var self = this;
            tabItems = this.tabItems;
            tabItemsLength = tabItems.size();
            config = this.config;
            // this.timer = window.setInterval(function(){
            //     // this指向window
            //     self.lop ++;
            //     if (self.lop >= tabItemsLength) {
            //         self.lop = 0;
            //     }
            //     tabItems.eq(self.lop).trigger(config.triggerType); 
            // },config.auto);
            // 箭头函数改变this的指向
            this.time = window.setInterval(() => {
                this.lop ++;
                if (this.lop >= tabItemsLength) {
                    this.lop = 0;
                }
                tabItems.eq(this.lop).trigger(config.triggerType); 
            },config.auto)
        }
    }
    // Tab.init = function(tabs) {
    //     console.log(tabs);
    //     var self = this;
    //     tabs.each(function() {
    //         new self($(this));
    //     })
    // }
    window.Tab =Tab;
    $.extend({
        tab: function(tabs) {
            tabs.each(function() {
                new Tab($(this))
            })
        }
    })
})(jQuery)