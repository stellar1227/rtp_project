/*common-ui.js*/

(function($){
    /*gnb*/
    var gnb = {
        init : function(){
            var target = $("#gnb");
            this.allMenu = target.find(".all_menu");
            this.addEvent(target);
        },
        addEvent : function(_t){
            var self = this;
            _t.on("mouseenter", function(){
                self.allMenu.slideDown(300);
            });
            _t.on("mouseleave", function(){
                self.allMenu.stop().slideUp(300);
            })
        }

    };
    //document.ready
    $(function(){

        gnb.init(); //gnb
    })
})(jQuery);