(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{245:function(n,t){},268:function(n,t){},270:function(n,t){},347:function(n,t){},349:function(n,t){},382:function(n,t){},387:function(n,t){},389:function(n,t){},396:function(n,t){},409:function(n,t){},432:function(n,t){},441:function(n,t){},443:function(n,t){},520:function(n,t,e){},521:function(n,t,e){},522:function(n,t,e){"use strict";e.r(t);var c,r,o,a,i,s,l,u,d,p,x,b,j,g,h,f,O,m=e(1),v=e.n(m),y=e(87),w=e.n(y),C=e(18),A=e.n(C),S=e(45),E=e(71),T=e(15),N=e(60),k=e(70),_=e.n(k),M=e(219),D=e.n(M),I=e(72),L=e(220),z=e(20),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(z.a)(Object(z.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(z.a)(Object(z.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(z.a)(Object(z.a)({},R),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(z.a)(Object(z.a)({},n),{},{account:t.payload.account});default:return n}},U={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(z.a)(Object(z.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(z.a)(Object(z.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(z.a)(Object(z.a)({},U),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},P=Object(I.b)({blockchain:F,data:K}),G=[L.a],W=Object(I.c)(I.a.apply(void 0,G)),Y=Object(I.d)(P,W),H=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},B=function(){return function(){var n=Object(S.a)(A.a.mark((function n(t){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(H("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},q=function(n){return{type:"CONNECTION_FAILED",payload:n}},Q=function(n){return function(){var t=Object(S.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(B());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},X=e(7),Z=e(8),J=e(13),V=e(12),$=e(2),nn=function(n){Object(J.a)(e,n);var t=Object(V.a)(e);function e(){return Object(X.a)(this,e),t.apply(this,arguments)}return Object(Z.a)(e,[{key:"render",value:function(){return Object($.jsxs)("ul",{class:"socialmedia",children:[Object($.jsx)("li",{children:Object($.jsx)("a",{class:"arbitrum",href:"https://nova.stratosnft.io/collection/degen-mutoonz",target:"_blank",title:"Go to stratos"})}),Object($.jsx)("li",{children:Object($.jsx)("a",{class:"twitter",href:"https://twitter.com/degen_mutoonz",target:"_blank",title:"Go to twitter"})})]})}}]),e}(v.a.Component),tn=e(16),en=tn.a.div(c||(c=Object(T.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),cn=tn.a.div(r||(r=Object(T.a)(["\n  height: 8px;\n  width: 8px;\n"]))),rn=tn.a.div(o||(o=Object(T.a)(["\n  height: 16px;\n  width: 16px;\n"]))),on=tn.a.div(a||(a=Object(T.a)(["\n  height: 24px;\n  width: 24px;\n"]))),an=tn.a.div(i||(i=Object(T.a)(["\n  height: 32px;\n  width: 32px;\n"]))),sn=tn.a.div(s||(s=Object(T.a)(["\ndisplay: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  background-position: center;\n  background-position: center;\n  background-position: 50% 50%;\n  background-size: 110%;\n  background-image: url(config/images/mutoonz-back-4.png), \n  url(config/images/mutoonz-back-3.png), \n  url(config/images/mutoonz-back-2.png),\n  url(config/images/mutoonz-back-1.png),\n  url(config/images/mutoonz-back-0.png);\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"})),ln=tn.a.div(l||(l=Object(T.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),un=tn.a.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 2rem;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),dn=(tn.a.p(d||(d=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),tn.a.p(p||(p=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 1.4rem;\n  line-height: 1;\n"])))),pn=(tn.a.div(x||(x=Object(T.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),tn.a.button(b||(b=Object(T.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 20px 10px;\n  font-weight: bold;\n  font-size: 2vw;\n  color: #FFF;\n  letter-spacing: 0.8px;\n  width: 15vw;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(0, 0, 0, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),xn=tn.a.button(j||(j=Object(T.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 2rem;\n  color: var(--primary-text);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(0, 0, 0, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(0, 0, 0, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),bn=tn.a.div(g||(g=Object(T.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),jn=tn.a.img(h||(h=Object(T.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),gn=tn.a.img(f||(f=Object(T.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),hn=tn.a.a(O||(O=Object(T.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var fn=function(){var n,t,e=Object(N.b)(),c=Object(N.c)((function(n){return n.blockchain})),r=Object(N.c)((function(n){return n.data})),o=Object(m.useState)(!1),a=Object(E.a)(o,2),i=a[0],s=a[1],l=Object(m.useState)("Click buy to mint your NFT."),u=Object(E.a)(l,2),d=u[0],p=u[1],x=Object(m.useState)(1),b=Object(E.a)(x,2),j=b[0],g=b[1],h=Object(m.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(E.a)(h,2),O=f[0],v=f[1],y=function(){""!==c.account&&null!==c.smartContract&&e(B(c.account))},w=function(){var n=Object(S.a)(A.a.mark((function n(){var t,e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,v(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(m.useEffect)((function(){w()}),[]),Object(m.useEffect)((function(){y()}),[c.account]),Object($.jsx)(en,{children:Object($.jsxs)(sn,{id:"parallax",flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:O.SHOW_BACKGROUND?"/config/images/bg1.png":null,onMouseMove:function(n){!function(n){var t=document.querySelector("#parallax"),e=window.innerWidth/2,c=window.innerHeight/2,r=n.clientX,o=n.clientY,a="".concat(50-.005*(r-e),"% ").concat(50-.005*(o-c),"%"),i="".concat(50-.01*(r-e),"% ").concat(50-.075*(o-c),"%"),s="".concat(50-.015*(r-e),"% ").concat(50-.01*(o-c),"%"),l="".concat(50-.03*(r-e),"% ").concat(50-.015*(o-c),"%"),u="".concat(50-.04*(r-e),"% ").concat(50-.02*(o-c),"%"),d="".concat(u,",").concat(l,",").concat(s,", ").concat(i,", ").concat(a);t.style.backgroundPosition=d}(n)},children:[Object($.jsx)(jn,{alt:"DEGEN MUTOONZ - LOGO",src:"/config/images/logo.png"}),Object($.jsx)(rn,{}),Object($.jsx)(nn,{}),Object($.jsxs)(bn,{flex:1,style:{padding:24},test:!0,children:[Object($.jsx)(ln,{flex:1,jc:"center",ai:"center",children:Object($.jsx)(gn,{alt:"DEGEN MUTOONZ",src:"/config/images/example.gif"})}),Object($.jsx)(an,{}),Object($.jsxs)(ln,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:5,borderRadius:18,border:"4px solid var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object($.jsxs)(un,{style:{textAlign:"center",fontSize:"8vw",fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",O.MAX_SUPPLY]}),Object($.jsx)(dn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object($.jsx)(hn,{target:"_blank",href:O.SCAN_LINK,children:(n=O.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object($.jsx)(rn,{}),Number(r.totalSupply)>=O.MAX_SUPPLY?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(un,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object($.jsxs)(dn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",O.NFT_NAME," on"]}),Object($.jsx)(rn,{}),Object($.jsx)(hn,{target:"_blank",href:O.MARKETPLACE_LINK,children:O.MARKETPLACE})]}):Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(un,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 MUTOONZ costs ",O.DISPLAY_COST," ",O.NETWORK.SYMBOL,"."]}),Object($.jsx)(cn,{}),Object($.jsx)(dn,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:"1rem"},children:"Excluding gas fees."}),Object($.jsx)(on,{}),Object($.jsx)(dn,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:"1.5rem",borderTop:"1px solid var(--accent-text)",paddingTop:"1rem",display:"none"},children:"Public mint starts on Friday, 1 July 2022."}),Object($.jsx)(rn,{}),""===c.account||null===c.smartContract?Object($.jsxs)(ln,{ai:"center",jc:"center",style:{},children:[Object($.jsxs)(dn,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:"1rem"},children:["Please connect to the ",O.NETWORK.NAME," network"]}),Object($.jsx)(an,{}),Object($.jsx)(pn,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(S.a)(A.a.mark((function n(t){var e,c,r,o,a,i,s,l,u;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(o=n.sent,a=window,!(i=a.ethereum)||!i.isMetaMask){n.next=33;break}return _.a.setProvider(i),s=new D.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==o.NETWORK.ID?(u=new _.a(c,o.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(Q(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(q("Change network to ".concat(o.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(q("Something went wrong."));case 31:n.next=34;break;case 33:t(q("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),y()},children:"CONNECT"}),""!==c.errorMsg?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(rn,{}),Object($.jsx)(dn,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)(dn,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object($.jsx)(on,{}),Object($.jsxs)(ln,{ai:"center",jc:"center",fd:"row",children:[Object($.jsx)(xn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),g(n)}()},children:"-"}),Object($.jsx)(on,{}),Object($.jsx)(dn,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:"2.2rem"},children:j}),Object($.jsx)(on,{}),Object($.jsx)(xn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>10&&(n=10),g(n)}()},children:"+"})]}),Object($.jsx)(an,{}),Object($.jsx)(ln,{ai:"center",jc:"center",fd:"row",children:Object($.jsx)(pn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=O.WEI_COST,t=O.GAS_LIMIT,r=String(n*j),o=String(t*j);console.log("Cost: ",r),console.log("Gas limit: ",o),p("Minting your ".concat(O.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(o),to:O.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),p("\xb0\xba\xa4\xf8 Sorry, something went wrong please try again later. \xf8\xa4\xb0\xba\xa4"),s(!1)})).then((function(n){console.log(n),p("CONGRATS, to the proud owner of a ".concat(O.NFT_NAME,". The NFT is yours! Go visit nova.stratosnft.io to view it.")),s(!1),e(B(c.account))}))}(),y()},children:i?"BUSY":"BUY"})})]})]}),Object($.jsx)(on,{})]}),Object($.jsx)(an,{}),Object($.jsx)(ln,{flex:1,jc:"center",ai:"center",children:Object($.jsx)(gn,{alt:"DEGEN MUTOONZ",src:"/config/images/example.gif"})})]}),Object($.jsx)(on,{}),Object($.jsxs)(ln,{jc:"center",ai:"center",style:{width:"70%"},children:[Object($.jsxs)(dn,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"1rem"},children:["Please make sure you are connected to the right network (",O.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object($.jsx)(rn,{}),Object($.jsxs)(dn,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"1rem"},children:["We have set the gas limit to ",O.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},On=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,526)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),c(n),r(n),o(n),a(n)}))};e(520),e(521);w.a.render(Object($.jsx)(N.a,{store:Y,children:Object($.jsx)(fn,{})}),document.getElementById("root")),On()}},[[522,1,2]]]);
//# sourceMappingURL=main.b3f4bc02.chunk.js.map