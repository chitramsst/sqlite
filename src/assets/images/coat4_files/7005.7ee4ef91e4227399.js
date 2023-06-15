"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7005,30046,87565],{17114:function(t,e,n){n.d(e,{u:function(){return h}});var o=n(87394),a=n(92228),i=n(52322),r=n(72262),c=n(56219),s=n(2784),u=n(95193),l=n(8740);function d(){var t=(0,a.Z)(["\n0% {\n  opacity: 0;\n  transform: scale(0);\n}\n100% {\n  opacity: 1;\n  transform: scale(1);\n}\n"]);return d=function(){return t},t}function m(){var t=(0,a.Z)(["\n0% {\n  opacity: 1;\n  transform: translateX(0) scale(1)\n}\n100% {\n  opacity: 0;\n  transform: translateX(-40px) scale(0) \n}\n"]);return m=function(){return t},t}var p=(0,u.F4)(d()),f=(0,u.F4)(m()),h=function(){var t=(0,r.r)(),e=t.animationType,n=t.mediaItem,a=t.timeout/3,u=(0,l.ZL)()(function(t){var e=t.transitions,n=t.tokens;return{root:{position:"absolute",width:n.spacing.xl,top:0,left:n.spacing.xl,borderRadius:n.border.radius.l,objectFit:"fill"},containerEnter:{animation:"".concat(p," ").concat(a,"ms ").concat(e.easing.easeIn," forwards")},containerExit:{animation:"".concat(f," ").concat(a,"ms ").concat(e.easing.easeOut," forwards"),animationDelay:"".concat(a,"ms")}}})(),d=u.classes,m=u.cx,h=(0,o.Z)((0,s.useState)(d.containerEnter),2),x=h[0],g=h[1];if((0,s.useEffect)(function(){return"catalog"===e&&n&&setTimeout(function(){g(d.containerExit)},a),g(d.containerEnter)},[d.containerExit,d.containerEnter,a,e,n]),"catalog"!==e||!n||!(0,c.YN)(n))return null;var v=(0,c.Qs)(n);return(0,i.jsx)("img",{"data-automation":"AddAssetToCatalogAnimation_image",className:m(d.root,x),src:null!=v?v:"",alt:"preview"})}},88127:function(t,e,n){n.d(e,{H:function(){return c}});var o=n(52322),a=n(62197),i=n(2784),r=(0,n(8740).ZL)()(function(t){var e=t.tokens,n=e.spacing,o=e.font;return{root:{padding:"0 ".concat(n.xs),fontSize:o.size.xs,fontFamily:"".concat(o.family.primary,", Arial"),lineHeight:o.lineHeight.l,width:"100%",textAlign:"center"}}}),c=(0,i.memo)(function(t){var e=t.text,n=r().classes;return(0,o.jsx)(a.Z,{className:n.root,children:e})});c.displayName="TabLabel"},7005:function(t,e,n){n.d(e,{z:function(){return K}});var o=n(47842),a=n(70865),i=n(96670),r=n(87394),c=n(50930),s=n(52322),u=n(31373),l=n(65992),d=n(67550),m=n(77348),p=n(25824),f=n(88127),h=n(33301),x=n(53881),g=n(9823),v=n(98779),b=n(43110),y=n(37121),k=n(62512),w=n(92405),j=n(63112),Z=n(1119),L=n(57613),C=n(73829),H=n(75855),_=n(13288),N=n(30046),M=n(12820),B=n(92784),z=n(87565),I=n(12281),T=n(31037),S=n(75),V=n(27764),E=n(5632),R=n(59877),A=n(2784),O=n(17114),D=n(46452),U=n(75053),q=n(13011),W=n(58287),P=(0,n(8740).ZL)()(function(){var t,e,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.zIndex,r=a.breakpoints,c=a.palette,s=a.spacing,u=a.tokens,l=u.spacing,d=u.font,m=u.size,p=u.zIndex,f=arguments.length>1?arguments[1]:void 0,h=f.isBrandSstk,x=f.isDrawerOpen,g=f.isPageScrollable,v=f.primaryNavItemCount,b=f.secondaryNavItemCount,y=f.pushBottomUp,k=f.showHeaderBanner,w=(0,W.C)(s(4))+(0,W.C)(m.density.base),j=(0,W.C)(s(5))+(0,W.C)(s(4))+(v+b)*w+(0,W.C)(s(5)),Z=q.P7+(k?U.ep:0)+(0,W.C)(s(3));return{utilityBar:(t={borderTop:h?"1px solid ".concat(c.border1Color):"none",zIndex:p.fixed[10]+1,position:"fixed",bottom:0,width:"100vw",maxWidth:"100vw",padding:l.s,height:D.e$},(0,o.Z)(t,r.up("md"),(0,o.Z)({borderRight:"1px solid ".concat(c.border1Color),width:D.WT,minWidth:D.WT,position:"sticky",top:-1,height:g?"100vh":"calc(100vh - ".concat(q.P7,"px)"),padding:"".concat(l.m," 0 0"),minHeight:j},"@media screen and (max-height: ".concat(j,"px)"),{height:"auto"})),(0,o.Z)(t,r.down("sm"),{"&":{borderTop:"1px solid ".concat(c.border1Color," !important"),zIndex:x?i.modal+1:p.fixed[10]+1}}),t),secondaryList:(e={paddingTop:l.base,paddingBottom:y?"110px":l.m,borderTop:"1px solid ".concat(c.border1Color),width:D.WT,position:"fixed",bottom:"0",left:"0",backgroundColor:"rgba(150, 150, 150, 0.06)"},(0,o.Z)(e,"@media screen and (max-height: ".concat(j+Z+(y?50:0),"px)"),{position:"relative",height:"calc(100% - ".concat(v*w,"px)")}),(0,o.Z)(e,r.down("md"),{display:"none"}),e),tab:(n={padding:0,opacity:1,width:D.WT,textTransform:"none",color:c.text.secondary,display:"flex",flexDirection:"column",minHeight:m.density.base,minWidth:m.density.base,"&:hover":{color:c.text.primary},"& p":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},(0,o.Z)(n,r.down("md"),{width:D.J8,"& p":{padding:0}}),(0,o.Z)(n,r.between("sm","md"),{margin:"0 ".concat(l.s)}),(0,o.Z)(n,"borderBottom","3px solid transparent"),(0,o.Z)(n,r.up("md"),{borderBottom:"none",borderLeft:"3px solid transparent"}),n),desktop:(0,o.Z)({},r.up("md"),{width:"100%",marginBottom:l.base}),mobileMenuTrigger:(0,o.Z)({},r.up("md"),{"&&":{display:"none"}}),icon:{"&&&":{marginBottom:0}},tabLabel:{padding:"0 ".concat(l.xs),fontSize:d.size.xs,fontFamily:"".concat(d.family.primary,", Arial"),lineHeight:d.lineHeight.l,width:"100%",textAlign:"center"},selected:{"&&":(0,o.Z)({color:c.text.primary,borderBottom:"3px solid ".concat(c.text.primary),borderLeft:"none",position:"relative"},r.up("md"),{borderBottom:"none",borderLeft:"3px solid ".concat(c.text.primary)})}}}),F=/^(\/_shutterstock)?\/?(video|music|images)?\/?$/,G=(0,T.NJ)()[0],Q=[G,"/generate"],X=["/catalog","/create","/planning","/account/plans","/predict"].concat((0,c.Z)(Q)),$=(0,I.g)(function(t){return(0,s.jsx)(u.Z,(0,i.Z)((0,a.Z)({},t),{role:"tab"}))}),Y=(0,l.ZP)(function(t){return(0,s.jsx)(d.Z,(0,i.Z)((0,a.Z)({},t),{role:"tablist"}))})(function(t){var e,n=t.theme,a=n.breakpoints,i=n.spacing;return e={display:"flex"},(0,o.Z)(e,a.down("sm"),{padding:i(0,3),justifyContent:"space-between"}),(0,o.Z)(e,a.between("sm","md"),{justifyContent:"center"}),(0,o.Z)(e,a.up("md"),{flexDirection:"column"}),e}),J=function(t,e,n){if(n)return"menu";if(F.test(t))return"home";var o=e?"/".concat(t.split("/")[2]):"/".concat(t.split("/")[1]);return!!X.includes(o)&&o},K=function(t){var e=t.className,n=t.showHeaderBanner,o=(0,R.$G)(S.aGO).t,a=(0,v.d)(),i=(0,x.n)().isMobileServer,c=(0,E.useRouter)()||{},u=c.asPath,l=c.pathname,I=void 0===l?"":l,T=(0,r.Z)((0,j.O)("menuDrawerOpen"),2),U=T[0],q=T[1],W=(0,k.U)().userCanViewPortfolio,F=(0,b.B)(),X=!((0,V.s4)({asPath:u,pathname:I})&&F),K=(0,y.O)().tosStatus,tt=(0,g.D)(),te=tt.isBrandSstk,tn=tt.isBrandEnterprise,to=J(I,te,U),ta=((0,w.p)(h._v,void 0,!1)||{}).enabled,ti=!F||ta||te,tr=(0,w.p)(h.Si,!1,!1,!0),tc=(0,w.p)(h.cR,!1),ts=(0,w.p)(h.O8,void 0,!1,!0),tu=te||ts,tl=(tn?tc:tr)&&!(a||i),td=F&&!W,tm=P({isDrawerOpen:!!U,isPageScrollable:X,primaryNavItemCount:3+[ti,tl,tu].filter(Boolean).length,secondaryNavItemCount:1+[W,td].filter(Boolean).length,isBrandSstk:te,pushBottomUp:!K,showHeaderBanner:n}),tp=tm.classes,tf=tm.cx,th=(0,A.useCallback)(function(){q(!1)},[]),tx="home"===to,tg=(0,A.useMemo)(function(){return(0,s.jsxs)($,{component:p.r,href:"/",onClick:th,"data-automation":"".concat(D.ub,"_home"),"data-optimize":"UtilityBar_HomeTab",className:tf(tp.tab,tp.desktop,tx&&tp.selected),clickTrack:"utilityBar.home","aria-selected":String(tx),children:[(0,s.jsx)(Z.S,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("site-footer:home")})]})},[tp.desktop,tp.icon,tp.selected,tp.tab,tf,th,tx,o]),tv=Q.includes(String(to)),tb=(0,A.useMemo)(function(){return tu&&(0,s.jsxs)($,{component:p.r,onClick:th,href:G,className:tf(tp.tab,tp.desktop,tv&&tp.selected),clickTrack:"utilityBar.generate","data-automation":"".concat(D.ub,"_generate"),"aria-selected":String(tv),children:[(0,s.jsx)(L.C,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("generate_button")})]})},[tp.desktop,tp.icon,tp.selected,tp.tab,tf,tv,th,tu,o]),ty="/catalog"===to,tk=(0,A.useMemo)(function(){return(0,s.jsxs)(d.Z,{position:"relative",children:[(0,s.jsx)(O.u,{}),(0,s.jsxs)($,{component:p.r,onClick:th,href:"/catalog",value:"/catalog","data-automation":"".concat(D.ub,"_catalog"),"data-optimize":"UtilityBar_CatalogTab",className:tf(tp.tab,tp.desktop,ty&&tp.selected),clickTrack:"utilityBar.catalog","aria-selected":String(ty),children:[(0,s.jsx)(C.g,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("catalog")})]})]})},[tp.desktop,tp.icon,tp.selected,tp.tab,tf,th,ty,o]),tw="/create"===to,tj=(0,A.useMemo)(function(){return tl&&(0,s.jsxs)($,{component:p.r,onClick:th,href:"/create/home","data-automation":"".concat(D.ub,"_create"),className:tf(tp.tab,tp.desktop,tw&&tp.selected),clickTrack:"utilityBar.create","data-tour-stop":"utility-bar-create","aria-selected":String(tw),children:[(0,s.jsx)(H.M,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("create")})]})},[tp.desktop,tp.icon,tp.selected,tp.tab,tf,th,tw,tl,o]),tZ="/predict"===to,tL=(0,A.useMemo)(function(){return ti&&(0,s.jsxs)($,{component:p.r,onClick:th,href:"/predict",className:tf(tp.tab,tp.desktop,tZ&&tp.selected),clickTrack:"utilityBar.predict","data-automation":"".concat(D.ub,"_predict"),"aria-selected":String(tZ),children:[(0,s.jsx)(_.R,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("predict")})]})},[tp.desktop,tp.icon,tp.selected,tp.tab,tf,th,tZ,ti,o]),tC="/planning"===to,tH=(0,A.useMemo)(function(){return(0,s.jsxs)($,{component:p.r,onClick:th,href:"/planning",className:tf(tp.tab,tp.desktop,tC&&tp.selected),clickTrack:"utilityBar.planner","data-automation":"".concat(D.ub,"_planning"),"aria-selected":String(tC),children:[(0,s.jsx)(N.Calendar,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("plan")})]})},[tp.desktop,tp.icon,tp.selected,tp.tab,tf,th,tC,o]),t_=(0,A.useMemo)(function(){return(0,s.jsxs)($,{onClick:function(){return q(!U)},clickTrack:"utilityBar.mobileMenu","data-automation":"".concat(D.ub,"_menu"),className:tf(tp.tab,tp.mobileMenuTrigger),children:[(0,s.jsx)(M.v,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("site-header:menu")})]})},[tp.icon,tp.mobileMenuTrigger,tp.tab,tf,U,o]),tN=(0,A.useMemo)(function(){return td&&(0,s.jsxs)($,{onClick:th,component:p.r,href:"/account/profile",value:"/profile","data-automation":"".concat(D.ub,"_profile"),className:tf(tp.tab,tp.desktop),clickTrack:"utilityBar.profile",children:[(0,s.jsx)(B.B,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("account")})]})},[tp.desktop,tp.icon,tp.tab,tf,th,td,o]),tM=(0,A.useMemo)(function(){return W&&(0,s.jsxs)($,{onClick:th,component:p.r,href:"/account/portfolio",value:"/portfolio","data-automation":"".concat(D.ub,"_portfolio"),clickTrack:"utilityBar.portfolio",className:tf(tp.tab,tp.desktop),children:[(0,s.jsx)(B.B,{className:tp.icon}),(0,s.jsx)(f.H,{text:o("ent:menu_item_portfolio")})]})},[tp.desktop,tp.icon,tp.tab,tf,th,o,W]),tB=(0,A.useMemo)(function(){return(0,s.jsxs)($,{"data-automation":"".concat(D.ub,"_help"),"data-optimize":"UtilityBar_HelpTab",className:tf(tp.tab,tp.desktop),clickTrack:"utilityBar.help",component:tn?"div":"a",target:"_blank",href:tn?void 0:"/help",onClick:th,children:[(0,s.jsx)(z.Question,{className:tp.icon}),te&&(0,s.jsx)(f.H,{text:o("site-footer:help")}),tn&&(0,s.jsx)(m.U,{label:o("site-footer:help"),isUtilityBar:!0,clickTrack:"utilityBar.help"})]})},[tp.desktop,tp.icon,tp.tab,tf,tn,te,th,o]);return(0,s.jsxs)("div",{className:tf(e,tp.utilityBar,D.CD),children:[(0,s.jsxs)(Y,{id:"primaryNavItems","data-automation":"".concat(D.ub,"_primary-nav"),children:[tg,tb,tk,tj,tL,tH,t_]}),(0,s.jsxs)(Y,{className:tp.secondaryList,children:[tN,tM,tB]})]})}},45089:function(t,e,n){n.d(e,{AZ:function(){return m},L0:function(){return h},VT:function(){return p},bj:function(){return L},c3:function(){return g},dh:function(){return x},kR:function(){return j},mk:function(){return w},n1:function(){return Z},nj:function(){return f},q8:function(){return v},ry:function(){return C},vA:function(){return H},yw:function(){return b}});var o,a=n(47842),i=n(39232),r=n(57631),c=n(68702),s=n(95693),u=n(75855),l=n(44015),d=n(75),m={IMAGE:i.Y_,VIDEO:i.FM,AUDIO:i.jr,ELEMENT:i.D8,SFX:i.tn},p="editorial-image",f="editorial-video",h={DESIGN:i.bz},x=(o={},(0,a.Z)(o,i.Y_,r.AllImages),(0,a.Z)(o,i.jr,c.Music),(0,a.Z)(o,i.FM,s.Video),(0,a.Z)(o,i.D8,s.Video),(0,a.Z)(o,i.bz,u.$),(0,a.Z)(o,i.tn,l.SoundEffects),o),g={lowres:{name:"low",quality:1,label:"common:resolutions_low"},lowres_mpeg:{name:"low",quality:1,label:"common:resolutions_low"},lowres_original:{name:"low",quality:1,label:"common:resolutions_low"},low:{name:"low",quality:1,label:"common:resolutions_low"},sd:{name:"sd",quality:2,label:"common:resolutions_sd"},sd_mpeg:{name:"sd",quality:2,label:"common:resolutions_sd"},sd_original:{name:"sd",quality:2,label:"common:resolutions_sd"},nonhd:{name:"sd",quality:2,label:"common:resolutions_sd"},hd:{name:"hd",quality:3,label:"common:resolutions_hd"},hd_mpeg:{name:"hd",quality:3,label:"common:resolutions_hd"},hd_original:{name:"hd",quality:3,label:"common:resolutions_hd"},"4k":{name:"4k",quality:4,label:"common:resolutions_4k"},ultrahd4k:{name:"4k",quality:4,label:"common:resolutions_4k"},ultrahd4k_original:{name:"4k",quality:4,label:"common:resolutions_4k"}},v={comped:"".concat(d.aRr,"::workspaces:comped"),licensed:"".concat(d.aRr,"::workspaces:licensed"),saved:"".concat(d.aRr,"::workspaces:saved"),uploaded:"".concat(d.aRr,"::workspaces:uploaded"),"in-design":"".concat(d.aRr,"::workspaces:used_in_a_design")},b="-createdAt",y={buckets:[]},k={},w={aggregations:{assetType:k,assetStatus:k,targetChannel:k,targetGeography:k,usageRights:k,licenseName:y,licensedBy:y},pagination:{size:0,number:0,totalPages:0,totalRecords:0},sort:"name"},j={data:[],meta:w},Z={pagination:{size:16,number:0,totalPages:0,totalRecords:0},sort:"-createdAt"},L={data:[],meta:Z},C={data:void 0,meta:void 0},H=4e3},72262:function(t,e,n){n.d(e,{r:function(){return i}});var o=n(2784),a=n(76023),i=function(){return(0,o.useContext)(a.s)}},37121:function(t,e,n){n.d(e,{O:function(){return d}});var o=n(98788),a=n(5163),i=n(81740),r=n(52884),c=n(43110),s=n(67661),u=n(2784),l=n(3255),d=function(){var t=(0,i.e5)().formattedUrl,e=(0,c.B)(),n=(0,l.ZP)(e?t:null,function(t){return s.uS.get(t).then(function(t){var e=t.data;return!!(void 0===e?{}:e).agreedTime})},{dedupingInterval:r.no}).data;return{onAcceptTos:(0,u.useCallback)((0,o.Z)(function(){return(0,a.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,s.uS.post(t)];case 1:return e.sent(),[4,(0,l.JG)(t)];case 2:case 3:return e.sent(),[3,4];case 4:return[2]}})}),[t]),tosStatus:void 0===n||n}}},57613:function(t,e,n){n.d(e,{C:function(){return r}});var o=n(70865),a=n(52322),i=(0,n(6620).Z)((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"M25.0039 0.00837148L25.0039 4.06302L25.0039 7.29395L23.0446 7.29395L23.0446 3.55119L23.0446 1.96772L21.4931 1.96772L19.3978 1.96772L17.5904 1.96772L17.5904 0.00837157L17.8623 0.00837156L19.8456 0.00837154L21.8849 0.00837152L23.8523 0.00837149L25.0039 0.00837148Z"}),(0,a.jsx)("path",{d:"M25.0039 12.2999L25.0039 13.7154C25.0039 16.5065 23.0526 18.8417 20.4294 19.4415C19.8296 22.0566 17.5024 24 14.7033 24L0.995911 24L0.995911 18.7617L0.995911 16.7144L0.995911 10.3006C0.995911 9.62879 1.11587 8.98101 1.3318 8.37321C1.54773 7.71743 1.88361 7.11763 2.30747 6.5978C2.77132 6.02199 3.34713 5.54215 3.99491 5.16628C4.48275 4.89437 5.01057 4.68644 5.57038 4.55848C6.17019 1.94335 8.49741 6.69445e-07 11.2965 6.36066e-07L12.584 6.20712e-07L12.584 1.95935L11.2965 1.95935C9.64903 1.95935 8.24149 2.97501 7.66569 4.41453L20.5814 4.41453L20.5814 17.3462C22.0289 16.7704 23.0446 15.3629 23.0446 13.7154L23.0446 12.2999L25.0039 12.2999ZM7.38578 13.4915C11.9283 13.2196 15.9509 10.9883 18.622 7.62946L18.622 6.38987L17.0546 6.38987C14.7513 9.27691 11.2965 11.2123 7.38578 11.4762L7.38578 13.4915V13.4915ZM7.38578 17.4662C11.6244 17.2742 15.5111 15.7068 18.622 13.2196L18.622 10.5485C15.679 13.3955 11.7443 15.2189 7.38578 15.4588L7.38578 17.4662V17.4662ZM15.0872 17.6341L18.622 17.6341L18.622 15.6668C17.5184 16.4265 16.3348 17.0983 15.0872 17.6341ZM2.95526 22.0487L14.7113 22.0487C16.3588 22.0487 17.7663 21.033 18.3421 19.5935L5.42643 19.5935L5.42643 19.4255L5.42643 17.4662L5.42643 15.4508L5.42643 13.4915L5.42643 11.4762L5.42643 9.50883L5.42643 7.4935L5.42643 6.66978C5.03456 6.82972 4.67468 7.04565 4.36279 7.31756C3.81097 7.78141 3.39511 8.38121 3.15519 9.09297C3.02723 9.47684 2.96325 9.8927 2.96325 10.3166L2.96325 22.0407L2.95526 22.0487ZM7.37778 9.51683C10.0809 9.2929 12.5281 8.14928 14.3834 6.38187L10.9926 6.38187C9.89694 6.96568 8.67335 7.35755 7.36979 7.48551L7.36979 9.50883L7.37778 9.51683Z"})]}),"AiGenerator.svg"),r=function(t){return(0,a.jsx)(i,(0,o.Z)({viewBox:"0 0 26 24"},t))}},30046:function(t,e,n){n.r(e),n.d(e,{Calendar:function(){return u}});var o=n(70865),a=n(52322),i=n(6620),r=n(5007),c=n(2784),s=(0,i.Z)((0,a.jsx)("path",{d:"M18 3c0-.6-.5-1-1-1s-1 .4-1 1H8c0-.6-.5-1-1-1s-1 .4-1 1H2v18h15c2.8 0 5-2.2 5-5V3h-4zm-.9 15.9v-1.8h2.6c-.4 1-1.5 1.7-2.6 1.8zm2.8-4H15v3.9H4.1V11h15.8v3.9zm0-5.9H4.1V5.1h1.8v.8C5.9 6.5 6.4 7 7 7s1.1-.5 1.1-1.1v-.8H16v.8c-.1.6.4 1.1 1 1.1s1.1-.5 1.1-1.1v-.8h1.8V9z"}),"Calendar.svg"),u=(0,c.forwardRef)(function(t,e){return(0,a.jsx)(s,(0,o.Z)({viewBox:"0 0 24 24",ref:e},t))});u.displayName="CalendarIcon",u.muiName=r.Z.muiName},73829:function(t,e,n){n.d(e,{g:function(){return s}});var o=n(70865),a=n(52322),i=n(6620),r=n(5007),c=(0,i.Z)((0,a.jsxs)("g",{children:[(0,a.jsx)("path",{d:"M19.8,3H4.2L2,12.8L2,21h20v-8L19.8,3z M18.2,5l1.6,7.1H4.2L5.8,5H18.2z M4,19v-5h16v5H4z"}),(0,a.jsx)("rect",{x:"7",y:"9",width:"10",height:"2"}),(0,a.jsx)("rect",{x:"8",y:"6",width:"8",height:"2"})]}),"Catalog.svg"),s=function(t){return(0,a.jsx)(c,(0,o.Z)({width:"24",height:"24",viewBox:"0 0 24 24"},t))};s.muiName=r.Z.muiName},92784:function(t,e,n){n.d(e,{B:function(){return r}});var o=n(70865),a=n(52322),i=(0,n(6620).Z)((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"M8 9.333h2.667V12H8V9.333z"}),(0,a.jsx)("path",{d:"M2.667 2.667v26.667H24c2.946 0 5.333-2.388 5.333-5.333V2.668zm24 21.333c0 1.473-1.194 2.667-2.667 2.667H5.333V5.334h21.333z"}),(0,a.jsx)("path",{d:"M13.333 9.333H24V12H13.333V9.333zM8 14.667h2.667v2.667H8v-2.667zM13.333 14.667H24v2.667H13.333v-2.667zM8 20h2.667v2.667H8V20zM13.333 20H24v2.667H13.333V20z"})]}),"Document.svg"),r=function(t){return(0,a.jsx)(i,(0,o.Z)({viewBox:"0 0 32 32"},t))}},1119:function(t,e,n){n.d(e,{S:function(){return u}});var o=n(70865),a=n(52322),i=n(6620),r=n(5007),c=n(2784),s=(0,i.Z)((0,a.jsx)("path",{d:"M16 3.333l-12 12V30h10.667V19.333h2.667V30h10.667V15.333l-12-12zm9.333 24H20V16.666h-8v10.667H6.667V16.4L16 7.067l9.333 9.333v10.933z"}),"Home.svg"),u=(0,c.forwardRef)(function(t,e){return(0,a.jsx)(s,(0,o.Z)({width:"32",height:"32",viewBox:"0 0 32 32",ref:e},t))});u.displayName="HomeIcon",u.muiName=r.Z.muiName},12820:function(t,e,n){n.d(e,{v:function(){return u}});var o=n(70865),a=n(52322),i=n(6620),r=n(5007),c=n(2784),s=(0,i.Z)((0,a.jsx)("path",{d:"M5.333 15.333h21.333V18H5.333v-2.667zm0-6.666h21.333v2.667H5.333V8.667zm0 13.333h21.333v2.667H5.333V22z"}),"Menu.svg"),u=(0,c.forwardRef)(function(t,e){return(0,a.jsx)(s,(0,o.Z)({viewBox:"0 0 32 32",ref:e},t))});u.displayName="MenuIcon",u.muiName=r.Z.muiName},13288:function(t,e,n){n.d(e,{R:function(){return r}});var o=n(70865),a=n(52322),i=(0,n(6620).Z)((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2H2V18H16C17.1046 18 18 17.1046 18 16V2ZM0 0V20H16C18.2091 20 20 18.2091 20 16V0H0Z",stroke:"none"}),(0,a.jsx)("rect",{x:"11",y:"4",width:"5",height:"5",stroke:"none"}),(0,a.jsx)("rect",{x:"4",y:"4",width:"5",height:"5",stroke:"none"}),(0,a.jsx)("rect",{x:"11",y:"11",width:"5",height:"5",stroke:"none"})]}),"Predict.svg"),r=function(t){return(0,a.jsx)(i,(0,o.Z)({width:"24",height:"24",viewBox:"-2 0 24 24"},t))}},87565:function(t,e,n){n.r(e),n.d(e,{Question:function(){return r}});var o=n(70865),a=n(52322),i=(0,n(6620).Z)((0,a.jsx)("path",{d:"M16 8.667c-2.933 0-5.333 2.4-5.333 5.333h2.667c0-1.467 1.2-2.667 2.667-2.667s2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667h-1.333v4h2.667V19.2c2.267-.533 4-2.667 4-5.2 0-2.933-2.4-5.333-5.333-5.333zm-1.333 16h2.667V22h-2.667v2.667zM16 3.333c-7.333 0-13.333 6-13.333 13.333s6 13.333 13.333 13.333 13.333-6 13.333-13.333S23.333 3.333 16 3.333zm0 24c-5.867 0-10.667-4.8-10.667-10.667S10.133 5.999 16 5.999s10.667 4.8 10.667 10.667S21.867 27.333 16 27.333z"}),"Question.svg"),r=function(t){return(0,a.jsx)(i,(0,o.Z)({width:"32",height:"32",viewBox:"0 0 32 32"},t))}},56219:function(t,e,n){n.d(e,{$8:function(){return y},GI:function(){return b},Lj:function(){return p},Mz:function(){return j},Qs:function(){return L},WT:function(){return k},YN:function(){return d},aA:function(){return x},gS:function(){return m},ii:function(){return w},jO:function(){return g},sU:function(){return v},sX:function(){return Z},tK:function(){return f},tq:function(){return h}});var o=n(68827),a=n(45089),i=a.AZ.IMAGE,r=a.AZ.VIDEO,c=a.AZ.AUDIO,s=a.AZ.ELEMENT,u=a.AZ.SFX,l=a.L0.DESIGN,d=function(t){return t.type===i&&!t.isWithdrawn&&!t.isRexEditorial},m=function(t){return t.type===i&&!t.isWithdrawn&&!!t.isRexEditorial},p=function(t){return t.type===c&&!t.isWithdrawn&&!t.isRexEditorial},f=function(t){return t.type===r&&!t.isWithdrawn&&!t.isRexEditorial},h=function(t){return t.type===r&&!t.isWithdrawn&&!!t.isRexEditorial},x=function(t){return t.type===s&&!t.isWithdrawn},g=function(t){return t.type!==l&&t.isWithdrawn},v=function(t){return t.type===l},b=function(t){return t.type===u},y=function(t){return!t.isWithdrawn&&!!t.isRexEditorial},k=function(t,e,n){var o=t.t;return(v(e)||p(e)||b(e)||e.isUpload?null==e?void 0:e.title:n)||o("common:adjectives_untitled")},w=function(t){var e,n,a;return!!(null===(e=t.holding)||void 0===e?void 0:e.lastLicensedAt)||(null===(n=t.holding)||void 0===n?void 0:n.assetStatus.includes(o.O1))||(null===(a=t.holding)||void 0===a?void 0:a.assetStatus.includes(o.Th))},j=function(t){var e,n,a;return(null===(e=t.holding)||void 0===e?void 0:e.assetStatus)!==void 0&&(null===(n=t.holding)||void 0===n?void 0:null===(a=n.assetStatus)||void 0===a?void 0:a.includes(o.nQ))},Z=function(t){var e,n={assetType:t.mediaItem.type,aspect:null!==(e=t.mediaItem.aspect)&&void 0!==e?e:1,url:t.mediaItem.src||t.mediaItem.thumbnailUrl||""};return f(t.mediaItem)||h(t.mediaItem)?n.url=t.mediaItem.src:v(t.mediaItem)?n.url=t.mediaItem.thumbnailUrl||"":(d(t.mediaItem)||m(t.mediaItem))&&(n.url=t.mediaItem.src,n.aspect=t.mediaItem.aspect),n},L=function(t){return f(t)||h(t)?t.previewImageUrl:v(t)?t.thumbnailUrl:d(t)||m(t)?t.src:p(t)||b(t)?t.waveformPng:null}},92228:function(t,e,n){n.d(e,{Z:function(){return o}});function o(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}}}]);
//# sourceMappingURL=7005.7ee4ef91e4227399.js.map