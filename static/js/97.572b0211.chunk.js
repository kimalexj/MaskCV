(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[97],{231:function(e,t,r){!function(e){"use strict";e.defineMode("smarty",(function(t,r){var n,i=r.rightDelimiter||"}",a=r.leftDelimiter||"{",o=r.version||2,u=e.getMode(t,r.baseMode||"null"),f=["debug","extends","function","include","literal"],l={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/};function s(e,t){return n=t,e}function d(e,t,r){return t.tokenize=r,r(e,t)}function p(e,t){return null==t&&(t=e.pos),3===o&&"{"==a&&(t==e.string.length||/\s/.test(e.string.charAt(t)))}function c(e,t){for(var r=e.string,o=e.pos;;){var f=r.indexOf(a,o);if(o=f+a.length,-1==f||!p(e,f+a.length))break}if(f==e.pos)return e.match(a),e.eat("*")?d(e,t,b("comment","*"+i)):(t.depth++,t.tokenize=h,n="startTag","tag");f>-1&&(e.string=r.slice(0,f));var l=u.token(e,t.base);return f>-1&&(e.string=r),l}function h(e,t){if(e.match(i,!0))return 3===o?(t.depth--,t.depth<=0&&(t.tokenize=c)):t.tokenize=c,s("tag",null);if(e.match(a,!0))return t.depth++,s("tag","startTag");var r=e.next();if("$"==r)return e.eatWhile(l.validIdentifier),s("variable-2","variable");if("|"==r)return s("operator","pipe");if("."==r)return s("operator","property");if(l.stringChar.test(r))return t.tokenize=k(r),s("string","string");if(l.operatorChars.test(r))return e.eatWhile(l.operatorChars),s("operator","operator");if("["==r||"]"==r)return s("bracket","bracket");if("("==r||")"==r)return s("bracket","operator");if(/\d/.test(r))return e.eatWhile(/\d/),s("number","number");if("variable"==t.last){if("@"==r)return e.eatWhile(l.validIdentifier),s("property","property");if("|"==r)return e.eatWhile(l.validIdentifier),s("qualifier","modifier")}else{if("pipe"==t.last)return e.eatWhile(l.validIdentifier),s("qualifier","modifier");if("whitespace"==t.last)return e.eatWhile(l.validIdentifier),s("attribute","modifier")}if("property"==t.last)return e.eatWhile(l.validIdentifier),s("property",null);if(/\s/.test(r))return n="whitespace",null;var u="";"/"!=r&&(u+=r);for(var d=null;d=e.eat(l.validIdentifier);)u+=d;for(var p=0,h=f.length;p<h;p++)if(f[p]==u)return s("keyword","keyword");return/\s/.test(r)?null:s("tag","tag")}function k(e){return function(t,r){for(var n=null,i=null;!t.eol();){if(i=t.peek(),t.next()==e&&"\\"!==n){r.tokenize=h;break}n=i}return"string"}}function b(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=c;break}r.next()}return e}}return{startState:function(){return{base:e.startState(u),tokenize:c,last:null,depth:0}},copyState:function(t){return{base:e.copyState(u,t.base),tokenize:t.tokenize,last:t.last,depth:t.depth}},innerMode:function(e){if(e.tokenize==c)return{mode:u,state:e.base}},token:function(e,t){var r=t.tokenize(e,t);return t.last=n,r},indent:function(t,r,n){return t.tokenize==c&&u.indent?u.indent(t.base,r,n):e.Pass},blockCommentStart:a+"*",blockCommentEnd:"*"+i}})),e.defineMIME("text/x-smarty","smarty")}(r(11))}}]);
//# sourceMappingURL=97.572b0211.chunk.js.map