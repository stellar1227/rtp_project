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

    /*layer*/ //작업중
    /*
    * @description layerpop
    * @param opt : Object
    * @param opt.type : String (alert, confirm - default : null)
    * @param opt.title : String (default null)
    * @param opt.msg : String (defalut "")
    * @param opt.contSelector : jQuery selector (ex - #id, .class / defalut null)
    * @param opt.okCallBack : function
    * @param opt.cancelCallBack : function
    * @param opt.okBtnTxt : String (default "확인")
    * @param opt.cancelBtnTxt : String (default "취소")
    * */
    var layerPop = function(opt){
        this._opt = {
            type : null,
            msg : "도도도도"
        };
        $.extend(true,this._opt,opt);
    };

    layerPop.prototype.alert = function(){
        this._opt.type = "alert";
        console.log(this._opt)
    };

    var opt = {
        msg : "dddd"
    };
    new a = layerPop(opt);
    a.alert(opt);
    //document.ready
    $(function(){


        gnb.init(); //gnb
        /*var oc = new layerPop({
            type : "alert",
            msg :"알림입니다.",
        });*/
    })
})(jQuery);