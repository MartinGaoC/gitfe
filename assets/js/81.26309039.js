(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{332:function(e,s,t){"use strict";t.r(s);var n=t(40),r=Object(n.a)({},function(){var e=this.$createElement,s=this._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("blockquote",[s("p",[this._v("分别处理汉字和字母的长度，外加过虑表情")])]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("export const isChinese = str => {\n  if (escape(str).indexOf('%u') < 0) return false\n  return true\n}\n\nexport const emoj2str = str => {\n  return unescape(escape(str).replace(/\\%uD.{3}/g, ''))\n}\n\nexport const handleText = str => {\n  let res = emoj2str(str)\n  if (isChinese(res)) {\n    res = res.length > 4 ? res.slice(0, 4) + '...' : res\n  } else {\n    res = res.length > 7 ? res.slice(0, 7) + '...' : res\n  }\n  return res\n}\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);