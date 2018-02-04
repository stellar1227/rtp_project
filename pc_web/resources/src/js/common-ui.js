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
   /* function layerPop (opt){ 
         this._opt = {
          type : "alert",
          title : null,
          msg : "",
          isBtn : true,
          okBtnTxt : "확인",
          cancelBtnTxt : "취소"
        };
        var _newOpt = $.extend(true, _opt, opt);
        console.log(_newOpt);
        this.init = function(){
            this.setting();
        };
        this.setting = function(){
            var optType = Object.prototype.toString.call(opt);
            if(optType !== "[object Object]") throw "invalid type"; //객체인지 확인
        };
        this.addEvent = function(){

        };
        this._open = function(){

        };
        this._close = function(){

        };
        this.render = function(){

        };
        this.init();
    };

    layerPopup.prototype.alert = function(){
      console.log(this._opt)
    };*/
    //document.ready
    $(function(){

        gnb.init(); //gnb
        /*var oc = new layerPop({
            type : "alert",
            msg :"알림입니다.",
        });*/
    })
})(jQuery);