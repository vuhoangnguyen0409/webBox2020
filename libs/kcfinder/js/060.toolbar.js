)),0===this.getValue().length||!1===b)return alert(a.lang.youtube.invalidUrl),!1}else return alert(a.lang.youtube.noCode),!1}},{type:"text",id:"txtWidth",width:"60px",label:a.lang.youtube.txtWidth,"default":null!=a.config.youtube_width?
a.config.youtube_width:"640",validate:function(){if(this.getValue()){if(0===(parseInt(this.getValue())||0))return alert(a.lang.youtube.invalidWidth),!1}else return alert(a.lang.youtube.noWidth),!1}},{type:"text",id:"txtHeight",width:"60px",label:a.lang.youtube.txtHeight,"default":null!=a.config.youtube_height?a.config.youtube_height:"360",validate:function(){if(this.getValue()){if(0===(parseInt(this.getValue())||0))return alert(a.lang.youtube.invalidHeight),!1}else return alert(a.lang.youtube.noHeight),
!1}}]},{type:"hbox",widths:["55%","45%"],children:[{id:"chkRelated",type:"checkbox","default":null!=a.config.youtube_related?a.config.youtube_related:!0,label:a.lang.youtube.chkRelated},{id:"chkOlderCode",type:"checkbox","default":null!=a.config.youtube_older?a.config.youtube_older:!1,label:a.lang.youtube.chkOlderCode}]},{type:"hbox",widths:["55%","45%"],children:[{id:"chkPrivacy",type:"checkbox",label:a.lang.youtube.chkPrivacy,"default":null!=a.config.youtube_privacy?a.config.youtube_privacy:!1},
{id:"chkAutoplay",type:"checkbox","default":null!=a.config.youtube_autoplay?a.config.youtube_autoplay:!1,label:a.lang.youtube.chkAutoplay}]},{type:"hbox",widths:["45%","55%"],children:[{id:"txtStartAt",type:"text",label:a.lang.youtube.txtStartAt,validate:function(){if(this.getValue()&&!/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/i.test(this.getValue()))return alert(a.lang.youtube.invalidTime),!1}},{id:"empty",type:"html",html:""}]}]}],onOk:function(){var a="";if(this.getContentElement("youtubePlugin",
"txtEmbed").isEnabled())a=this.getValueOf("youtubePlugin","txtEmbed");else{var a="//",c=[],d,f=this.getValueOf("youtubePlugin","txtWidth"),g=this.getValueOf("youtubePlugin","txtHeight"),a=!0===this.getContentElement("youtubePlugin","chkPrivacy").getValue()?a+"www.youtube-nocookie.com/":a+"www.youtube.com/",a=a+("embed/"+b);!1===this.getContentElement("youtubePlugin","chkRelated").getValue()&&c.push("rel=0");!0===this.getContentElement("youtubePlugin","chkAutoplay").getValue()&&c.push("autoplay=1");
if(d=this.getValueOf("youtubePlugin","txtStartAt"))d=hmsToSeconds(d),c.push("start="+d);0<c.length&&(a=a+"?"+c.join("&"));!0===this.getContentElement("youtubePlugin","chkOlderCode").getValue()?(a=a.replace("embed/","v/"),a=a.replace(/&/g,"&amp;"),a=-1==a.indexOf("?")?a+"?":a+"&amp;",a+="hl=pt_BR&amp;version=3",a='<object width="'+f+'" height="'+g+'">'+('<param name="movie" value="'+a+'"></param>')+'<param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param>'+
('<embed src="'+a+'" type="application/x-shockwave-flash" ')+('width="'+f+'" height="'+g+'" allowscriptaccess="always" ')+'allowfullscreen="true"></embed></object>'):a='<iframe width="'+f+'" height="'+g+'" src="'+a+'" frameborder="0" allowfullscreen></iframe>'}this.getParentEditor().insertHtml(a)}}})}})})();function handleLinkChange(a){0<a.getValue().length?a.getDialog().getContentElement("youtubePlugin","txtEmbed").disable():a.getDialog().getContentElement("youtubePlugin","txtEmbed").enable()}
function handleEmbedChange(a){0<a.getValue().length?a.getDialog().getContentElement("youtubePlugin","txtUrl").disable():a.getDialog().getContentElement("youtubePlugin","txtUrl").enable()}function ytVidId(a){return a.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)?RegExp.$1:!1}function hmsToSeconds(a){for(var a=a.split(":"),b=0,e=1;0<a.length;)b+=e*parseInt(a.pop(),10),e*=60;return b};CKEDITOR.config.plugins='dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                /*
Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/

body
{
	/* Font */
	font-family: sans-serif, Arial, Verdana, "Trebuchet MS";
	font-size: 12px;

	/* Text color */
	color: #333;

	/* Remove the background color to make it transparent */
	background-color: #fff;

	margin: 20px;
}

.cke_editable
{
	font-size: 13px;
	line-height: 1.6;
}

blockquote
{
	font-style: italic;
	font-family: Georgia, Times, "Times New Roman", serif;
	padding: 2px 0;
	border-style: solid;
	border-color: #ccc;
	border-width: 0;
}

.cke_contents_ltr blockquote
{
	padding-left: 20px;
	padding-right: 8px;
	border-left-width: 5px;
}

.cke_contents_rtl blockquote
{
	padding-left: 8px;
	padding-right: 20px;
	border-right-width: 5px;
}

a
{
	color: #0782C1;
}

ol,ul,dl
{
	/* IE7: reset rtl list margin. (#7334) */
	*margin-right: 0px;
	/* preserved spaces for list items with text direction other than the list. (#6249,#8049)*/
	padding: 0 40px;
}

h1,h2,h3,h4,h5,h6
{
	font-weight: normal;
	line-height: 1.2;
}

hr
{
	border: 0px;
	border-top: 1px solid #ccc;
}

img.right
{
	border: 1px solid #ccc;
	float: right;
	margin-left: 15px;
	padding: 5px;
}

img.left
{
	border: 1px solid #ccc;
	float: left;
	margin-right: 15px;
	padding: 5px;
}

pre
{
	white-space: pre-wrap; /* CSS 2.1 */
	word-wrap: break-word; /* IE7 */
	-moz-tab-size: 4;
	-o-tab-size: 4;
	-webkit-tab-size: 4;
	tab-size: 4;
}

.marker
{
	background-color: Yellow;
}

span[lang]
{
	font-style: italic;
}

figure
{
	text-align: center;
	border: solid 1px #ccc;
	border-radius: 2px;
	background: rgba(0,0,0,0.05);
	padding: 10px;
	margin: 10px 20px;
	display: inline-block;
}

figure > figcaption
{
	text-align: center;
	display: block; /* For IE8 */
}

a > img {
	padding: 1px;
	margin: 1px;
	border: none;
	outline: 1px solid #0782C1;
}
                                        3����\��?�P>�+�؜��<�d&�q��hk���y����r	�f�!�@��.9F*����������(��M����y��y�uc�M��޸��o$�v�)c^[������S(�#CBN��Տ;�O�ٌ\=8'��_�܏!�cG�))��݉��/�t��NS?F!�!�l6����gP��^:��%;��V�ކuv��
�o��"q�.�{(���}X^��z�>�\�>4j�����ԳR����{�����~���}��?��}�I.}~󄇗<�Yy�xl����d�(l�9�?0Erf��<�)B�
1
W��#�����V��Ǽ����X�\d�*