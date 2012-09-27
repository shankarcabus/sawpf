(function(c,n,l){$.extend(c,jQuery,{trigger:function(a,b,d){a.trigger?a.trigger(b,d):$.event.trigger(b,d,a,!0)},addEvent:function(a,b){$([this]).bind(a,b);return this},removeEvent:function(a,b){$([this]).unbind(a,b);return this},buildFragment:function(a,b){var d=$.buildFragment([a],[b]);return d.cacheable?$.clone(d.fragment):d.fragment},$:jQuery});$.each(["bind","unbind","undelegate","delegate"],function(a,b){c[b]=function(){var a=this[b]?this:$([this]);a[b].apply(a,arguments);return this}});$.each("append filter addClass remove data get".split(" "),
function(a,b){c[b]=function(a){return a[b].apply(a,c.makeArray(arguments).slice(1))}});var pa=$.cleanData;$.cleanData=function(a){$.each(a,function(a,d){c.trigger(d,"destroyed",[],!1)});pa(a)};c.each=function(a,b,d){var c=0,e;if(a)if("number"==typeof a.length&&a.pop){a.attr&&a.attr("length");for(e=a.length;c<e&&!1!==b.call(d||a[c],a[c],c,a);c++);}else for(e in a)if(!1===b.call(d||a[c],a[e],e,a))break;return a};var qa=/==/,ra=/([A-Z]+)([A-Z][a-z])/g,sa=/([a-z\d])([A-Z])/g,ta=/([a-z\d])([A-Z])/g,P=
/\{([^\}]+)\}/g,s=/"/g,ua=/'/g;c.extend(c,{esc:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(s,"&#34;").replace(ua,"&#39;")},getObject:function(a,b,d){var a=a?a.split("."):[],f=a.length,e,g=0,h,i,b=c.isArray(b)?b:[b||n];if(!f)return b[0];for(;e=b[g++];){for(i=0;i<f-1&&/^f|^o/.test(typeof e);i++)e=a[i]in e?e[a[i]]:d&&(e[a[i]]={});if(/^f|^o/.test(typeof e)&&(h=a[i]in e?e[a[i]]:d&&(e[a[i]]={}),h!==l))return!1===d&&delete e[a[i]],h}},capitalize:function(a){return a.charAt(0).toUpperCase()+
a.slice(1)},underscore:function(a){return a.replace(qa,"/").replace(ra,"$1_$2").replace(sa,"$1_$2").replace(ta,"_").toLowerCase()},sub:function(a,b,d){var f=[];f.push(a.replace(P,function(a,g){var h=c.getObject(g,b,d===l?d:!d);return/^f|^o/.test(typeof h)?(f.push(h),""):""+h}));return 1>=f.length?f[0]:f},replacer:P,undHash:/_|-/});var F=0;c.Construct=function(){if(arguments.length)return c.Construct.extend.apply(c.Construct,arguments)};c.extend(c.Construct,{newInstance:function(){var a=this.instance(),
b;a.setup&&(b=a.setup.apply(a,arguments));a.init&&a.init.apply(a,b||arguments);return a},_inherit:function(a,b,d){c.extend(d||a,a||{})},_overwrite:function(a,b,d,c){a[d]=c},setup:function(a){this.defaults=c.extend(!0,{},a.defaults,this.defaults)},instance:function(){F=1;var a=new this;F=0;return a},extend:function(a,b,d){function f(){if(!F)return this.constructor!==f&&arguments.length?arguments.callee.extend.apply(arguments.callee,arguments):this.constructor.newInstance.apply(this.constructor,arguments)}
"string"!=typeof a&&(d=b,b=a,a=null);d||(d=b,b=null);var d=d||{},e=this.prototype,g,h,i,j;j=this.instance();c.Construct._inherit(d,e,j);for(g in this)this.hasOwnProperty(g)&&(f[g]=this[g]);c.Construct._inherit(b,this,f);if(a){i=a.split(".");h=i.pop();i=e=c.getObject(i.join("."),n,!0);var o=c.underscore(a.replace(/\./g,"_")),z=c.underscore(h);e[h]=f}c.extend(f,{constructor:f,prototype:j,namespace:i,shortName:h,_shortName:z,fullName:a,_fullName:o});f.prototype.constructor=f;h=[this].concat(c.makeArray(arguments));
j=f.setup.apply(f,h);f.init&&f.init.apply(f,j||h);return f}});var q=function(a){return a&&"object"===typeof a&&!(a instanceof Date)},G=function(a,b){return c.each(a,function(a){a&&a.unbind&&a.unbind("change"+b)})},H=function(a,b,d){a instanceof u?G([a],d._namespace):a=c.isArray(a)?new u.List(a):new u(a);a.bind("change"+d._namespace,function(f,e){var g=c.makeArray(arguments),f=g.shift();g[0]="*"===b?d.indexOf(a)+"."+g[0]:b+"."+g[0];f.triggeredNS=f.triggeredNS||{};f.triggeredNS[d._namespace]||(f.triggeredNS[d._namespace]=
!0,c.trigger(d,f,g),c.trigger(d,g[0],g))});return a},Q=0,v=l,R=function(){if(!v)return v=[],!0},p=function(a,b,d){if(!a._init)if(v)v.push([a,{type:b,batchNum:S},d]);else return c.trigger(a,b,d)},S=1,T=function(){var a=v.slice(0);v=l;S++;c.each(a,function(a){c.trigger.apply(c,a)})},C=function(a,b,d){a.each(function(a,e){d[e]=q(a)&&c.isFunction(a[b])?a[b]():a});return d},A=function(a){return function(){return c[a].apply(this,arguments)}},U=A("addEvent"),A=A("removeEvent"),I=function(a){return c.isArray(a)?
a:(""+a).split(".")},u=c.Construct("can.Observe",{setup:function(){c.Construct.setup.apply(this,arguments)},bind:U,unbind:A,id:"id"},{setup:function(a){this._data={};this._namespace=".observe"+ ++Q;this._init=1;this.attr(a);delete this._init},attr:function(a,b){if(~"ns".indexOf((typeof a).charAt(0))){if(b===l)return u.__reading&&u.__reading(this,a),this._get(a);this._set(a,b);return this}return this._attrs(a,b)},each:function(){return c.each.apply(l,[this.__get()].concat(c.makeArray(arguments)))},
removeAttr:function(a){var a=I(a),b=a.shift(),d=this._data[b];if(a.length)return d.removeAttr(a);delete this._data[b];b in this.constructor.prototype||delete this[b];p(this,"change",[b,"remove",l,d]);p(this,b,[l,d]);return d},_get:function(a){var a=I(a),b=this.__get(a.shift());return a.length?b?b._get(a):l:b},__get:function(a){return a?this._data[a]:this._data},_set:function(a,b){var d=I(a),c=d.shift(),e=this.__get(c);if(q(e)&&d.length)e._set(d,b);else{if(d.length)throw"can.Observe: Object does not exist";
this.__convert&&(b=this.__convert(c,b));this.__set(c,b,e)}},__set:function(a,b,c){if(b!==c){var f=this.__get().hasOwnProperty(a)?"set":"add";this.___set(a,q(b)?H(b,a,this):b);p(this,"change",[a,f,b,c]);p(this,a,[b,c]);c&&G([c],this._namespace)}},___set:function(a,b){this._data[a]=b;a in this.constructor.prototype||(this[a]=b)},bind:U,unbind:A,serialize:function(){return C(this,"serialize",{})},_attrs:function(a,b){if(a===l)return C(this,"attr",{});var a=c.extend(!0,{},a),d,f=R(),e=this,g;this.each(function(c,
d){g=a[d];g===l?b&&e.removeAttr(d):(q(c)&&q(g)?c.attr(g,b):c!=g&&e._set(d,g),delete a[d])});for(d in a)g=a[d],this._set(d,g);f&&T();return this}}),va=[].splice,J=u("can.Observe.List",{setup:function(a,b){this.length=0;this._namespace=".observe"+ ++Q;this._init=1;this.bind("change",c.proxy(this._changes,this));this.push.apply(this,c.makeArray(a||[]));c.extend(this,b);delete this._init},_changes:function(a,b,c,f,e){~b.indexOf(".")||("add"===c?(p(this,c,[f,+b]),p(this,"length",[this.length])):"remove"===
c?(p(this,c,[e,+b]),p(this,"length",[this.length])):p(this,c,[f,+b]))},__get:function(a){return a?this[a]:this},___set:function(a,b){this[a]=b;+a>=this.length&&(this.length=+a+1)},serialize:function(){return C(this,"serialize",[])},splice:function(a,b){var d=c.makeArray(arguments),f;for(f=2;f<d.length;f++){var e=d[f];q(e)&&(d[f]=H(e,"*",this))}b===l&&(b=d[1]=this.length-a);f=va.apply(this,d);0<b&&(p(this,"change",[""+a,"remove",l,f]),G(f,this._namespace));2<d.length&&p(this,"change",[""+a,"add",d.slice(2),
f]);return f},_attrs:function(a,b){if(a===l)return C(this,"attr",[]);var a=a.slice(0),c=Math.min(a.length,this.length),f=R(),e;for(e=0;e<c;e++){var g=this[e],h=a[e];q(g)&&q(h)?g.attr(h,b):g!=h&&this._set(e,h)}a.length>this.length?this.push(a.slice(this.length)):a.length<this.length&&b&&this.splice(a.length);f&&T()}});c.each({push:"length",unshift:0},function(a,b){J.prototype[b]=function(){for(var d=arguments[0]&&c.isArray(arguments[0])?arguments[0]:c.makeArray(arguments),f=a?this.length:0,e=0;e<d.length;e++){var g=
d[e];q(g)&&(d[e]=H(g,"*",this))}e=[][b].apply(this,d);(!this.comparator||!d.length)&&p(this,"change",[""+f,"add",d,l]);return e}});c.each({pop:"length",shift:0},function(a,b){J.prototype[b]=function(){var d=arguments[0]&&c.isArray(arguments[0])?arguments[0]:c.makeArray(arguments),f=a&&this.length?this.length-1:0,d=[][b].apply(this,d);p(this,"change",[""+f,"remove",l,[d]]);d&&d.unbind&&d.unbind("change"+this._namespace);return d}});J.prototype.indexOf=[].indexOf||function(a){return c.inArray(a,this)};
var wa=function(a,b,d){var f=new c.Deferred;a.then(function(){arguments[0]=b[d](arguments[0]);f.resolve.apply(f,arguments)},function(){f.rejectWith.apply(this,arguments)});return f},xa=0,V=/change.observe\d+/,W=function(a,b,c,f,e){var g;g=[a.serialize()];var h=a.constructor,i;"destroy"==b&&g.shift();"create"!==b&&g.unshift(a[a.constructor.id]);i=h[b].apply(h,g);g=i.pipe(function(c){a[e||b+"d"](c,i);return a});i.abort&&(g.abort=function(){i.abort()});return g.then(c,f)},ya={create:{url:"_shortName",
type:"post"},update:{data:function(a,b){var b=b||{},d=this.id;b[d]&&b[d]!==a&&(b["new"+c.capitalize(a)]=b[d],delete b[d]);b[d]=a;return b},type:"put"},destroy:{type:"delete",data:function(a){var b={};b[this.id]=a;return b}},findAll:{url:"_shortName"},findOne:{}},X=function(a,b){return function(d){var d=a.data?a.data.apply(this,arguments):d,f=b||this[a.url||"_url"],e=d,g=a.type||"get";if("string"==typeof f){var h=f.split(" "),f={url:h.pop()};h.length&&(f.type=h.pop())}f.data="object"==typeof e&&!c.isArray(e)?
c.extend(f.data||{},e):e;f.url=c.sub(f.url,f.data,!0);return c.ajax(c.extend({type:g||"post",dataType:"json",success:void 0,error:void 0},f))}};c.Observe("can.Model",{setup:function(a){c.Observe.apply(this,arguments);if(this!==c.Model){var b=this,d=c.proxy(this._clean,b);c.each(ya,function(f,e){c.isFunction(b[e])||(b[e]=X(f,b[e]));if(b["make"+c.capitalize(e)]){var g=b["make"+c.capitalize(e)](b[e]);c.Construct._overwrite(b,a,e,function(){this._super;this._reqs++;return g.apply(this,arguments).then(d,
d)})}});if(!b.fullName||b.fullName==a.fullName)b.fullName=b._shortName="Model"+ ++xa;this.store={};this._reqs=0;this._url=this._shortName+"/{"+this.id+"}"}},_ajax:X,_clean:function(){this._reqs--;if(!this._reqs)for(var a in this.store)this.store[a]._bindings||delete this.store[a]},models:function(a){if(a){if(a instanceof this.List)return a;var b=this,d=new (b.List||Y),f=c.isArray(a),e=a instanceof Y,e=f?a:e?a.serialize():a.data;c.each(e,function(a){d.push(b.model(a))});f||c.each(a,function(a,b){"data"!==
b&&(d[b]=a)});return d}},model:function(a){if(a){a instanceof this&&(a=a.serialize());var b=this.store[a[this.id]]?this.store[a[this.id]].attr(a):new this(a);this._reqs&&(this.store[a[this.id]]=b);return b}}},{isNew:function(){var a=this[this.constructor.id];return!(a||0===a)},save:function(a,b){return W(this,this.isNew()?"create":"update",a,b)},destroy:function(a,b){return W(this,"destroy",a,b,"destroyed")},bind:function(a){V.test(a)||(this._bindings||(this.constructor.store[this[this.constructor.id]]=
this,this._bindings=0),this._bindings++);return c.Observe.prototype.bind.apply(this,arguments)},unbind:function(a){V.test(a)||(this._bindings--,this._bindings||delete this.constructor.store[this[this.constructor.id]]);return c.Observe.prototype.unbind.apply(this,arguments)},___set:function(a,b){c.Observe.prototype.___set.call(this,a,b);a===this.constructor.id&&this._bindings&&(this.constructor.store[this[this.constructor.id]]=this)}});c.each({makeFindAll:"models",makeFindOne:"model"},function(a,b){c.Model[b]=
function(b){return function(c,e,g){return wa(b.call(this,c),this,a).then(e,g)}}});c.each(["created","updated","destroyed"],function(a){c.Model.prototype[a]=function(b){var d=this.constructor;b&&"object"==typeof b&&this.attr(b.attr?b.attr():b);c.trigger(this,a);c.trigger(this,"change",a);c.trigger(d,a,this)}});var Y=c.Observe.List("can.Model.List",{setup:function(){c.Observe.List.prototype.setup.apply(this,arguments);var a=this;this.bind("change",function(b,c){/\w+\.destroyed/.test(c)&&a.splice(a.indexOf(b.target),
1)})}}),za=/^\d+$/,Aa=/([^\[\]]+)|(\[\])/g,Ba=/([^?#]*)(#.*)?$/,Z=function(a){return decodeURIComponent(a.replace(/\+/g," "))};c.extend(c,{deparam:function(a){var b={},d;a&&Ba.test(a)&&(a=a.split("&"),c.each(a,function(a){var a=a.split("="),c=Z(a.shift()),g=Z(a.join("="));current=b;for(var a=c.match(Aa),c=0,h=a.length-1;c<h;c++)current[a[c]]||(current[a[c]]=za.test(a[c+1])||"[]"==a[c+1]?[]:{}),current=current[a[c]];d=a.pop();"[]"==d?current.push(g):current[d]=g}));return b}});var aa=/\:([\w\.]+)/g,
ba=/^(?:&[^=]+=[^&]*)+/,Ca=function(a){var b=[];c.each(a,function(a,f){b.push(("className"===f?"class":f)+'="'+("href"===f?a:c.esc(a))+'"')});return b.join(" ")},ca=function(a,b){var c=0,f=0,e={},g;for(g in a.defaults)a.defaults[g]===b[g]&&(e[g]=1,c++);for(;f<a.names.length;f++){if(!b.hasOwnProperty(a.names[f]))return-1;e[a.names[f]]||c++}return c},da=!0,K=n.location,w=c.each,t=c.extend;c.route=function(a,b){var b=b||{},d=[],f=a.replace(aa,function(c,f,h){d.push(f);return"([^\\"+(a.substr(h+c.length,
1)||"&")+"]"+(b[f]?"*":"+")+")"});c.route.routes[a]={test:RegExp("^"+f+"($|&)"),route:a,names:d,defaults:b,length:a.split("/").length};return c.route};t(c.route,{param:function(a,b){var d,f=0,e,g=a.route,h=0;delete a.route;w(a,function(){h++});w(c.route.routes,function(c){e=ca(c,a);e>f&&(d=c,f=e);if(e>=h)return!1});c.route.routes[g]&&ca(c.route.routes[g],a)===f&&(d=c.route.routes[g]);if(d){var i=t({},a),g=d.route.replace(aa,function(c,b){delete i[b];return a[b]===d.defaults[b]?"":encodeURIComponent(a[b])}),
j;w(d.defaults,function(a,b){i[b]===a&&delete i[b]});j=c.param(i);b&&c.route.attr("route",d.route);return g+(j?"&"+j:"")}return c.isEmptyObject(a)?"":"&"+c.param(a)},deparam:function(a){var b={length:-1};w(c.route.routes,function(c){c.test.test(a)&&c.length>b.length&&(b=c)});if(-1<b.length){var d=a.match(b.test),f=d.shift(),e=(f=a.substr(f.length-("&"===d[d.length-1]?1:0)))&&ba.test(f)?c.deparam(f.slice(1)):{},e=t(!0,{},b.defaults,e);w(d,function(a,c){a&&"&"!==a&&(e[b.names[c]]=decodeURIComponent(a))});
e.route=b.route;return e}"&"!==a.charAt(0)&&(a="&"+a);return ba.test(a)?c.deparam(a.slice(1)):{}},data:new c.Observe({}),routes:{},ready:function(a){!1===a&&(da=a);(!0===a||!0===da)&&ea();return c.route},url:function(a,b){b&&(a=t({},L,a));return"#!"+c.route.param(a)},link:function(a,b,d,f){return"<a "+Ca(t({href:c.route.url(b,f)},d))+">"+a+"</a>"},current:function(a){return K.hash=="#!"+c.route.param(a)}});w("bind unbind delegate undelegate attr removeAttr".split(" "),function(a){c.route[a]=function(){return c.route.data[a].apply(c.route.data,
arguments)}});var fa,L,ea=function(){var a=K.href.split(/#!?/)[1]||"";L=c.route.deparam(a);(!M||a!==ga)&&c.route.attr(L,!0)},ga,M;c.bind.call(n,"hashchange",ea);c.route.bind("change",function(){M=1;clearTimeout(fa);fa=setTimeout(function(){M=0;var a=c.route.data.serialize();K.hash="#!"+(ga=c.route.param(a,!0))},1)});c.bind.call(document,"ready",c.route.ready);(function(){var a=function(a,b,d){c.bind.call(a,b,d);return function(){c.unbind.call(a,b,d)}},b=c.isFunction,d=c.extend,f=c.each,e=[].slice,
g=/\{([^\}]+)\}/g,h=c.getObject("$.event.special")||{},i=function(a,b,d,f){c.delegate.call(a,b,d,f);return function(){c.undelegate.call(a,b,d,f)}},j=function(a,d){var f="string"==typeof d?a[d]:d;b(f)||(f=a[f]);return function(){a.called=d;return f.apply(a,[this.nodeName?c.$(this):this].concat(e.call(arguments,0)))}},o;c.Construct("can.Control",{setup:function(){c.Construct.setup.apply(this,arguments);if(this!==c.Control){var a;this.actions={};for(a in this.prototype)this._isAction(a)&&(this.actions[a]=
this._action(a))}},_isAction:function(a){var c=this.prototype[a],d=typeof c;return"constructor"!==a&&("function"==d||"string"==d&&b(this.prototype[c]))&&!(!h[a]&&!z[a]&&!/[^\w]/.test(a))},_action:function(a,b){g.lastIndex=0;if(b||!g.test(a)){var d=b?c.sub(a,[b,n]):a,f=c.isArray(d),e=(f?d[1]:d).match(/^(?:(.*?)\s)?([\w\.\:>]+)$/);return{processor:z[e[2]]||o,parts:e,delegate:f?d[0]:l}}},processors:{},defaults:{}},{setup:function(a,b){var f=this.constructor,e=f.pluginName||f._fullName;this.element=c.$(a);
e&&"can_control"!==e&&this.element.addClass(e);(e=c.data(this.element,"controls"))||c.data(this.element,"controls",e=[]);e.push(this);this.options=d({},f.defaults,b);this.on();return[this.element,this.options]},on:function(b,d,f,e){if(!b){this.off();var b=this.constructor,d=this._bindings,f=b.actions,e=this.element,g=j(this,"destroy"),h,o;for(h in f)f.hasOwnProperty(h)&&(o=f[h]||b._action(h,this.options),d.push(o.processor(o.delegate||e,o.parts[2],o.parts[1],h,this)));c.bind.call(e,"destroyed",g);
d.push(function(a){c.unbind.call(a,"destroyed",g)});return d.length}"string"==typeof b&&(e=f,f=d,d=b,b=this.element);"string"==typeof e&&(e=j(this,e));this._bindings.push(d?i(b,c.trim(d),f,e):a(b,f,e));return this._bindings.length},off:function(){var a=this.element[0];f(this._bindings||[],function(b){b(a)});this._bindings=[]},destroy:function(){var a=this.constructor,a=a.pluginName||a._fullName;this.off();a&&"can_control"!==a&&this.element.removeClass(a);a=c.data(this.element,"controls");a.splice(c.inArray(this,
a),1);c.trigger(this,"destroyed");this.element=null}});var z=c.Control.processors;o=function(b,d,f,e,g){e=j(g,e);return f?i(b,c.trim(f),d,e):a(b,d,e)};f("change click contextmenu dblclick keydown keyup keypress mousedown mousemove mouseout mouseover mouseup reset resize scroll select submit focusin focusout mouseenter mouseleave".split(" "),function(a){z[a]=o})})();c.Control.processors.route=function(a,b,d,f,e){c.route(d||"");var g,h=function(a){if(c.route.attr("route")===(d||"")&&(a.batchNum===l||
a.batchNum!==g))if(g=a.batchNum,a=c.route.attr(),delete a.route,c.isFunction(e[f]))e[f](a);else e[e[f]](a)};c.route.bind("change",h);return function(){c.route.unbind("change",h)}};var D=c.isFunction,Da=c.makeArray,ha=1,k=c.view=function(a,b,d,f){a=k.render(a,b,d,f);return c.isDeferred(a)?a.pipe(function(a){return k.frag(a)}):k.frag(a)};c.extend(k,{frag:function(a,b){return k.hookup(k.fragment(a),b)},fragment:function(a){a=c.buildFragment(a,document.body);a.childNodes.length||a.appendChild(document.createTextNode(""));
return a},toId:function(a){return c.map(a.toString().split(/\/|\./g),function(a){if(a)return a}).join("_")},hookup:function(a,b){var d=[],f,e,g,h=0;for(c.each(a.childNodes?c.makeArray(a.childNodes):a,function(a){1===a.nodeType&&(d.push(a),d.push.apply(d,c.makeArray(a.getElementsByTagName("*"))))});g=d[h++];)if(g.getAttribute&&(f=g.getAttribute("data-view-id"))&&(e=k.hookups[f]))e(g,b,f),delete k.hookups[f],g.removeAttribute("data-view-id");return a},hookups:{},hook:function(a){k.hookups[++ha]=a;return" data-view-id='"+
ha+"'"},cached:{},cache:!0,register:function(a){this.types["."+a.suffix]=a},types:{},ext:".ejs",registerScript:function(){},preload:function(){},render:function(a,b,d,f){D(d)&&(f=d,d=l);var e=Ea(b);if(e.length){var g=new c.Deferred;e.push(ia(a,!0));c.when.apply(c,e).then(function(a){var e=Da(arguments),h=e.pop();if(c.isDeferred(b))b=ja(a);else for(var l in b)c.isDeferred(b[l])&&(b[l]=ja(e.shift()));e=h(b,d);g.resolve(e);f&&f(e)});return g}var h,e=D(f),g=ia(a,e);e?(h=g,g.then(function(a){f(a(b,d))})):
g.then(function(a){h=a(b,d)});return h}});c.isDeferred=function(a){return a&&D(a.then)&&D(a.pipe)};var ka=function(a,b){if(!a.length)throw"can.view: No template or empty template:"+b;},ia=function(a,b){var d=a.match(/\.[\w\d]+$/),f,e,g,h=function(a){var a=f.renderer(g,a),b=new c.Deferred;b.resolve(a);k.cache&&(k.cached[g]=b);return b};a.match(/^#/)&&(a=a.substr(1));if(e=document.getElementById(a))d="."+e.type.match(/\/(x\-)?(.+)/)[2];!d&&!k.cached[a]&&(a+=d=k.ext);c.isArray(d)&&(d=d[0]);g=c.view.toId(a);
if(a.match(/^\/\//))var i=a.substr(2),a=!n.steal?"/"+i:steal.root.mapJoin(i);f=k.types[d];if(k.cached[g])return k.cached[g];if(e)return h(e.innerHTML);var j=new c.Deferred;c.ajax({async:b,url:a,dataType:"text",error:function(b){ka("",a);j.reject(b)},success:function(b){ka(b,a);j.resolve(f.renderer(g,b));k.cache&&(k.cached[g]=j)}});return j},Ea=function(a){var b=[];if(c.isDeferred(a))return[a];for(var d in a)c.isDeferred(a[d])&&b.push(a[d]);return b},ja=function(a){return c.isArray(a)&&"success"===
a[1]?a[0]:a};n.steal&&steal.type("view js",function(a,b){var d=c.view.types["."+a.type],f=c.view.toId(a.rootSrc);a.text="steal('"+(d.plugin||"can/view/"+a.type)+"').then(function($){can.view.preload('"+f+"',"+a.text+");\n})";b()});c.extend(c.view,{register:function(a){this.types["."+a.suffix]=a;n.steal&&steal.type(a.suffix+" view js",function(a,d){var f=c.view.types["."+a.type],e=c.view.toId(a.rootSrc+"");a.text=f.script(e,a.text);d()});c.view[a.suffix]=function(b,c){k.preload(b,a.renderer(b,c))}},
registerScript:function(a,b,c){return"can.view.preload('"+b+"',"+k.types["."+a].script(b,c)+");"},preload:function(a,b){c.view.cached[a]=(new c.Deferred).resolve(function(a,c){return b.call(a,a,c)})}});var Fa=function(a,b){var d;c.Observe&&(d=c.Observe.__reading,c.Observe.__reading=function(a,b){f.push({obj:a,attr:b})});var f=[],e=a.call(b);c.Observe&&(c.Observe.__reading=d);return{value:e,observed:f}},la=function(a,b,d){var f={},e=!0,g={value:l,teardown:function(){for(var a in f){var b=f[a];b.observe.obj.unbind(b.observe.attr,
h);delete f[a]}}},h=function(){var a=g.value,b=i();g.value=b;b!==a&&d(b,a)},i=function(){var d=Fa(a,b),g=d.observed,d=d.value;e=!e;c.each(g,function(a){f[a.obj._namespace+"|"+a.attr]?f[a.obj._namespace+"|"+a.attr].matched=e:(f[a.obj._namespace+"|"+a.attr]={matched:e,observe:a},a.obj.bind(a.attr,h))});for(var i in f)g=f[i],g.matched!==e&&(g.observe.obj.unbind(g.observe.attr,h),delete f[i]);return d};g.value=i();g.isListening=!c.isEmptyObject(f);return g};c.compute=function(a,b){if(a.isComputed)return a;
var d,f=0,e,g=!0;"function"===typeof a?e=function(c){return c===l?d?d.value:a.call(b||this):a.apply(b||this,arguments)}:(e=function(b){if(b===l)return a;var d=a;a=b;d!==b&&c.trigger(e,"change",[b,d]);return b},g=!1);e.isComputed=!0;e.bind=function(h,i){c.addEvent.apply(e,arguments);f===0&&g&&(d=la(a,b||this,function(a,b){c.trigger(e,"change",[a,b])}));f++};e.unbind=function(a,b){c.removeEvent.apply(e,arguments);f--;f===0&&g&&d.teardown()};return e};c.compute.binder=la;var Ga=function(a){eval(a)},
t=c.extend,ma=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,na=/([^\s]+)=$/,Ha=/(\r|\n)+/g,Ia=/__!!__/g,Ja={"":"span",table:"tr",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr"},B={"class":"className"},oa=c.each(["checked","disabled","readonly","required"],function(a){B[a]=a}),N=function(a,b,d){B[b]?a[B[b]]=-1<c.inArray(b,oa)?!0:d:a.setAttribute(b,d)},Ka=function(a){return"string"==typeof a||"number"==typeof a?c.esc(a):O(a)},O=function(a){if("string"==typeof a)return a;if(!a&&0!=a)return"";var b=a.hookup&&
function(b,c){a.hookup.call(a,b,c)}||"function"==typeof a&&a;return b?(x.push(b),""):""+a},m=function(a){if(this.constructor!=m){var b=new m(a);return function(a,c){return b.render(a,c)}}"function"==typeof a?this.template={fn:a}:(t(this,a),this.template=La(this.text,this.name))};c.EJS=m;m.prototype.render=function(a,b){a=a||{};return this.template.fn.call(a,a,new m.Helpers(a,b||{}))};t(m,{txt:function(a,b,d,f,e){var g=c.compute.binder(e,f,function(a,b){o(a,b)});if(!g.isListening)return(a||0!==d?Ka:
O)(g.value);var h,i=function(a){c.bind.call(a,"destroyed",g.teardown);h=a},j=function(a){a||(g.teardown(),c.unbind.call(h,"destroyed",g.teardown))},b=Ja[b]||"span",o;if(0==d)return"<"+b+c.view.hook(a?function(a,b){o=function(a){d.nodeValue=""+a;j(d.parentNode)};var c=b&&11===a.parentNode.nodeType?b:a.parentNode,d=document.createTextNode(g.value);c.insertBefore(d,a);c.removeChild(a);i(c)}:function(a,b){o=function(a){e[0].parentNode&&(e=d(a,e));j(e[0].parentNode)};var b=b&&11===a.parentNode.nodeType?
b:a.parentNode,d=function(a,d){var e=c.view.frag(a,b),f=c.map(e.childNodes,function(a){return a}),g=d[d.length-1];g.nextSibling?g.parentNode.insertBefore(e,g.nextSibling):g.parentNode.appendChild(e);c.remove(c.$(d));return f},e=d(g.value,[a]);i(b)})+"></"+b+">";if(1===d){var k=g.value.replace(/['"]/g,"").split("=")[0];x.push(function(a){o=function(b){var b=(b||"").replace(/['"]/g,"").split("="),d=b[0];if(d!=k&&k){var e=k;-1<c.inArray(e,oa)?a[e]=!1:a.removeAttribute(e)}d&&(N(a,d,b[1]),k=d)};i(a)});
return g.value}x.push(function(a){o=function(){N(a,d,h.render())};var b=c.$(a),e;(e=c.data(b,"hooks"))||c.data(b,"hooks",e={});var f=B[d]?a[B[d]]:a.getAttribute(d),b=f.split("__!!__"),h;e[d]?e[d].bindings.push(g):e[d]={render:function(){var a=0;return f.replace(Ia,function(){return O(h.bindings[a++].value)})},bindings:[g],batchNum:l};h=e[d];b.splice(1,0,g.value);N(a,d,b.join(""));i(a)});return"__!!__"},pending:function(){if(x.length){var a=x.slice(0);x=[];return c.view.hook(function(b){c.each(a,function(a){a(b)})})}return""}});
var Ma=RegExp("(<%%|%%>|<%==|<%=|<%#|<%|%>|<|>|\"|')","g"),y=null,E=s=null,x=[],La=function(a,b){var c=[],f=0,a=a.replace(Ha,"\n");a.replace(Ma,function(b,e,g){g>f&&c.push(a.substring(f,g));c.push(e);f=g+e.length});f<a.length&&c.push(a.substr(f));var e="",g=["var ___v1ew = [];"],h=function(a,b){g.push("___v1ew.push(",'"',a.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("\t").join("\\t"),'"'+(b||"")+");")},i=[],j,k=null,p=!1,m="",n=[],q=0,r;for(y=s=E=null;(r=c[q++])!==
l;){if(null===k)switch(r){case "<%":case "<%=":case "<%==":p=1;case "<%#":k=r;e.length&&h(e);e="";break;case "<%%":e+="<%";break;case "<":0!==c[q].indexOf("!--")&&(y=1,p=0);e+=r;break;case ">":y=0;p?(h(e,',can.EJS.pending(),">"'),e=""):e+=r;"/"==j.substr(-1)&&(n.pop(),m=n[n.length-1]);break;case "'":case '"':y&&(s&&s===r?s=null:null===s&&(s=r,E=j));default:"<"===j&&(m=r.split(" ")[0],0===m.indexOf("/")&&n.pop()===m.substr(1)?m=n[n.length-1]||m.substr(1):n.push(m)),e+=r}else switch(r){case "%>":switch(k){case "<%":j=
--e.split("{").length- --e.split("}").length;1==j?(g.push("___v1ew.push(","can.EJS.txt(0,'"+m+"',"+(s?"'"+E.match(na)[1]+"'":y?1:0)+",this,function(){","var ___v1ew = [];",e),i.push({before:"",after:"return ___v1ew.join('')}));\n"})):(f=i.length&&-1==j?i.pop():{after:";"},f.before&&g.push(f.before),g.push(e,";",f.after));break;case "<%=":case "<%==":(j=--e.split("{").length- --e.split("}").length)&&i.push({before:"return ___v1ew.join('')",after:"}));"}),ma.test(e)&&(e=e.match(ma),e="function(__){var "+
e[1]+"=can.$(__);"+e[2]+"}"),g.push("___v1ew.push(","can.EJS.txt("+("<%="===k?1:0)+",'"+m+"',"+(s?"'"+E.match(na)[1]+"'":y?1:0)+",this,function(){ return ",e,j?"var ___v1ew = [];":"}));")}k=null;e="";break;case "<%%":e+="<%";break;default:e+=r}j=r}e.length&&h(e);g.push(";");h={out:"with(_VIEW) { with (_CONTEXT) {"+g.join("")+" return ___v1ew.join('')}}"};Ga.call(h,"this.fn = (function(_CONTEXT,_VIEW){"+h.out+"});\r\n//@ sourceURL="+b+".js");return h};m.Helpers=function(a,b){this._data=a;this._extras=
b;t(this,b)};m.Helpers.prototype={list:function(a,b){c.each(a,function(c,f){b(c,f,a)})}};c.view.register({suffix:"ejs",script:function(a,b){return"can.EJS(function(_CONTEXT,_VIEW) { "+(new m({text:b,name:a})).template.out+" })"},renderer:function(a,b){return m({text:b,name:a})}});"function"===typeof define&&define.amd?define("can",[],function(){return c}):n.can=c})(can={},this);