google.maps.__gjsload__('kml', function(_){var J7=function(a){_.E(this,a,3)},K7=function(a){_.E(this,a,3)},L7=function(a){_.E(this,a,1)},M7=function(a){_.E(this,a,2)},N7=function(a){_.E(this,a,2)},O7=function(a){_.E(this,a,2)},P7=function(a){_.E(this,a,2)},Q7=function(a){_.E(this,a,2)},R7=function(a){_.E(this,a,4)},S7=function(a){_.E(this,a,6)},T7=function(a){_.E(this,a,4)},U7=function(a){_.E(this,a,3)},V7=function(a){_.E(this,a,10)},W7=_.oa("g"),X7=function(a){this.i=0;this.g=[];this.j=a},Z7=function(){var a=this;this.Ja=new _.Th(function(){var b=
a.get("zoom"),c=a.get("projection");if(c&&_.bd(b)){var d=a.get("mapBounds");if(d){var e=1<<b,f=c.fromLatLngToPoint(_.gm(d));d=c.fromLatLngToPoint(_.fm(d));f.x*=e;f.y*=e;d.x*=e;d.y*=e;e=new _.Ed([f,d]);e=_.Fd(e.Ka,e.Ia,e.Oa,e.Na);b=_.Dn(c,b);c=(e.Ka+e.Oa)/2;b=c-_.Xc(c,0,Math.sqrt(b.x*b.x+b.y*b.y));e.Oa-=b;e.Ka-=b;a.g&&_.px(a.g,e)||(b=e.getCenter(),c=e.Xa(),a.g=new _.Ed([new _.I(b.x-c.width,b.y-c.height),new _.I(b.x+c.width,b.y+c.height)]));Y7(a)}}},0)},Y7=function(a){if(a.g){var b=a.g.getCenter(),
c=a.get("projection");var d=a.get("bounds");var e=a.get("zoom");if(c&&d&&_.bd(e)){d=_.Cn(c,d,e);if(b){var f=d.getCenter();(e=_.En(c,e))&&Infinity!=e&&0!=e&&(c&&c.getPov&&0!=c.getPov().heading()%180?(b=f.y-b.y,b=_.Xc(b,-e/2,e/2)-b,d.Ia+=b,d.Na+=b):(b=f.x-b.x,b=_.Xc(b,-e/2,e/2)-b,d.Ka+=b,d.Oa+=b))}d.Ka-=_.Zj.width;d.Ia-=_.Zj.height;d.Oa-=_.Zj.width;d.Na-=_.Zj.height}else d=void 0;b=a.g;d=_.Fd(Math.max(b.Ka,d.Ka),Math.max(b.Ia,d.Ia),Math.min(b.Oa,d.Oa),Math.min(b.Na,d.Na));d.equals(a.i)||(a.set("croppedBounds",
d),a.i=d)}},nga=function(a,b){return{i:function(c){return"dragstart"!=c&&"drag"!=c&&"dragend"!=c},j:function(c,d){if(d)return null;var e=null,f=c.latLng;a.forEach(function(g){if(!e){var h=g.get("bounds");h&&h.contains(f)&&0!=g.get("clickable")&&(e=g)}});return e},handleEvent:function(c,d,e){"mouseover"==c?b.set("cursor","pointer"):"mouseout"==c&&b.set("cursor",null);_.N.trigger(e,c,new _.Jm(d.latLng,d.tb))},zIndex:10}},a8=function(a,b){var c=this;this.i=a;this.g=b;this.Ja=new _.Th(function(){var d=
c.get("projection"),e=c.get("bounds"),f=c.get("zoom");oga(c);if(d&&e&&_.bd(f)&&!e.isEmpty()){var g=Math.round(e.Ia);e=Math.round(e.Na);d=c.get("projection");var h=c.get("zoom"),k=c.i;f=_.gm(k).lng();var l=_.fm(k).lng();h=_.Cn(d,k,h);h=Math.round(h.Xa().width);k=k.getNorthEast().lat()-k.getSouthWest().lat();for(var m=$7(c,g),q=g;g<=e;++g){var t=$7(c,g),u=q,v=g,w=m,x=t,D=(w+x)/2,J=$7(c,(u+v)/2),M=Math.abs(g-q);if(1<=Math.abs((u-v)/(x-w)*(J-D))&&10<M||g==e)u=new _.L(m,l),v=new _.L(t,f),m=c,q=new _.K(h,
g-q),v=new _.Td(v,u),w=k,u=d,x=_.gm(v).lat(),D=_.fm(v).lat(),D=q.height/(x-D),x=(_.gm(m.i).lat()-x)*D,w=Math.abs(w*D),x=new _.I(0,x),D=_.gm(v),q={j:x,position:D,i:q,scaledSize:new _.K(q.width,w)},u={min:_.cn(_.gm(v),u),max:_.cn(_.fm(v),u)},q.o=u,_.Pe(m.g,q),q=g,m=t}}_.dy((0,_.y)(c.j,c))()},0)},oga=function(a){a.g.forEach(function(b){b.km=!0})},$7=function(a,b){var c=a.get("projection");a=a.get("zoom");return _.An(c,new _.I(0,b),a).lat()},c8=function(a,b,c,d){var e=this;this.V=a;this.j=b;this.g=c;
this.i=d;_.N.addListener(c,"insert",(0,_.y)(this.W,this));_.N.addListener(c,"remove",(0,_.y)(this.H,this));setTimeout(function(){if(e.g.Xa()){var f=b8(e);e.g.forEach((0,_.y)(e.H,e));e.g.forEach((0,_.y)(e.o,e,f))}},0)},b8=function(a){a=a.get("opacity");return _.$c(a,1)},d8=function(a){this.g=_.ml(_.zp,_.Yi,a+"/maps/api/js/KmlOverlayService.GetFeature",_.gi)},pga=_.n(),e8=function(a,b){return 0==_.Cc(a,1)?a.Eb()*b:2==_.Cc(a,1)?b-a.Eb():a.Eb()},f8=function(a,b,c){return 2==_.Cc(a,0)?(a=0==_.Cc(a.Xa(),
1)?a.Xa().Eb()*b:a.Xa().Eb(),a/c):1},g8=function(a,b,c,d){return 0==_.Cc(a,0)?b:2==_.Cc(a,0)?e8(a.Xa(),c):b*d},h8=function(a,b){this.i=b;this.g=this.j=null;_.N.bind(this.i,"insert",this,this.hi);_.N.bind(this.i,"remove",this,this.ii)},i8=function(a,b){this.g=b;this.i=_.N.bind(a,"click",this,this.j)},qga=function(a){var b=a.get("map");0!=a.get("screenOverlays")?j8(a,b):k8(a,b)},l8=function(a){return a.get("url")?a.get("url"):null},tga=function(a,b,c){b.__gm.ma||(b.__gm.ma={},_.Uc({"false":_.xt,"true":_.Yt},
function(d,e){b.__gm.ma[d]=new X7(new W7(_.ml(_.zp,_.Yi,e+"/maps/api/js/KmlOverlayService.GetOverlays",_.gi)))}));if(a.ha=c)a.W=!0,b.__gm.ma[0==c.lastIndexOf("https://",0)].load(c,_.ml(rga,_.ml(sga,a,b,c))),_.Oi(b,"Lk"),_.go("Lk","-p",a),a.screenOverlays_changed=_.ml(qga,a)},sga=function(a,b,c,d,e,f,g,h,k,l){if(a.get("map")==b&&c==a.ha&&a.W){a.W=!1;var m=l8(a);if(m&&m==c&&(a.set("status",g),g==_.ia)){a.g=h;a.i=k;e&&a.set("defaultViewport",e);a.set("metadata",f);a.ta=l;c=0==c.lastIndexOf("https://",
0);e=new d8(c?_.Yt:_.xt);f=_.QD(e);g=new _.Cs;g.layerId=d;g.Mh=c;g.zIndex=a.get("zIndex")||0;for(var q in l)g.parameters[q]=l[q];g.Ti=(0,_.y)(f.load,f);g.clickable=0!=a.get("clickable");a.j=g;_.MW.mi(g,b);a.H||(a.H=_.N.addListener(g,"click",(0,_.y)(uga,a,a,b)));0!=a.get("screenOverlays")&&j8(a,b);for(d=0;d<a.i.length;++d)l=a.i[d],l.overlay.set("map",b),l.overlay.bindTo("clickable",a),vga(e,l,a,b);d=a.get("preserveViewport");e=a.get("defaultViewport");!d&&e&&b.fitBounds(e);b=new _.dg;b=new i8(a,b);
b.bindTo("map",a);b.bindTo("suppressInfoWindows",a);a.o=b;_.N.addListener(a,"clickable_changed",function(){a.j.clickable=0!=a.get("clickable")})}}},vga=function(a,b,c,d){var e=new _.dV(c.j.layerId,b.layerId);c=(0,_.y)(m8,c,c,d,b.overlay.get("bounds").getCenter(),null);a=(0,_.y)(a.load,a,e,c);b.listener=_.N.addListener(b.overlay,"click",a)},m8=function(a,b,c,d,e){if(!e.infoWindowHtml){b=_.Zn("div");b.setAttribute("style","font-family: Roboto,Arial,sans-serif; font-size: small");if(e.info_window_html)_.vy(b,
e.info_window_html);else if(e.name||e.description){if(e.name){var f=_.Zn("div",b);f.setAttribute("style","font-weight: 500; font-size: medium; margin-bottom: 0em");_.Un(e.name,f)}e.description&&(f=_.Zn("div",b),_.vy(f,e.description))}else b=null;f="";b&&(f=document.createElement("div"),f.appendChild(b),f=f.innerHTML);e.infoWindowHtml=f}_.N.trigger(a,"click",{latLng:c,pixelOffset:d,featureData:e});_.go("Lk","-i",e)},uga=function(a,b,c,d,e,f){m8(a,b,d,e,f)},rga=function(a,b){if(b&&a&&0==b.getStatus()){for(var c=
[],d=[],e={},f=0;f<_.Jc(b,5);++f){var g=new S7(_.Pl(b,5,f));if(_.bl(g,5))g={sd:new R7(g.T[5])},d.push(g);else if(_.bl(g,4)){var h=n8(new _.Sm((new M7(g.T[4])).T[1]));h=new _.lg((new L7((new M7(g.T[4])).T[0])).getUrl(),h);c.push({overlay:h,layerId:g.getId()})}}g=_.F(b,1);h=n8(b.getDefaultViewport());f=new T7(b.T[3]);var k=new J7(f.T[3]);k={name:_.F(f,0),description:_.F(f,1),snippet:_.F(f,2),author:{name:_.F(k,0),email:_.F(k,2),uri:_.F(k,1)},hasScreenOverlays:!1};k.hasScreenOverlays=!!d.length;a:{for(l in _.Mk)if(_.Cc(b,
6)==wga[l]){var l=_.Mk[l];break a}l="UNKNOWN"}for(f=0;f<_.Jc(b,9);++f){var m=new _.yV(_.Pl(b,9,f));e[m.getKey()]=m.Eb()}for(f=0;f<_.Jc(b,7);++f)m=new _.yV(_.Pl(b,7,f)),e[m.getKey()]=m.Eb();a(g,h,k,l,d,c,e)}},o8=function(a){var b=a.__gm.screenOverlays;b||(b=new _.Oe,a.__gm.screenOverlays=b,(new h8(new pga,b)).bindTo("innerContainer",a.__gm));return b},k8=function(a,b){if(a.g){b=o8(b);for(var c=0;c<a.g.length;++c)b.remove(a.g[c])}},j8=function(a,b){if(a.g){b=o8(b);for(var c=a.g.length-1;0<=c;--c)_.Pe(b,
a.g[c])}},n8=function(a){var b=new _.L(_.Dc(new _.Pm(a.T[1]),0),_.Dc(new _.Pm(a.T[1]),1));a=new _.L(_.Dc(new _.Pm(a.T[0]),0),_.Dc(new _.Pm(a.T[0]),1));return new _.Td(a,b)},p8=_.n();_.A(J7,_.C);var q8;_.A(K7,_.C);_.A(L7,_.C);L7.prototype.getUrl=function(){return _.F(this,0)};L7.prototype.setUrl=function(a){this.T[0]=a};_.A(M7,_.C);_.A(N7,_.C);N7.prototype.Eb=function(){return _.Dc(this,0)};_.A(O7,_.C);O7.prototype.Xa=function(){return new N7(this.T[1])};_.A(P7,_.C);P7.prototype.Rc=function(){return new O7(this.T[0])};P7.prototype.Sc=function(){return new O7(this.T[1])};_.A(Q7,_.C);Q7.prototype.Rc=function(){return new N7(this.T[0])};Q7.prototype.Sc=function(){return new N7(this.T[1])};_.A(R7,_.C);R7.prototype.Xa=function(){return new P7(this.T[3])};_.A(S7,_.C);S7.prototype.getId=function(){return _.F(this,0)};_.A(T7,_.C);_.A(U7,_.C);U7.prototype.getUrl=function(){return _.F(this,0)};U7.prototype.setUrl=function(a){this.T[0]=a};var wga={UNKNOWN:0,OK:1,INVALID_REQUEST:2,DOCUMENT_NOT_FOUND:3,FETCH_ERROR:4,INVALID_DOCUMENT:5,DOCUMENT_TOO_LARGE:6,LIMITS_EXCEEDED:7,INTERNAL_ERROR:8,TIMED_OUT:9,ap:10};_.A(V7,_.C);V7.prototype.getStatus=function(){return _.Cc(this,0,-1)};V7.prototype.getDefaultViewport=function(){return new _.Sm(this.T[4])};W7.prototype.load=function(a,b){var c=new U7;c.setUrl(a);a=_.Jh.g(c.T,"s3i");c=(0,_.y)(this.j,this,b);b=(0,_.y)(this.i,this,b);this.g(a,c,b)};W7.prototype.i=function(a){a(null)};W7.prototype.j=function(a,b){b=new V7(b);a(b)};X7.prototype.load=function(a,b){this.i++;b=_.dy((0,_.y)(this.o,this,b));this.j.load(a,b)};X7.prototype.o=function(a,b){this.g.push((0,_.y)(a,null,b));this.i--;if(0==this.i){for(a=0;a<this.g.length;++a)this.g[a]();this.g=[]}};_.A(Z7,_.O);Z7.prototype.projection_changed=function(){Y7(this)};Z7.prototype.bounds_changed=function(){Y7(this)};Z7.prototype.projectionBounds_changed=function(){_.Uh(this.Ja)};Z7.prototype.mapBounds_changed=function(){_.Uh(this.Ja)};_.A(a8,_.O);a8.prototype.changed=function(a){"bounds"!=a&&"projection"!=a||_.Uh(this.Ja)};a8.prototype.j=function(){this.g.forEach(function(a){a.km&&this.remove(a)})};_.A(c8,_.O);c8.prototype.opacity_changed=function(){var a=b8(this);this.g.forEach(function(b){_.Iy(b.node,a)})};c8.prototype.W=function(a){var b=b8(this);this.o(b,a)};c8.prototype.o=function(a,b){var c=b.node=_.$D(this.V,this.j,b.j,b.i,_.Yj,b.scaledSize);c=b.g=new _.gn(this.j,10,{image:c,bounds:b.o,size:b.i});this.i.lb(c);_.Iy(b.node,a)};c8.prototype.H=function(a){a.node&&(a.g&&this.i&&this.i.xe(a.g),a.node=null)};d8.prototype.load=function(a,b){var c=new K7;c.T[0]=a.layerId;c.T[1]=a.g+"";if(a.parameters)for(var d in a.parameters){var e=new _.yV(_.Hc(c,2));e.T[0]=d;e.T[1]=a.parameters[d]}a=_.Jh;q8||(q8={$:"ssM",ka:["ss"]});c=a.g(c.T,q8);this.g(c,b,b);return c};d8.prototype.cancel=function(){throw Error("Not implemented");};_.A(h8,_.O);_.r=h8.prototype;_.r.innerContainer_changed=function(){var a=this.g;this.g=this.get("innerContainer");this.j&&(_.N.removeListener(this.j),delete this.j);a&&this.i.forEach((0,_.y)(this.ii,this));this.g&&(this.j=_.N.bind(this.g,"resize",this,this.Pn),this.i.forEach((0,_.y)(this.hi,this)))};_.r.Pn=function(){var a=this;_.dy(function(){a.i.forEach((0,_.y)(a.ri,a))})()};
_.r.hi=function(a){if(this.g){var b=_.Ah(this.g);b=_.Zn("div",this.g,new _.I(b.width,b.height));_.Xn(b);_.$n(b,2);a.Ma=b;b=_.Zn("div",a.Ma,new _.I(0,0),null,!0);_.Xn(b);a.g=b;b={g:(0,_.y)(this.Mk,this,a)};a.image=_.ZD((new L7(a.sd.T[0])).getUrl(),a.Ma,null,null,b)}};_.r.ii=function(a){a.Ma&&_.Hn(a.Ma);a.g&&_.Hn(a.g);a.image&&_.Hn(a.image);a.Ma=null;a.image=null;a.g=null};_.r.Mk=function(a,b,c){a.Ma&&c&&(a.image=c,_.Xn(c),this.ri(a))};
_.r.ri=function(a){var b=_.Ah(this.g);var c=_.Ah(a.image);var d=f8(a.sd.Xa().Rc(),b.width,c.width),e=f8(a.sd.Xa().Sc(),b.height,c.height);e=g8(a.sd.Xa().Rc(),c.width,b.width,e);c=g8(a.sd.Xa().Sc(),c.height,b.height,d);c=new _.K(e,c);d=e8((new Q7(a.sd.T[2])).Rc(),b.width);e=e8((new Q7(a.sd.T[2])).Sc(),b.height);e=b.height-e-c.height;b=e8((new Q7(a.sd.T[1])).Rc(),c.width);var f=e8((new Q7(a.sd.T[1])).Sc(),c.height);_.Yn(a.Ma,new _.I(d-b,e+f));_.zh(a.Ma,c);_.zh(a.image,c);_.zh(a.g,c)};_.A(i8,_.O);i8.prototype.remove=function(){this.g.close();_.N.removeListener(this.i);delete this.i};i8.prototype.changed=function(){this.g.close()};i8.prototype.suppressInfoWindows_changed=function(){this.get("suppressInfoWindows")&&this.g.close()};i8.prototype.j=function(a){if(a){var b=this.get("map");if(b&&!this.get("suppressInfoWindows")){var c=a.featureData;if(c=c&&c.infoWindowHtml||a.infoWindowHtml)this.g.setOptions({pixelOffset:a.pixelOffset,position:a.latLng,content:c}),this.g.open(b)}}};p8.prototype.i=function(a){var b=a.ma,c=a.ma=a.get("map"),d=l8(a);if(b){a.W=!1;a.j&&_.MW.Aj(a.j,b);a.H&&(_.N.removeListener(a.H),delete a.H);k8(a,b);delete a.screenOverlays_changed;if(a.i)for(b=0;b<a.i.length;++b){var e=a.i[b];e.overlay.set("map",null);e.listener&&(_.N.removeListener(e.listener),delete e.listener)}a.o&&(a.o.remove(),a.o.unbindAll(),delete a.o);_.ho("Lk","-p",a)}c&&tga(a,c,d)};
p8.prototype.g=function(a){var b=a.get("map"),c=b&&b.__gm;a.j&&a.j.ha.remove(a);(a.j=c)&&_.Pe(c.ha,a);if(c&&!c.Pa){var d=nga(c.ha,c);c.Pa=d;c.j.register(d)}a.g&&(a.g.set("bounds",null),a.i.unbindAll(),a.g.unbindAll(),a.o.then(function(l){l.unbindAll()}),delete a.i,delete a.g,delete a.o,_.ho("Og","-p",a));if(b){var e=a.get("bounds"),f=a.get("url"),g=c.get("panes").overlayLayer,h=new _.Oe;a.H=h;d=new Z7;d.bindTo("mapBounds",b,"bounds");d.bindTo("projection",b);d.bindTo("zoom",b);d.set("bounds",e);a.i=
d;var k=new a8(e,h);k.bindTo("zoom",b);k.bindTo("projection",b);k.bindTo("bounds",d,"croppedBounds");a.g=k;a.o=c.g.then(function(l){l=new c8(f,g,h,l.nb);c&&l.bindTo("offset",c);l.bindTo("zoom",b);c&&l.bindTo("center",c,"projectionCenterQ");l.bindTo("projection",b);l.bindTo("opacity",a);l.set("latLngBounds",e);return l});_.Oi(b,"Og");_.go("Og","-p",a);_.N.addListener(a,"click",function(){_.go("Og","-i",a)})}};_.wf("kml",new p8);});
