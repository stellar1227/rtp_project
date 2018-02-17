/*common-ui.js*/
var rtp = (function($){

    /*gnb*/
    var gnb = {
        init : function(){
            var target = $("#gnb");
            this.gnb = target.find(".gnb");
            this.gMenu = this.gnb.find("li");
            this.addEvent();
        },
        addEvent : function(){
            this.gMenu.on("click", function(){
                var $id = $(this).find("a").attr("href");
                $($id).toggleClass("on").siblings(".depth").removeClass("on");
                $(this).toggleClass("on").siblings("li").removeClass("on");
            })
        }
    };
    var sideNavi = {
        init : function(){
            var target = $("#sideMenu");
            this.btnNavi = target.prev(".btn_side_navi");
            this.closeBtn = target.find(".btn_nav_close");
            this.addEvent(target);
        },
        addEvent : function(_t){
            this.btnNavi.on("click", function(){
                _t.addClass("on")
            });
            this.closeBtn.on("click", function(){
                _t.removeClass("on")
            })
        }

    };

    /*toggle_list*/
    var toggleList = {
        init : function(){
            var target = $(".accodian_list");
            this.title = target.find(".list_title");
            this.addEvent();
        },
        addEvent : function(){
            var self = this;
            this.title.on("click", function(){
                self.toggle($(this));
            })
        },
        toggle : function(t){
            t.toggleClass("on");
            t.next(".list_contents").slideToggle(300);
        }
    };

    /*file_upload*/
    var fileUpload = {
        init : function(){
            var target = $(".file_upload");
            this.inputFile = target.find("input:file");
            this.btnFileRemove = target.find(".btn_file_del");
            this.addEvent();
        },
        addEvent : function(){
            var self = this;
            this.inputFile.on("change", function(){
                if($(this).val() === undefined) return;
                self.addFile($(this));
            });
            this.btnFileRemove.on("click", function(){
               self.removeFile($(this))
            })
        },
        removeFile : function(t){
            t.siblings(".name").text("").removeClass("on");
            t.closest(".file_upload").find("input:file").val("");
        },
        addFile : function(t){
            var _val = t.val();
            t.closest(".file_upload").find(".name").text(_val).addClass("on");
        }
    };

    /*layer*/ //나중에 수정좀 할가 ㅠ
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
        this._opt = { //기본값
            type : null,
            msg : "",
            title : null,
            contSelector : null,
            okCallBack : null,
            cancelCallBack : null,
            okBtnTxt : "확인",
            cancelBtnTxt : "취소",
            id : "id_" + new Date().getTime()
        };
        //setting
        this.setting = function(){
            var opt_type = Object.prototype.toString.call(opt);
            if(opt_type !== "[object Object]") throw "invalid type"; //object type 확인
            if(opt.type !== "alert" && opt.type !== "confirm") opt.type = null; //alert
            $.extend(true,this._opt,opt);
        };
        this.setting(); //option setting 완료

        this.init = function(){
            var target;
            target = this.render();
            this.addEvent(target);
            this.open(target);
        };

        //render
        this.render = function(){
            var _target,
                t_width,
                t_height,
                _domTree = "";
            _domTree += "<div class='common_layer' id='" + this._opt.id + "'>";
            _domTree += "<div class='layer_wrap'>";
            _domTree += "<div class='inner_layer_content'>";

            if(this._opt.title !== null && typeof this._opt.title === "string"){
                console.log(this._opt.title);
                _domTree += "<strong class='layer_tit'>"+ this._opt.title +"</strong>";
            }
            if(this._opt.contSelector !== null){
                _domTree += $("#" + this._opt.contSelector).html();
            }else{
                _domTree += "<p class='msg'>" + this._opt.msg + "</p>";
            }

            _domTree += "</div>";

            if(this._opt.type !== null){ // 확인버튼
                _domTree += "<div class='layer_btn " + this._opt.type + "'>";
                _domTree += "<button type='button' class='btn_strong btn_ok'>" + this._opt.okBtnTxt + "</button>";
                if(this._opt.type === "confirm"){
                    _domTree += "<button type='button' class='btn_primary btn_cancel'>" + this._opt.cancelBtnTxt + "</button>";
                }
                _domTree += "</div>";
            }

            _domTree += "<button type='button' class='btn_layer_close'>닫기</button>";
            _domTree += "</div>";
            _domTree += "</div>";

            $("body").append(_domTree);
            _target = $("#" + this._opt.id);
            t_width = _target.width();
            t_height = _target.height();
            _target.css({
                "margin-left" : -(t_width / 2) + "px" ,
                "margin-top" : -(t_height / 2) + "px"
            });
            return _target;
        };

        //addEvent
        this.addEvent = function(t){
            var _self = this;
            var closeBtn = t.find(".btn_layer_close");
            closeBtn.on("click", function(){
                _self.close(t);
            });
            if(this._opt.type !== null){
                var okBtn = t.find(".btn_ok");
                okBtn.on("click", function(){
                    _self.callBack("alert");
                    _self.close(t);
                });
                if(this._opt.type === "confirm"){
                    var cancelBtn = t.find('.btn_cancel');
                    cancelBtn.on("click", function(){
                        _self.callBack("confirm");
                        _self.close(t);
                    })
                }
            }
        };
        //callback
        this.callBack = function(type){
            var cb_name;
            switch (type){
                case "alert" :
                    cb_name  = this._opt.okCallBack;
                    break;
                case "confirm" :
                    cb_name = this._opt.cancelCallBack;
            }
            if(typeof cb_name === "function"){
                cb_name();
            }
        };

        //open
        this.open = function(t){
            t.show();
        };

        //close
        this.close = function(t){
            t.remove();
        };
    };

    layerPop.prototype.alert = function(){
        this._opt.type = "alert";
        this.init();
    };

    layerPop.prototype.confirm = function(){
        this._opt.type = "confirm";
        this.init();
    };

    var alertUI = function(option){ //alert호출 시 사용
        var obj = new layerPop(option);
        obj.alert();
    };
    var confirmUI = function(option){ //confirm 호출 시 사용
        var obj = new layerPop(option);
        obj.confirm();
    };
    var primaryUI = function(option){//layer 호출 시 사용
        var obj = new layerPop(option);
        obj.init();
    };


    //document.ready

    $(function(){ //todo sideNavi && gnb script
        gnb.init(); //gnb
        sideNavi.init();
        $(".accodian_list").length && toggleList.init(); //toggleList
        $(".file_upload").length && fileUpload.init(); //inputFile

    });

    return {
        alertUI : alertUI,
        confirmUI : confirmUI,
        primaryUI : primaryUI
    }
})(jQuery);
