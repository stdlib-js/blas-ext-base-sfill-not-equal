"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=n(function(w,q){
function j(e,r,a,i,t,E){var u,s;if(e<=0)return i;for(u=E,s=0;s<e;s++)i[u]!==r&&(i[u]=a),u+=t;return i}q.exports=j
});var f=n(function(z,v){
var m=require('@stdlib/strided-base-stride2offset/dist'),x=o();function N(e,r,a,i,t){return x(e,r,a,i,t,m(e,t))}v.exports=N
});var p=n(function(A,d){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),_=o();R(c,"ndarray",_);d.exports=c
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),l,y=b(O(__dirname,"./native.js"));g(y)?l=h:l=y;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
