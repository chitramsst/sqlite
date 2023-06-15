"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7695],{97005:function(e,t,n){n.d(t,{E:function(){return y}});var a=n(47842),s=n(70865),i=n(96670),o=n(26297),r=n(52322),c=n(67550),l=n(72841),u=n(47999),d=n(59481),p=n(66358),m=n(11164),f=n(9823),h=n(776),b=n(36888),x=(0,n(8740).ZL)()(function(e){var t,n=e.breakpoints,s=e.palette,i=e.tokens,o=i.spacing,r=i.fontSize;return{root:(t={color:s.info.main,display:"flex",marginTop:o.s},(0,a.Z)(t,n.up("sm"),{marginTop:o.base}),(0,a.Z)(t,"& > *:not(:first-of-type)",(0,a.Z)({marginLeft:o.s},n.up("md"),{marginLeft:o.base})),t),buttonWrapper:{display:"flex"},buttonProgress:{position:"absolute"},actionLabel:(0,a.Z)({},n.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,a.Z)({},n.down("md"),{fontSize:r.icon})},startIcon:(0,a.Z)({},n.down("md"),{margin:0})}}),g=function(e){var t=e.hasIcon,n=e.withActionLabel;return t&&n?"contained":n?"text":void 0},v=function(e){var t=e.Icon,n=e.withActionLabel,a=!!t;return{color:a?"primary":"inherit",variant:g({hasIcon:a,withActionLabel:n}),startIcon:n?t:void 0,size:n?"medium":"small"}},y=function(e){var t=e.classesProps,n=e.buttons,g=e.withActionLabel,y=e.isTemplateAsset,j=(0,b.bo)().classes,Z=x(),w=Z.classes,L=Z.cx,k=g?u.z:d.h,C=(0,f.D)(),P=C.isBrandSstk,_=C.isBrandEnterprise,I=(0,m.m)().insightType;return(0,r.jsx)(h.Mp,{value:p.Bh8,children:(0,r.jsx)(c.Z,{className:L(w.root,t.rootContainer),children:n.map(function(e){var n,u=e.label,d=e.href,p=e.onClick,m=e.isLoading,f=e.disabled,h=e.show,b=e.Icon,x=e.clickAnalyticsLabel,Z=(0,o.Z)(e,["label","href","onClick","isLoading","disabled","show","Icon","clickAnalyticsLabel"]),C=y&&!_&&"Edit"===u?j.buttonEditTemplate:j.buttonFilter;return(void 0===h||h)&&(0,r.jsx)(c.Z,{className:w.buttonWrapper,children:(0,r.jsx)(k,(0,i.Z)((0,s.Z)({classes:{root:t.buttonRoot,iconSizeMedium:w.iconSizeMedium,startIcon:w.startIcon},className:L((n={},(0,a.Z)(n,j.buttonAnchor,!b),(0,a.Z)(n,C,!!b),n)),onClick:p,href:d,disabled:m||f,"aria-label":u,labelTrack:P?x:u},I&&{clickTrackOptions:{insightType:I}},v({Icon:b,withActionLabel:g}),Z),{children:g?(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)(l.Z,{color:"inherit",size:18,className:w.buttonProgress}),(0,r.jsx)("span",{className:w.actionLabel,children:u})]}):b}))},u)})})})};y.defaultProps={classesProps:{},withActionLabel:!0}},79866:function(e,t,n){n.d(t,{e:function(){return g}});var a=n(47842),s=n(70865),i=n(52322),o=n(97005),r=n(58487),c=n(49644),l=n(46792),u=n(66180),d=n(44297),p=n(98779),m=n(53007),f=n(27764),h=n(5632),b=(0,n(8740).ZL)()(function(e,t){var n,i,o=e.breakpoints,r=e.tokens,c=r.size,l=r.spacing,u=t.centerBanner,d=t.flexBreakpoint,p=t.isCentered;return{root:(0,s.Z)((0,a.Z)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:l.base,minHeight:c.density.high},o.down("md"),{alignItems:"normal",flexWrap:"wrap"}),"md"===d?(0,a.Z)({},o.up("md"),{marginTop:0,flexDirection:"row"}):(n={},(0,a.Z)(n,o.up("md"),{marginTop:0,marginBottom:l.base,alignItems:"flex-start"}),(0,a.Z)(n,o.up(d),{flexDirection:"row"}),n)),container:(0,s.Z)({width:"100%"},p&&(0,a.Z)({},o.up("md"),{width:"auto",maxWidth:"100%"})),ctas:(0,s.Z)({alignItems:"center"},"md"===d?(0,a.Z)({},o.up("md"),{marginLeft:l.base,display:"flex",justifyContent:"flex-end"}):(i={},(0,a.Z)(i,o.up(d),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,a.Z)(i,o.up("md"),{marginLeft:l.base}),i)),channelBanner:{marginRight:l.s},actionButtonRoot:(0,a.Z)({padding:l.s,marginBottom:0},o.up("md"),{padding:l.base}),actionIcons:{display:"flex",width:"auto"},actionRootContainer:{marginTop:0,alignItems:"center",display:"flex"},shareButtonContainer:(0,a.Z)({display:"flex",alignItems:"center"},o.down("md"),{marginLeft:l.s}),banner:{width:"100%",display:"flex",justifyContent:u?"center":"space-around",marginBottom:l.s}}}),x=function(e){var t=e.pathname;return(0,f.xw)({pathname:t})||(0,f.ZK)({url:t})||(0,f.tz)({url:t})||(0,f.Bc)({url:t})?u.sY:m.Share},g=function(e){var t=e.asset,n=e.flexBreakpoint,a=e.clickAnalyticsLabels,u=e.CtaComponent,m=e.actionButtons,f=e.showShareButton,g=e.hideCtaComponent,v=e.isTemplateAsset,y=e.ctaComponentProps,j=e.isCentered,Z=e.title,w=(0,h.useRouter)().pathname,L=b({flexBreakpoint:n,isCentered:j,centerBanner:v}),k=L.classes,C=L.cx,P=!(0,p.d)({breakpoint:"sm"}),_=(0,d.fn)(t),I=(0,d.ML)(t),B=I&&!!t.videoRenderUrl,T=(0,d.PD)({channels:null==t?void 0:t.channels}),S=(null==m?void 0:m.length)>0;return(0,i.jsxs)("div",{className:C(k.root,k.container),children:[(0,i.jsxs)("div",{className:k.banner,children:[Z,!T&&(0,i.jsx)(r.h,{classes:{root:k.channelBanner},asset:t,withLabel:!1}),(m||f)&&(0,i.jsxs)("div",{className:k.actionIcons,children:[S&&(0,i.jsx)(o.E,{classesProps:{buttonRoot:k.actionButtonRoot,rootContainer:k.actionRootContainer},buttons:m,withActionLabel:P,isTemplateAsset:v}),f&&(0,i.jsx)(c.V,{asset:t,IconComponent:x({pathname:w}),ButtonComponent:P?l.G_:l.D3,clickAnalyticsLabel:a.shareButton,iconContainerClassName:k.shareButtonContainer,shouldTrackAnalytics:!0,size:"medium"})]})]}),u&&!_&&!v&&!g&&(!I||B)&&(0,i.jsx)("div",{className:k.ctas,children:(0,i.jsx)(u,(0,s.Z)({asset:t},y))})]})};g.defaultProps={flexBreakpoint:"sm",actionButtons:null,CtaComponent:null,ctaComponentProps:{},isCentered:!1,clickAnalyticsLabels:{},hideCtaComponent:!1,isTemplateAsset:!1,title:null}},44098:function(e,t,n){n.d(t,{r:function(){return es}});var a=n(47842),s=n(52322),i=n(41075),o=n(67550),r=n(62197),c=n(53980),l=n(6096),u=n(787),d=n(39232),p=n(29510),m=n(26051),f=n(44297),h=n(54112),b=n(75),x=n(56219),g=n(8740),v=(0,g.ZL)()(function(e){var t=e.spacing,n=e.typography,a=e.tokens,s=a.fontSize,i=a.spacing;return{description:{fontSize:s.s},bold:{fontWeight:n.fontWeightBold,marginBottom:i.xs},title:{marginBottom:0,fontSize:s.m},titleRow:{display:"flex",alignItems:"center",marginBottom:i.s},trackLogo:{display:"flex",alignItems:"center",marginRight:t(3)}}}),y=function(e){var t=e.id;return{itemId:["item_id_with_id",{ID:t}],itemIdWithAssetType:["item_id_with_id_and_asset_type",{ASSET_TYPE:e.assetTypeLabel,ID:t}],tooltip:"ent:copy_id_to_clipboard",successMessage:"ent:copy_item_id_success",errorMessage:"ent:snackbar_failed_to_copy_to_clipboard"}},j=function(e){var t=e.asset,n=e.title,a=e.description,i=e.assetTypeLabel,g=(0,f.Tp)(t),j=(0,f.w5)(t),Z=t.isRexEditorial,w=t.id,L=(0,h.D)({namespace:b.yMP,translationKeys:y({id:w,assetTypeLabel:i})}).labels,k=v(),C=k.classes,P=k.cx,_=(0,p.PE)().locale,I=(0,m.G)({asset:t,language:_}),B=(0,x.Lj)(t),T=(0,x.GI)(t),S=g===d.xF,A=g===d.bz,N=(0,f.O)({track:t,useContentTier:!0}),D=[d.k4,d.pX,d.bz].includes(g)||j,z=n||(Z||B||T||A?t.title:I),M=a||(Z||B||A?I:"");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.Z,{display:"flex",alignItems:"center",my:2,children:[(0,s.jsx)(r.Z,{color:"textSecondary",noWrap:!0,variant:"body2","data-automation":"AssetDescription_assetId",children:D?L.itemIdWithAssetType:L.itemId}),(0,s.jsx)(l.b,{text:w,tooltip:L.tooltip,successMessage:L.successMessage,errorMessage:L.errorMessage})]}),z&&(0,s.jsxs)("div",{className:C.titleRow,children:[S&&(0,s.jsx)("div",{className:C.trackLogo,children:(0,s.jsx)(u.IC,{isPremiumBeat:N})}),(0,s.jsx)(r.Z,{component:"h1",className:P(C.bold,C.title),"data-automation":"asset-title",children:z})]}),M&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{component:"span",className:P(C.description),children:M}),(0,s.jsx)(c.B,{description:M})]})]})};j.defaultProps={asset:{},title:"",description:"",assetTypeLabel:""};var Z=n(21647),w=n(13011),L=n(37546),k=n(30816),C=function(e){var t=e.fps,n=(0,k.e)().classes;return(0,s.jsx)("li",{children:(0,s.jsx)(r.Z,{variant:"body2",className:n.listItem,children:t||(0,s.jsx)(Z.Z,{variant:"text",width:w.G})})})},P=function(e){var t=e.asset,n=(0,k.s)().classes,a=t.sizes&&Object.values(t.sizes),i=((0,L.FG)(a)||{}).fps,o=(0,h.D)({namespace:b.G0e,translationKeys:{frameRate:"frame_rate",fps:["fps",{FPS:i}]}}),c=o.t,l=o.ready,u=o.labels;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{className:n.labelTitle,children:l?u.frameRate:(0,s.jsx)(Z.Z,{variant:"text",width:w.pP})}),(0,s.jsx)("ul",{className:n.list,children:i?(0,s.jsx)(C,{t:c,fps:u.fps}):(0,s.jsx)(C,{})})]})},_=n(4171),I=(0,g.ZL)()(function(e){var t=e.typography,n=e.tokens.spacing;return{title:{fontWeight:t.fontWeightBold,marginBottom:n.s}}}),B=function(e){var t=e.asset,n=I().classes,a=(0,h.D)({namespace:b.jp2,translationKeys:{importantInformation:"common:important_information"}}).labels;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{className:n.title,children:a.importantInformation}),(0,s.jsx)(_.v,{asset:t,isSmallFont:!0})]})},T=n(39906),S=n(47330),A=n(25824),N=n(66358),D=n(5304),z="".concat(N.Q_D,".contributorLink"),M=(0,g.ZL)()(function(e){var t=e.palette,n=e.typography,a=e.tokens.spacing;return{bold:{fontWeight:n.fontWeightBold},contributorLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},avatarLabel:{marginLeft:a.s},byLine:{marginTop:a.s},linkContainer:{color:t.info.main}}}),W=function(e){var t=e.creatorName,n=void 0===t?{}:t,a=e.contributorAvatar,s=(void 0===a?{}:a).name;if(!s)return null;var i=n.agency,o=n.photographer;return i&&o?"".concat(o," / ").concat(s):"".concat(s)},E=function(e){var t,n=e.asset,a=e.isLoading,i=e.assetTypeLabel,o=(0,f.Tp)(n),c=(0,f.w5)(n),l=M(),u=l.classes,p=l.cx,m=(0,h.D)({namespace:b.Chv,translationKeys:{contributorLabel:"common:filters_contributor",contributorLabelWithAssetType:["common:filters_contributor_with_asset_type",{ASSET_TYPE:i}]}}),x=m.ready,g=m.labels,v=n||{},y=v.byline,j=v.creatorName,L=(0,f.jW)({asset:n}).contributor,k=(0,D.J5)({contributor:L}),C=(0,f.zz)(n),P=C?null==n?void 0:null===(t=n.artist)||void 0===t?void 0:t.name:W({creatorName:j,contributorAvatar:k}),_=[d.k4,d.pX,d.bz].includes(o)||c?g.contributorLabelWithAssetType:g.contributorLabel;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{className:u.bold,children:x?_:(0,s.jsx)(Z.Z,{variant:"text",width:w.G})}),y&&(0,s.jsx)(T.x,{byline:y,isCentered:!1,children:(0,s.jsx)(r.Z,{classes:{root:p(u.contributorLabel,u.byLine)},children:y})}),(0,s.jsx)(S.B,{asset:n,isLoading:a,children:(0,s.jsx)(r.Z,{classes:{root:p(u.contributorLabel,u.avatarLabel)},children:P?function(){if(C)return P;var e=(0,f.Cs)({asset:n}),t=e.contributorHref,a=e.contributorAsPath;return(0,s.jsx)(A.r,{clickAnalyticsLabel:z,href:t,underline:!0,className:u.linkContainer,linkAs:a,children:P})}():(0,s.jsx)(Z.Z,{variant:"text",width:w.pP})})})]})};E.defaultProps={assetTypeLabel:""};var R=n(87394),G=n(41033),F=n(83249),O=n(65615),H=n(36888),K=n(58287),U=n(2784),Q=(0,g.ZL)()(function(e,t){var n=e.spacing,a=t.collapsedHeight;return{collapseWrapper:{maskImage:"linear-gradient(to bottom, rgba(0, 0, 0, 1) 0px ".concat(a/2,"px, rgba(0, 0, 0, 0.4) ").concat(a+(0,K.C)(n(4)),"px 100%)")},inlineButton:{display:"flex",flexDirection:"column-reverse"},title:{fontWeight:"bold",paddingRight:n(3)},wrapper:{display:"flex"}}}),Y=function(e){var t=e.children,n=e.labels,a=e.collapsedHeight,i=e.showMoreClickAnalyticsData,o=e.expandedByDefault,r=e.disableCollapseOption,c=(0,R.Z)((0,U.useState)(o),2),l=c[0],u=c[1],d=(0,R.Z)((0,U.useState)(!1),2),p=d[0],m=d[1],f=Q({collapsedHeight:a}).classes,h=(0,H.bo)().classes,b=l||p?{}:{wrapper:f.collapseWrapper},x=(0,O.t)(),g=(0,U.useCallback)(function(){l||x(i),u(!l),m(!0)},[x,l,i]);return(0,s.jsxs)("div",{className:f.root,children:[(0,s.jsx)(G.Z,{in:l,collapsedSize:a,addEndListener:function(){return m(!1)},classes:b,children:t}),!r&&(0,s.jsx)("div",{className:f.container,children:(0,s.jsx)(F.Z,{className:h.buttonAnchor,color:"inherit",onClick:g,children:l?n.showLess:n.showMore})})]})};Y.defaultProps={showMoreClickAnalyticsData:{},expandedByDefault:!1,disableCollapseOption:!1};var J=n(18174),X=n(98779),V=n(25237),$=n.n(V),q=$()(function(){return n.e(95259).then(n.bind(n,95259)).then(function(e){return e.TrackDetails})},{loadableGenerated:{webpack:function(){return[95259]}},ssr:!0}),ee=$()(function(){return n.e(70893).then(n.bind(n,64155)).then(function(e){return e.AssetFormats})},{loadableGenerated:{webpack:function(){return[64155]}},ssr:!0}),et=$()(function(){return n.e(22187).then(n.bind(n,22187)).then(function(e){return e.TrackCharacteristics})},{loadableGenerated:{webpack:function(){return[22187]}},ssr:!0}),en={pageSection:N.Q_D,eventLabel:"descriptionSeeMore"},ea=(0,g.ZL)()(function(e){var t=e.breakpoints,n=e.tokens.spacing;return{descriptionContainer:(0,a.Z)({paddingBottom:"".concat(n.base)},t.up("md"),{padding:"".concat(n.xs," ").concat(n.l," ").concat(n.xs," 0")}),formatsContainer:{padding:"".concat(n.xs," 0")},contributorContainer:(0,a.Z)({paddingTop:"".concat(n.base)},t.up("md"),{padding:"".concat(n.xs," 0  ").concat(n.xs," ").concat(n.l)})}}),es=function(e){var t=e.asset,n=e.labels,a=e.collapsedHeightMobile,r=e.collapsedHeightDesktop,c=(0,J.WB)(t)||(0,f.yw)({asset:t}),l=ea().classes,u=(0,X.d)({breakpoint:"lg",defaultMatches:!0}),d=(0,f.Tp)(t),p=(0,f.w5)(t),m=(0,f.Am)(t),x=(0,f.zz)(t),g=(0,f.f8)(t),v=!p&&!x,y=(0,h.D)({namespace:b.y2Q,translationKeys:{assetTypeLabel:"common:".concat((0,f.zs)({asset:t}),"_asset_type")}}).labels.assetTypeLabel;return(0,s.jsxs)(i.ZP,{container:!0,children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,s.jsx)(Y,{collapsedHeight:u?void 0===a?175:a:void 0===r?140:r,labels:n,showMoreClickAnalyticsData:en,expandedByDefault:x||g,disableCollapseOption:g,children:(0,s.jsxs)(i.ZP,{container:!0,children:[(0,s.jsx)(i.ZP,{item:!0,xs:12,md:6,className:l.descriptionContainer,children:(0,s.jsx)(j,{asset:t,title:n.descriptionTitle,assetTypeLabel:y})}),(0,s.jsxs)(i.ZP,{item:!0,xs:12,md:6,className:l.formatsContainer,children:[c&&(0,s.jsx)(o.Z,{mb:4,children:(0,s.jsx)(B,{asset:t})}),v?(0,s.jsx)(ee,{asset:t,assetTypeLabel:y}):(0,s.jsx)(q,{assetType:d,asset:t}),m&&(0,s.jsx)(o.Z,{mt:4,children:(0,s.jsx)(P,{asset:t})})]})]})})}),(0,s.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(i.ZP,{container:!0,children:(0,s.jsxs)(i.ZP,{item:!0,xs:12,className:l.contributorContainer,children:[(0,s.jsx)(E,{asset:t,isLoading:!1,assetTypeLabel:y}),!v&&(0,s.jsx)(o.Z,{mt:4,children:(0,s.jsx)(et,{track:t})})]})})})]})}},30816:function(e,t,n){n.d(t,{e:function(){return o},s:function(){return i}});var a=n(70865),s=n(8740),i=(0,s.ZL)()(function(e){var t=e.typography,n=e.tokens.spacing,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=s.layout,o=void 0===i?"row":i;return{labelTitle:{fontWeight:t.fontWeightBold},list:(0,a.Z)({display:"flex",flexDirection:o,flexWrap:"wrap",margin:"".concat(n.s," 0"),padding:0,listStyle:"none"},"column"===o?{"&& :not(:first-of-type)":{marginTop:n.s}}:{})}}),o=(0,s.ZL)()(function(e){var t=e.palette,n=e.tokens,a=n.border,s=n.spacing,i=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).layout;return{listItem:{padding:s.s,margin:"column"===i?"0":s.xs,borderRadius:s.xs,border:"solid ".concat(a.width.s," ").concat(t.border1Color),display:"inline-block"}}})},9877:function(e,t,n){n.d(t,{Er:function(){return i},Iu:function(){return s},f0:function(){return a}});var a=240,s=24,i=16},53980:function(e,t,n){n.d(t,{B:function(){return c}});var a=n(52322),s=n(6096),i=n(75),o=n(59877),r=function(e){var t=e.t;return{copyDescriptionSuccess:t("ent:copy_item_description_success"),copyDescriptionTooltip:t("ent:copy_description_top_clipboard"),copyError:t("ent:snackbar_failed_to_copy_to_clipboard")}},c=function(e){var t=e.classesProps,n=e.clickAnalyticsLabel,c=e.description,l=r({t:(0,o.$G)(i._7o).t});return(0,a.jsx)(s.b,{classesProps:void 0===t?{}:t,clickAnalyticsLabel:void 0===n?"":n,errorMessage:l.copyError,successMessage:l.copyDescriptionSuccess,text:void 0===c?"":c,tooltip:l.copyDescriptionTooltip})}},11265:function(e,t,n){n.d(t,{D:function(){return s}});var a=n(25237),s=n.n(a)()(function(){return Promise.all([n.e(41075),n.e(79637),n.e(37218),n.e(18625)]).then(n.bind(n,94400)).then(function(e){return e.DownloadTrackPreviewModal})},{loadableGenerated:{webpack:function(){return[94400]}},ssr:!1})},787:function(e,t,n){n.d(t,{IC:function(){return m}});var a=n(52322),s=n(21647),i=n(9877),o=n(25237),r=n.n(o),c=n(8740),l=function(e){var t=e.size,n=void 0===t?i.Er:t;return(0,a.jsx)(s.Z,{width:n,height:n,sx:{transform:"none"}})},u=r()(function(){return n.e(22604).then(n.bind(n,22604)).then(function(e){return e.PbLogo})},{loadableGenerated:{webpack:function(){return[22604]}},loading:l,ssr:!0}),d=r()(function(){return n.e(25488).then(n.bind(n,25488)).then(function(e){return e.Brackets})},{loadableGenerated:{webpack:function(){return[25488]}},loading:l,ssr:!0}),p=(0,c.ZL)()(function(e,t){var n=t.size;return{icon:{width:n,height:n}}}),m=function(e){var t=e.isPremiumBeat,n=e.className,s=e.size,i=p({size:s}),o=i.classes,r=i.cx;return void 0===t?(0,a.jsx)(l,{size:s}):(0,a.jsx)(t?u:d,{className:r(n,o.icon)})};m.defaultProps={className:null,isPremiumBeat:void 0,size:i.Er}},46792:function(e,t,n){n.d(t,{D3:function(){return f},G_:function(){return p},jI:function(){return m},xw:function(){return h}});var a=n(47842),s=n(70865),i=n(96670),o=n(52322),r=n(83249),c=n(85801),l=n(53007),u=n(36888),d=(0,n(8740).ZL)()(function(e){var t=e.breakpoints,n=e.tokens,s=n.spacing,i=n.fontSize,o=n.color;return{actionRoot:(0,a.Z)({padding:s.s},t.up("md"),{padding:s.base,marginLeft:s.base}),actionLabel:(0,a.Z)({},t.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,a.Z)({},t.down("md"),{fontSize:i.icon})},startIcon:(0,a.Z)({},t.down("md"),{margin:0}),buttonWithLabelBelow:{color:o.white,fontWeight:"normal",display:"flex",flexDirection:"column",fontSize:i.xs}}}),p=function(e){var t=e.buttonProps,n=e.labels,a=e.IconComponent,c=void 0===a?l.Share:a,p=(0,u.bo)().classes,m=d(),f=m.classes,h=m.cx;return(0,o.jsx)(r.Z,(0,i.Z)((0,s.Z)({},t),{classes:{root:f.actionRoot,iconSizeMedium:f.iconSizeMedium,startIcon:f.startIcon},className:h(p.buttonFilter,t.className),color:"primary",variant:"contained",startIcon:(0,o.jsx)(c,{}),children:(0,o.jsx)("span",{className:f.actionLabel,children:n.share})}))},m=function(e){var t=e.buttonProps,n=e.labels,a=e.IconComponent,c=void 0===a?l.Share:a,u=d(),p=u.classes,m=u.cx;return(0,o.jsxs)(r.Z,(0,i.Z)((0,s.Z)({},t),{className:m(p.buttonWithLabelBelow,t.className),color:"inherit",variant:"text",children:[(0,o.jsx)(c,{}),(0,o.jsx)("span",{children:n.share})]}))},f=function(e){var t=e.buttonProps,n=e.IconComponent,a=void 0===n?l.Share:n,r=(0,u.bo)().classes,p=d(),m=p.classes,f=p.cx;return(0,o.jsx)(c.Z,(0,i.Z)((0,s.Z)({},t),{classes:{root:f(m.actionRoot,t.className)},className:r.buttonFilter,color:"primary",size:"small",children:(0,o.jsx)(a,{})}))},h=function(e){var t=e.buttonProps,n=e.labels;return(0,o.jsx)(r.Z,(0,i.Z)((0,s.Z)({},t),{variant:"outlined",children:n.share}))}},66180:function(e,t,n){n.d(t,{sY:function(){return f}});var a,s=n(52322),i=n(62021),o=n(53007),r=function(){return(0,s.jsx)(o.Share,{})},c=n(47842),l=n(88849),u=n(2784),d=n(16766),p={flagID:"SDAQ-162-ADP-share-icon-experiment",id:"SDAQ-162",name:"Share Icon ADP experiment",treatments:(a={},(0,c.Z)(a,l.NM,function(e){var t=e.experiment;return(0,u.useEffect)(function(){t.recordImpression()},[]),(0,s.jsx)(r,{})}),(0,c.Z)(a,l.vG,function(e){var t=e.experiment;return(0,u.useEffect)(function(){t.recordImpression()},[]),(0,s.jsx)(d.P,{})}),a)},m=function(){return null},f=function(){return(0,s.jsx)(i.K,{config:p,Portal:r,SkeletonLoader:m})}},449:function(e,t,n){n.d(t,{i:function(){return g}});var a=n(98788),s=n(70865),i=n(96670),o=n(87394),r=n(5163),c=n(44297),l=n(30337),u=n(65615),d=n(56579),p=n(43110),m=n(72075),f=n(2784),h=n(59979),b=n(19819),x=function(e){var t=e.asset,n=e.clickAnalyticsLabels,a=(0,l.U)(),s=(0,u.t)(),i=(0,f.useCallback)(function(){a({assets:[t],isComp:!1,isPaid:!1,isQuickDownload:!1,isRedownload:!1})},[t,a]);return{analyticsInlineClick:(0,f.useCallback)(function(){return s(n.tryButton)},[s,n]),analyticsProductDownloaded:i}},g=function(e){var t=e.asset,n=e.clickAnalyticsLabels,l=e.shouldSetLocalStorage,u=void 0!==l&&l,g=(0,o.Z)((0,f.useState)(!1),2),v=g[0],y=g[1],j=(0,p.B)(),Z=(0,h.cM)(),w=(0,d.N)(),L=w.triggerDownloadPreview,k=w.isDownloading,C=x({asset:t,clickAnalyticsLabels:void 0===n?{}:n}),P=C.analyticsInlineClick,_=C.analyticsProductDownloaded;return{isActionInProgress:k,tryButtonClickHandler:(0,f.useCallback)((0,a.Z)(function(){var e,n;return(0,r.__generator)(this,function(a){switch(a.label){case 0:if(j)return[3,1];return P(),m.j&&(u&&(0,b.oe)(t),null===(e=window.NREUM)||void 0===e||null===(n=e.addPageAction)||void 0===n||n.call(e,"UP3-1623 assign useTryButton signUpPath to href",(0,i.Z)((0,s.Z)({},window.location||{}),{shouldSetLocalStorage:u,signUpPath:Z})),window.location.href=Z),[3,4];case 1:if(!(0,c.w5)(t))return[3,2];return y(!0),[3,4];case 2:return _(),[4,L({asset:t})];case 3:a.sent(),a.label=4;case 4:return[2]}})}),[P,_,t,j,u,Z,L]),isMusicPreviewModalOpen:v,setIsMusicPreviewModalOpen:y}}},65615:function(e,t,n){n.d(t,{t:function(){return i}});var a=n(776),s=n(2784),i=function(){var e=(0,a.yh)().analytics;return(0,s.useCallback)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.pageSection,a=t.eventLabel;return n&&a&&e.inlineClick("".concat(n,".").concat(a))},[e])}},16766:function(e,t,n){n.d(t,{P:function(){return o}});var a=n(70865),s=n(52322),i=(0,n(6620).Z)((0,s.jsx)("path",{d:"m18,14c-1.20233,0-2.26813.5415-3.00134,1.38116l-5.08929-2.54486c.05756-.27008.09064-.54907.09064-.8363s-.03308-.56622-.09064-.8363l5.08929-2.5448c.73322.83966,1.79901,1.3811,3.00134,1.3811,2.20917,0,4-1.79089,4-4s-1.79083-4-4-4-4,1.79083-4,4c0,.28729.03314.56641.0907.83655l-5.08923,2.54474c-.73328-.83972-1.79907-1.38129-3.00146-1.38129-2.20911,0-4,1.79083-4,4s1.79089,4,4,4c1.20239,0,2.26819-.5415,3.00146-1.38129l5.08923,2.54474c-.05756.27014-.0907.54926-.0907.83655,0,2.20911,1.79089,4,4,4s4-1.79089,4-4-1.79083-4-4-4Zm0-10c1.10278,0,2,.89722,2,2s-.89722,2-2,2-2-.89722-2-2,.89722-2,2-2ZM6,14c-1.10278,0-2-.89722-2-2s.89722-2,2-2c1.10284,0,2,.89722,2,2s-.89716,2-2,2Zm12,6c-1.10278,0-2-.89722-2-2s.89722-2,2-2,2,.89722,2,2-.89722,2-2,2Z"}),"ShareJoins.svg"),o=function(e){return(0,s.jsx)(i,(0,a.Z)({viewBox:"0 0 24 24"},e))}},73377:function(e,t,n){n.d(t,{OK:function(){return r},U_:function(){return c},gR:function(){return i},wE:function(){return o}});var a=n(26297),s=n(87394),i=function(e){e.sort,e.page;var t=(0,a.Z)(e,["sort","page"]);return 0===Object.keys(t).length?{}:{filters:Object.entries(t).map(function(e){var t=(0,s.Z)(e,2),n=t[0],a=t[1];return{type:n,value:a.join?a.join(","):"".concat(a)}})}},o=function(e){var t=e.sort,n=void 0===t?"":t;if(!n)return{};var a=n.charAt(0),s="asc",i=n.slice(1);return"-"===a?s="desc":"+"!==a&&(i=n),{sort:[{type:i,value:s}]}},r=function(e){var t=e.page;return{pagination:{page:Number(void 0===t?1:t)}}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageSection,n=e.eventLabel;return t&&n?"".concat(t,".").concat(n):""}}}]);
//# sourceMappingURL=7695-b125de2aef4076b3.js.map