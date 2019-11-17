(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{395:function(t,l,e){"use strict";e.r(l);var a=e(40),i=Object(a.a)({},function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("css权威指南的一些读书笔记！")]),t._v(" "),e("ol",[e("li",[t._v("link元素的title属性值生成一个候选样式列表，可以提供用户选择不同的网站主题。"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<link rel="stylesheet" type="text/css" href="sheet1.css" title="Default" />\n<link rel="stylesheet" type="text/css" href="sheet2.css" title="Black" />\n<link rel="stylesheet" type="text/css" href="sheet3.css" title="Big Text" />\n')])])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("属性选择器："),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('h1[class] {color: red;}\n*[title] {color: red;}\nh1[class][href] {color: red;}\nh1[title^="bar"] {color: red;} //开头\nh1[title$="bar"] {color: red;} //结尾\nh1[title*="bar"] {color: red;} //包含\n')])])])]),t._v(" "),e("li",[t._v("选择器特殊性：（行内属性 > 内联表 > 外链表）\n"),e("ol",[e("li",[t._v("ID属性选择器：0，1，0，0")]),t._v(" "),e("li",[t._v("类选择器、属性选择器或伪类：0，0，1，0")]),t._v(" "),e("li",[t._v("各个元素和伪元素：0，0，0，1")]),t._v(" "),e("li",[t._v("通配符没有特殊性：0，0，0，0")])])]),t._v(" "),e("li",[t._v("行内元素：\n"),e("ol",[e("li",[t._v("font-size控制字体大小，line-height指定文本基线之间的距离；")]),t._v(" "),e("li",[t._v("padding, border, margin只影响行内元素宽度，不会影响行框的高度(只能通过line-height改变)")]),t._v(" "),e("li",[t._v("(line-height - font-size) / 2的距离放在内容区的顶部和底部；")]),t._v(" "),e("li",[t._v("行内元素行框：内容区（字体） + 行间距；")])])]),t._v(" "),e("li",[t._v("行内元素替换元素：\n"),e("ol",[e("li",[t._v("行内替换元素(img)(display:inline-block也表现一致)，底部对应的是行框内容框的baseline，所以一般会比行内元素高一点，对齐需要调整verticle-align;")]),t._v(" "),e("li",[t._v("padding, border, margin会影响行框；")])])]),t._v(" "),e("li",[t._v("块级元素-水平属性：width，左右margin，左右padding，左右border -> 相加等于父元素width\n"),e("ol",[e("li",[t._v("3个属性可以设置为auto: width，左右外边距；")]),t._v(" "),e("li",[t._v("width和左右margin 都设置特定值，则margin-right会强制为auto；")]),t._v(" "),e("li",[t._v("width设特定值，左右margin设置auto，则元素居中；")]),t._v(" "),e("li",[t._v("width和左右margin都设置auto，则两个外边距都会设置为0，而width会尽可能宽；")]),t._v(" "),e("li",[t._v("负的外边距会使元素宽度边长；")])])]),t._v(" "),e("li",[t._v("块级元素-垂直属性：height，上下margin，上下padding，左右border -> 相加等于父元素height\n"),e("ol",[e("li",[t._v("3个属性可以设置为auto: height，上下外边距；")]),t._v(" "),e("li",[t._v("上下margin设置为auto，它会自动计算为0；")]),t._v(" "),e("li",[t._v("垂直相邻外边距会合并；")])])]),t._v(" "),e("li",[t._v("内边距、边框和外边距：\n"),e("ol",[e("li",[t._v("为元素的外边距、内边距设置百分数值，是相对于父元素的width计算的；")])])]),t._v(" "),e("li",[t._v("颜色和背景：\n"),e("ol",[e("li",[t._v("前景色：color, border-color; 背景色：background-color;")]),t._v(" "),e("li",[t._v("背景颜色延伸到：content, padding, border; (可通过改变background-clip改变定位框)")]),t._v(" "),e("li",[t._v("背景延伸到：content, padding;  (可通过改变background-origin改变定位框)")]),t._v(" "),e("li",[t._v("background-position可设置背景定位；")])])]),t._v(" "),e("li",[t._v("浮动和定位：\n"),e("ol",[e("li",[t._v("只要是浮动，就会生成一个块级框；")]),t._v(" "),e("li",[t._v("clear: left/right/both 制定元素的某个方向上不能出现浮动元素(向下看换行)；")]),t._v(" "),e("li",[t._v("position: relative; 元素框偏移某个距离，但文档流中的位置不变，不影响其他元素的布局(所以可能会造成和边上的元素重叠)；")]),t._v(" "),e("li",[t._v("position: absolute; 指定top, right, bottom, left属性，就相当于隐性地指定了元素的宽高；")]),t._v(" "),e("li",[t._v("上下左右居中："),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".c1 {\n    height: 100px;\n    width: 100px;\n    background: #f3c8c8;\n    position: relative;\n}\n.c2 {\n    height: 50px;\n    width: 50px;\n    background-color: yellow; \n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: inline-block;\n    margin: auto;\n}\n")])])])]),t._v(" "),e("li",[t._v("如果元素的所有值都过度限制(margin, padding, width, height, top, right, bottom, left)，则会忽略right和bottom的设置，重置为auto；")]),t._v(" "),e("li",[t._v("position为非static的元素，z-index才会有效果；")]),t._v(" "),e("li",[t._v("七阶层叠水平(stacking level)：正z-index > z-index:auto/0 > inline/inline-block盒子 > float浮动盒子 > block块状水平盒子 > 负z-index > 层叠上下文background/border;")]),t._v(" "),e("li",[t._v("相对定位(position: relative)同时设定top和bottpm或者right和left，则bottom和right会重置为负的top和right值（或者说忽略bottom和right的值）；")])])]),t._v(" "),e("li",[t._v("表布局\n"),e("ol",[e("li",[t._v("display的值和table元素的对应：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("table -> dislplay: table;\ntr -> dislplay: table-row;\nthead -> dislplay: table-header-group;\ntbody -> dislplay: table-row-group;\ntfoot -> dislplay: table-footer-group;\ncol -> dislplay: table-column;\ncolgroup -> dislplay: table-column-group;\ntd, th -> dislplay: table-cell;\ncaption -> dislplay: table-caption;\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("匿名表对象：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// css定义一种机制，可以将'遗漏的'组件作为匿名对象插入\n\n<table>\n    <td>aaa</td>\n    <td>bbb</td>\n</table>\n\n// ...实际中会转化为...\n\n<table>\n    [anonymous table-row object start]\n        <td>aaa</td>\n        <td>bbb</td>\n    [anonymous table-row object end]\n</table>\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("表层(层叠)：单元格 > 行 > 行组 > 列 > 列组 > 表")]),t._v(" "),e("li",[t._v("表单元格边框模型：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 1. 分隔边框模型 border-collapse: separate;\nborder-spacing 控制单元格之间的距离\nempty-cells 处理表格中的空单元格(显示or隐藏)\n// 2. 合并边框模型 border-collapse: collapse;\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("表大小：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// # 1. 宽度 \n// 1. 固定布局 table-layout: fixed;\n可手动设置表格宽度和表格单元宽度；\n不设置单元格宽度时，平分宽度；\n// 2. 自动布局 table-layout: auto;\n")])])])]),t._v(" "),e("li",[t._v("列表与生成内容\n"),e("ol",[e("li",[t._v("如果:before或:after选择器的主体是块级元素，则display属性只能接受值none, inline, block, marker，其他值都处理为block;"),e("br"),t._v("\n如果:before或:after选择器的主体是行内元素，属性display只能接受值noen和inline，所有其他值都处理为inline;")]),t._v(" "),e("li",[t._v("content: "),e("string",[t._v(" | "),e("uri",[t._v(" | <attr()>")])],1)],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("a[herf]:after {content: attr(herf)}\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("利用:before/:after 配合counter-reset和counter-increment可以做word章节小节目录的效果；")])])])])])},[],!1,null,null,null);l.default=i.exports}}]);