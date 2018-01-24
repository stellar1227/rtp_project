#rtpProject
**rtp with Mabin.kim**

##folderTree

**mobile_web // pc_web (root 분리)**

- root
    - resources (산출물 제공 시 src 제외하고 전달)
        - css (auto compiled - common-ui.css)
        - js (auto compiled - common.min.js/func.min.js)
        - img
            - common (공통)
            - contents (컨텐츠)
            - temp (임시, 더미)
        - lib (external libraries)
        - src (pre-compile)
            - js
                - common.js (common-ui)
                - func.js (data)
            - scss
                - variable.scss (var)
                - mixin.scss (mixin, extend)
                - reset.scss (reset)
                - style.scss (common style)
                - stellar.scss (private style)
                - mabin.scss (private style)
                
        - font (NanumGothic - regular/bold/extrabold)        
    -  guide
        - style_guide.html (스타일가이드)
        - work_sheet.html (화면목록 - 상태값:작성중,대기,완료)
    -  include 
        - header.html
        - footer.html
        - layout.html
    -  template
        - category별 생성 (workSheet참조 - 이후 수정)
    

##Naming guide

**numbering 시 바로연결**
- file : snake_case (under3)

- css_class : snake_case (under3) // 줄임작성 지향하나 너무줄이면뉴뉴
    - 내용_용도_타입 || 용도_내용_타입 
    - ex) srch_sec_random , pswd_confirm_sec , link_home, btn_more 
    
- js_class / js_id (in html) : camelCase
    - ex) btnSrchSubmit , accordianUi  
    
- js variable/func/obj :
    - jQuery 객체 : $붙여서 camelCase
    - 상수 : All 대문자
    - 지역변수 : _붙여서 camelCase
    - 클래스, 객체 : PascalCase
    - 메소드, 프로퍼티 : camelCase  
    
- img : snake_case (under4)
    - 용도_내용_타입
    - 백그라운드 : bg_
    - 버튼 : btn_
    - 아이콘 : ico_
    - 블릿 : bul_    
    - 애로우 : arr_     
    - 텍스트 : txt_
    - 임시파일 : dumy_                     