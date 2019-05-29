(function ($) {
    class Tab {
        constructor(tab) {
            var self = this;
            this.tab = tab;
            this.tabItems = this.tab.find("ul.tab-nav li");
            this.tabItemsLength = this.tabItems.size();
            this.contentItem = this.tab.find("div.content-wrap div.content-item");
            this.config = {
                "triggerType": "mouseover",
                "effect": "default",
                "invoke": 1,
                "auto": false
            };
            if (this.getConfig()) {
                $.extend(this.config, this.getConfig());
            };
            //注意 bind 事件中this 的指向
            this.tabItems.bind(this.config.triggerType, function() {
                self.invoke($(this));
            })
            if (this.config.auto) {
                this.lop = 0;
                this.timer = null;
                this.autoPlay();
            };
            if (this.config.invoke) {
                this.invoke(this.tabItems.eq(this.config.invoke));
            };

        };
        getConfig() {
            var config = this.tab.attr("data-config")
            if (config && config !== '') {
                return $.parseJSON(config);
            } else {
                return null;
            }
        };
        invoke(currentTab) {
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
            
        };
        autoPlay() {
            this.time = window.setInterval(() => {
                this.lop ++;
                if (this.lop >= this.tabItemsLength) {
                    this.lop = 0;
                }
                this.tabItems.eq(this.lop).trigger(this.config.triggerType); 
            },this.config.auto)
        }


    }
    window.Tab = Tab;
    $.extend({
        tab: function(tabs) {
            tabs.each(function() {
                new Tab($(this))
            })
        }
    })
})(jQuery)