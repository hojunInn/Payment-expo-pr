(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{321:function(e,t,n){"use strict";n.d(t,"a",(function(){return xe}));var a,r,i,o,l,c,u,E,s,m,d,f,y,g,p,A,S,b,T,C,h,I,P,R,O,_,N,D,w,L,B,v,V,M,k,x,Y=n(52),W=n(0),H=n.n(W),j=new Y.HttpLink({uri:"http://localhost:1337/graphql"}),U=new Y.ApolloClient({link:j,cache:new Y.InMemoryCache}),G=n(247),F=n(432),z=n(20),K=n.n(z),Q=n(2),$=n(3),q=n(21),X=n(81),J=n(51),Z=n(153),ee=n(109),te=n(43),ne=n(184),ae=n(433),re=n(311),ie=n(125),oe=n.n(ie);function le(){var e=oe()(["\n    mutation updateRoutinePayment($input: paymentInput) {\n  updateRoutinePayment(input: $input) {\n    success\n  }\n}\n    "]);return le=function(){return e},e}function ce(){var e=oe()(["\n    mutation routinePayment($input: paymentInput) {\n  routinePayment(input: $input) {\n    success\n  }\n}\n    "]);return ce=function(){return e},e}function ue(){var e=oe()(["\n    mutation initPayment($input: initPaymentInput) {\n  initPayment(input: $input) {\n    merchant_uid\n  }\n}\n    "]);return ue=function(){return e},e}function Ee(){var e=oe()(["\n    mutation refundPayment($input: paymentInput) {\n  refundPayment(input: $input) {\n    success\n  }\n}\n    "]);return Ee=function(){return e},e}function se(){var e=oe()(["\n    mutation checkValidation($input: paymentInput) {\n  checkValidation(input: $input) {\n    success\n  }\n}\n    "]);return se=function(){return e},e}!function(e){e.Survey="SURVEY",e.Poll="POLL",e.Quiz="QUIZ",e.Qna="QNA",e.Ideabox="IDEABOX",e.Board="BOARD"}(a||(a={})),function(e){e.Winner="WINNER",e.Earlybird="EARLYBIRD",e.Level="LEVEL",e.All="ALL",e.Limit="LIMIT"}(r||(r={})),function(e){e.Open="OPEN",e.Closed="CLOSED",e.Blocked="BLOCKED",e.Deleted="DELETED",e.DeleteByReport="DELETE_BY_REPORT",e.KeepByReport="KEEP_BY_REPORT"}(i||(i={})),function(e){e.Trial="TRIAL",e.Standard="STANDARD",e.Basic="BASIC",e.Enterprise="ENTERPRISE",e.Academic="ACADEMIC",e.Partner="PARTNER"}(o||(o={})),function(e){e.Monthly="MONTHLY",e.Yearly="YEARLY",e.Custom="CUSTOM",e.None="NONE"}(l||(l={})),function(e){e.Active="ACTIVE",e.Inactive="INACTIVE",e.Pending="PENDING",e.Terminated="TERMINATED"}(c||(c={})),function(e){e.SysAppUpdate="SYS_APP_UPDATE",e.SysNotice="SYS_NOTICE",e.WsAnnouncement="WS_ANNOUNCEMENT",e.WsAdminAccess="WS_ADMIN_ACCESS",e.GroupNewActivity="GROUP_NEW_ACTIVITY",e.GroupInvitation="GROUP_INVITATION",e.GroupAnnouncement="GROUP_ANNOUNCEMENT",e.GroupOwnershipTransfer="GROUP_OWNERSHIP_TRANSFER",e.GroupReleased="GROUP_RELEASED",e.ActivityLike="ACTIVITY_LIKE",e.ActivityComment="ACTIVITY_COMMENT",e.ActivityPoint="ACTIVITY_POINT",e.Activity_24HrDeadline="ACTIVITY_24HR_DEADLINE",e.Activity_1HrDeadline="ACTIVITY_1HR_DEADLINE",e.ActivityClosed="ACTIVITY_CLOSED",e.ActivityReply="ACTIVITY_REPLY",e.ActivityCommentLike="ACTIVITY_COMMENT_LIKE",e.ActivityMentioned="ACTIVITY_MENTIONED",e.IdeaBoxNewProposal="IDEA_BOX_NEW_PROPOSAL",e.IdeaBoxProposalLike="IDEA_BOX_PROPOSAL_LIKE",e.IdeaBoxProposalComment="IDEA_BOX_PROPOSAL_COMMENT",e.QnaAnswer="QNA_ANSWER"}(u||(u={})),function(e){e.Private="PRIVATE",e.Protected="PROTECTED",e.Open="OPEN"}(E||(E={})),function(e){e.Open="OPEN",e.Deleted="DELETED",e.DeleteByReport="DELETE_BY_REPORT",e.KeepByReport="KEEP_BY_REPORT"}(s||(s={})),function(e){e.LikeGroup="LIKE_GROUP",e.LikeActivity="LIKE_ACTIVITY",e.LikePost="LIKE_POST",e.ReportGroup="REPORT_GROUP",e.ReportActivity="REPORT_ACTIVITY",e.ReportPost="REPORT_POST",e.ReadGroup="READ_GROUP",e.ReadActivity="READ_ACTIVITY",e.ReadPost="READ_POST"}(m||(m={})),function(e){e.System="SYSTEM",e.Workspace="WORKSPACE",e.Group="GROUP",e.Activity="ACTIVITY"}(d||(d={})),function(e){e.Mute="MUTE",e.Voice="VOICE"}(f||(f={})),function(e){e.Administrator="ADMINISTRATOR",e.Editor="EDITOR",e.Auditor="AUDITOR",e.User="USER",e.Guest="GUEST"}(y||(y={})),function(e){e.System="SYSTEM",e.Workspace="WORKSPACE",e.Group="GROUP",e.Activity="ACTIVITY"}(g||(g={})),function(e){e.Pending="PENDING",e.Normal="NORMAL",e.Block="BLOCK",e.Leave="LEAVE"}(p||(p={})),function(e){e.Application="APPLICATION",e.System="SYSTEM",e.External="EXTERNAL"}(A||(A={})),function(e){e.Krw="KRW",e.Usd="USD",e.Eur="EUR",e.Aud="AUD",e.Cad="CAD",e.Hkd="HKD",e.Chf="CHF",e.Gbp="GBP",e.Jpy="JPY",e.Cny="CNY",e.Btc="BTC",e.Eth="ETH",e.Boa="BOA"}(S||(S={})),function(e){e.SurveyResponse="SURVEY_RESPONSE",e.QuizResponse="QUIZ_RESPONSE",e.PollResponse="POLL_RESPONSE",e.BoardArticle="BOARD_ARTICLE",e.IdeaboxProposal="IDEABOX_PROPOSAL",e.QnaQuestion="QNA_QUESTION",e.CommentOnActivity="COMMENT_ON_ACTIVITY",e.CommentOnPost="COMMENT_ON_POST",e.ReplyOnComment="REPLY_ON_COMMENT"}(b||(b={})),function(e){e.Open="OPEN",e.DeleteByReport="DELETE_BY_REPORT",e.KeepByReport="KEEP_BY_REPORT"}(T||(T={})),function(e){e.SingleChoice="SINGLE_CHOICE",e.MultipleChoice="MULTIPLE_CHOICE",e.Scale="SCALE",e.ShortAnswer="SHORT_ANSWER",e.Text="TEXT",e.Pagebreak="PAGEBREAK"}(C||(C={})),function(e){e.Open="OPEN",e.Delete="DELETE"}(h||(h={})),function(e){e.Reward="REWARD",e.Transfer="TRANSFER",e.Purchase="PURCHASE"}(I||(I={})),function(e){e.Pending="PENDING",e.Verified="VERIFIED",e.Canceled="CANCELED"}(P||(P={})),function(e){e.Standard="STANDARD",e.Trial="TRIAL",e.Academic="ACADEMIC",e.Enterprise="ENTERPRISE",e.Basic="BASIC",e.Partner="PARTNER"}(R||(R={})),function(e){e.New="NEW",e.Active="ACTIVE",e.Suspended="SUSPENDED",e.Inactive="INACTIVE",e.Deleted="DELETED"}(O||(O={})),function(e){e.Open="OPEN",e.Deleted="DELETED"}(_||(_={})),function(e){e.DisagreeAgree="DISAGREE_AGREE",e.NegativePositive="NEGATIVE_POSITIVE",e.NeverAlways="NEVER_ALWAYS",e.UnlikelyLikely="UNLIKELY_LIKELY",e.HateLike="HATE_LIKE",e.Custom="CUSTOM"}(N||(N={})),function(e){e.System="SYSTEM",e.Workspace="WORKSPACE",e.Group="GROUP"}(D||(D={})),function(e){e.New="NEW",e.Sent="SENT",e.Verified="VERIFIED",e.Canceled="CANCELED",e.Pending="PENDING"}(w||(w={})),function(e){e.Admin="ADMIN",e.Member="MEMBER"}(L||(L={})),function(e){e.Market="MARKET",e.Technology="TECHNOLOGY",e.Management="MANAGEMENT",e.Social="SOCIAL"}(B||(B={})),function(e){e.Like="LIKE",e.Best="BEST",e.Sad="SAD",e.Happy="HAPPY",e.Angry="ANGRY"}(v||(v={})),function(e){e.PrivacyViolation="PRIVACY_VIOLATION",e.ConfidentialityBreach="CONFIDENTIALITY_BREACH",e.Defamation="DEFAMATION",e.IllegalContent="ILLEGAL_CONTENT",e.FakeInformation="FAKE_INFORMATION",e.Other="OTHER"}(V||(V={})),function(e){e.Bankwire="BANKWIRE",e.DirectPayment="DIRECT_PAYMENT",e.CreditCard="CREDIT_CARD",e.Voucher="VOUCHER",e.Paypal="PAYPAL"}(M||(M={})),function(e){e.Live="LIVE",e.Preview="PREVIEW"}(k||(k={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(x||(x={}));var me=Object(Y.gql)(se());function de(e){return Y.useMutation(me,e)}Object(Y.gql)(Ee());var fe=Object(Y.gql)(ue());var ye=Object(Y.gql)(ce());Object(Y.gql)(le());var ge,pe=function(e){return 0===e?"0":e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};!function(e){e.point_100000="100,000_Abowa_Points",e.point_200000="200,000_Abowa_Points",e.point_300000="300,000_Abowa_Points",e.point_500000="500,000_Abowa_Points",e.point_1000000="1,000,000_Abowa_Points",e.point_3000000="3,000,000_Abowa_Points",e.other="other",e.monthly="Monthly_Plan",e.yearly="Yearly_Plan"}(ge||(ge={}));var Ae=function(e){var t=ge.other;switch(e){case 1e5:t=ge.point_100000;break;case 2e5:t=ge.point_200000;break;case 3e5:t=ge.point_300000;break;case 5e5:t=ge.point_500000;break;case 1e6:t=ge.point_1000000;break;case 3e6:t=ge.point_3000000}return t},Se=function(){var e=Object(W.useState)(0),t=K()(e,2),n=t[0],a=t[1],r=Object(W.useState)(!1),i=K()(r,2),o=i[0],l=i[1],c=de(),u=K()(c,1)[0],E=Object(ee.a)(),s=(Object(W.useContext)(re.a),{pg:"html5_inicis",pay_method:"card",merchant_uid:"hjinn"+(new Date).getTime(),name:Ae(n),amount:String(n),buyer_email:"TestEmail@gmail.com",buyer_name:"TEST_USER_NAME",buyer_tel:"010-4242-4242",buyer_addr:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \uc5b4\ub518\uac00"}),m=function(){IMP.request_pay(s,(function(e){var t,n;console.log(e),t=e.imp_uid,n=e.merchant_uid,u({variables:{input:{imp_uid:t,merchant_uid:n}}}).then((function(e){return console.log(e)}))}))};return H.a.createElement(H.a.Fragment,null,H.a.createElement(te.c,{containerStyle:{backgroundColor:"#ffffff",borderBottomWidth:1},rightComponent:H.a.createElement(te.a,{onPress:function(){return Z.a.openURL("https//localhost:19006")},icon:H.a.createElement(te.d,{type:"font-awesome",size:30,name:"close",color:"black"}),type:"clear"}),centerComponent:H.a.createElement(q.a,{style:{fontSize:20,fontWeight:"700",color:"black"}},"\ud3ec\uc778\ud2b8 \ucda9\uc804")}),H.a.createElement($.a,{style:{justifyContent:"center",alignItems:"center",backgroundColor:"white",height:E.height}},H.a.createElement(ne.a,{showsVerticalScrollIndicator:!1,style:{backgroundColor:"white",paddingHorizontal:10}},H.a.createElement(ae.a,{style:be.container},H.a.createElement($.a,null,H.a.createElement(te.a,{title:"\ud3ec\uc778\ud2b8 \uad6c\ub9e4",type:"clear",titleStyle:{color:"white",fontWeight:"800"},buttonStyle:{backgroundColor:"#2fb5b5"},containerStyle:{width:200,alignSelf:"center",marginBottom:20}}),H.a.createElement(q.a,{style:{alignSelf:"center"}},"\uc77c\uc815\uc758 \uae08\uc561\uc744 \uad6c\ub9e4\ud558\ub294 \uacb0\uc81c\ubc29\uc2dd"))),H.a.createElement(ae.a,{style:be.container},H.a.createElement($.a,null,H.a.createElement(q.a,{style:{alignSelf:"center"}},"\uad6c\ub9e4\ud558\uc2e4 \ud3ec\uc778\ud2b8\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),H.a.createElement(X.a,{data:[10,20,30,50,100,300],renderItem:function(e){var t=e.item;e.index;return H.a.createElement(H.a.Fragment,null,H.a.createElement(te.a,{type:"clear",title:t+"\ub9cc\uc6d0",titleStyle:{color:"black",fontSize:12},onPress:function(){return a(1e4*t)},containerStyle:be.priceTag}))},horizontal:!0,style:{marginVertical:15,alignSelf:"center"}}),H.a.createElement($.a,{style:{flexDirection:"row",justifyContent:"center",alignItems:"center"}},H.a.createElement(te.a,{type:"clear",title:"\ub2e4\ub978\uae08\uc561",titleStyle:{alignSelf:"center",textDecorationLine:"underline",color:o?"#2fb5b5":"#00000060"},onPress:function(){return l(!o)}}),H.a.createElement(te.d,{name:"check-circle",color:o?"#2fb5b5":"#00000060"})),o&&H.a.createElement($.a,{style:be.otherPriceContainer},H.a.createElement(q.a,{style:{alignSelf:"center",marginBottom:15}},"\uad6c\ub9e4\ud558\uc2e4 \ud3ec\uc778\ud2b8\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),H.a.createElement(J.a,{selectionColor:"#000000",placeholder:"0",placeholderTextColor:"#5B667625",style:[be.inputFont,{color:0===n?"#00000030":"#2fb5b5"}],textAlign:"center",onFocus:function(){return a(0)},clearTextOnFocus:!0,value:pe(n),maxLength:10,onChangeText:function(e){a(Number(e.replaceAll(/,/gi,"")))}}),H.a.createElement(te.b,{style:{height:1}})))),H.a.createElement(te.a,{title:"\uacb0\uc81c",disabled:n<=0,titleStyle:{color:"white",fontWeight:"800"},buttonStyle:{width:132,backgroundColor:"#2fb5b5",alignSelf:"center"},onPress:function(){return m()}}))))},be=Q.a.create({container:{padding:8,width:570,height:226,alignItems:"center",justifyContent:"center",elevation:8,borderRadius:8,marginVertical:25},rowContainer:{flexDirection:"row",marginVertical:15},priceTag:{flexDirection:"row",marginHorizontal:5,borderRadius:20,borderColor:"#00000010",borderWidth:.5},otherPriceContainer:{width:190,height:90,borderBottomColor:"#00000030",justifyContent:"center",alignItems:"center",alignSelf:"center"},inputFont:{fontWeight:"400",lineHeight:36,letterSpacing:-.3,fontSize:34,textAlign:"center",marginBottom:10}}),Te=Object(F.a)(),Ce=function(){return H.a.createElement(Te.Navigator,{headerMode:"none"},H.a.createElement(Te.Screen,{name:"PayPointHomeScreen",component:Se}))},he=n(10),Ie=n(67),Pe=n(431),Re=function(e){return String(e.getFullYear())+"\ub144 "+String(e.getMonth())+"\uc6d4 "+String(e.getDate())+"\uc77c"},Oe=n(320),_e=n.n(Oe);window.$=window.jQuery=_e.a;var Ne=function(e){var t,n=e.navigation,a=(e.route,Object(W.useState)()),r=K()(a,2),i=(r[0],r[1],Object(W.useState)(0)),o=K()(i,2),l=o[0],c=o[1],u=Object(W.useState)(!1),E=K()(u,2),s=E[0],m=E[1],d=Object(W.useState)(0),f=K()(d,2),y=f[0],g=f[1],p=Object(W.useState)(0),A=K()(p,2),S=A[0],b=A[1],T=Object(W.useState)(new Date),C=K()(T,2),h=C[0],I=C[1],P=Object(W.useState)(new Date),R=K()(P,2),O=R[0],_=R[1],N=Object(W.useState)(!1),D=K()(N,2),w=D[0],L=D[1],B=Y.useMutation(ye,t),v=(K()(B,1)[0],de()),V=(K()(v,1)[0],function(e){return Y.useMutation(fe,e)}()),M=K()(V,1)[0],k=Object(ee.a)(),x={pg:"html5_inicis",pay_method:"card",merchant_uid:"hj"+new Date,name:"yearly",amount:String(S),buyer_email:"TestEmail@gmail.com",buyer_name:"hj",buyer_tel:"010-4242-4242",buyer_addr:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \uc0d8\uc131\ub3d9"},j=function(e){if("monthly"===e&&(L(!1)(x.customer_uid="hj"),x.name=e),M({variables:{input:{user_name:"hj"}}}),"web"!==he.a.OS){var t={userCode:"imp10942072",data:x,type:"payment"},n=JSON.stringify(t);window.ReactNativeWebView.postMessage(n)}};Object(W.useEffect)((function(){I(new Date);var e=h;s?(g(5400),e.setFullYear(h.getFullYear()+1),_(e)):(g(6e3),e.setMonth(h.getMonth()+1),_(e))}),[s]);return Object(W.useEffect)((function(){b(function(){var e=l*y;return s?12*e:e}())}),[l,y]),H.a.createElement(H.a.Fragment,null,H.a.createElement(te.c,{containerStyle:{borderBottomWidth:1,backgroundColor:"#ffffff"},rightComponent:H.a.createElement(te.a,{onPress:function(){return n.goBack()},icon:H.a.createElement(te.d,{size:30,name:"close",color:"black"}),type:"clear"}),centerComponent:H.a.createElement(q.a,{style:{fontSize:20,fontWeight:"700",color:"black"}},"\uad6c\ub3c5")}),H.a.createElement($.a,{style:{marginBottom:20,justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"#ffffff",width:k.width}},H.a.createElement(Ie.a,{showsVerticalScrollIndicator:!1,style:{paddingHorizontal:10,width:k.width}},H.a.createElement(ae.a,{style:De.bigSurface},H.a.createElement(q.a,{style:{alignSelf:"center",marginBottom:30}},"\uba87\uba85\uc758 \uc778\uc6d0\uc774 \uc0ac\uc6a9\ud558\ub098\uc694?"),H.a.createElement(J.a,{selectionColor:"#000000",placeholder:"0",placeholderTextColor:"#5B667625",style:[De.inputFont,{color:l?"#2fb5b5":"#5B667625"}],keyboardType:"number-pad",textAlign:"center",clearTextOnFocus:!0,onFocus:function(){return c(0)},value:pe(l),maxLength:10,onChangeText:function(e){c(Number(e.replaceAll(/,/gi,"")))}}),H.a.createElement(te.b,{style:{height:1,width:189,marginTop:20,alignSelf:"center"}})),H.a.createElement(ae.a,{style:De.bigSurface},H.a.createElement($.a,{style:De.otherPriceContainer},H.a.createElement(q.a,{style:{marginBottom:30,textAlign:"center"}},"\uacb0\uc81c\uc8fc\uae30\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),H.a.createElement(q.a,{style:De.inputFont},pe(y),"\uc6d0"),H.a.createElement(q.a,{style:De.subtitle},"\uba64\ubc84\ub2f9 \ud55c\ub2ec\uc694\uae08")),H.a.createElement($.a,{style:{flexDirection:"row"}},H.a.createElement(q.a,{style:{color:s?"#ADB2BA":"black"}},"\ub9e4\ub2ec"),H.a.createElement(Pe.a,{value:s,onValueChange:m,color:"#2fb5b5",trackColor:"#2fb5b580",thumbColor:"#2fb5b5",style:{marginHorizontal:10}}),H.a.createElement(q.a,{style:{color:s?"black":"#ADB2BA"}},"\ub9e4\ub144"))),H.a.createElement(ae.a,{style:De.bigSurface},H.a.createElement($.a,{style:De.otherPriceContainer},H.a.createElement(q.a,{style:{marginBottom:30,textAlign:"center"}},"\ucd1d \uacb0\uc81c\ud558\uc2e4 \uae08\uc561(\ubd80\uac00\uc138 \ud3ec\ud568)"),H.a.createElement(q.a,{style:De.inputFont},pe(S),"\uc6d0"),H.a.createElement(q.a,{style:De.subtitle},Re(h)+" ~ "+Re(O)))),H.a.createElement($.a,{style:{flexDirection:"row",alignSelf:"center"}},H.a.createElement(ae.a,{style:[De.surface,{marginRight:20}]},H.a.createElement(te.a,{title:"\uc218\ub3d9\uacb0\uc81c",type:"clear",titleStyle:De.buttonTitleFont,buttonStyle:{backgroundColor:"#ADB2BA",width:130},onPress:function(){j("yearly")},containerStyle:{marginBottom:20}}),H.a.createElement(q.a,null,"\ub9e4\uc6d4 \uccad\uad6c\ub41c \uae08\uc561\uc744 \uc218\ub3d9\uc73c\ub85c \uc9c1\uc811 \uacb0\uc81c")),H.a.createElement(ae.a,{style:De.surface},H.a.createElement(te.a,{title:"\uc790\ub3d9\uacb0\uc81c",type:"clear",titleStyle:De.buttonTitleFont,buttonStyle:{backgroundColor:"#2fb5b5",width:130},onPress:function(){j("monthly")},containerStyle:{marginBottom:20}}),H.a.createElement(q.a,{style:{textAlign:"center"}},"\ub9e4\uc6d4 \uccad\uad6c\ub41c \uae08\uc561\uc744 \uc9c0\uc815\ub41c \uacb0\uc81c\ubc29\uc2dd\uc73c\ub85c \uc790\ub3d9\uacb0\uc81c")),w&&H.a.createElement(ae.a,{style:De.bigSurface},H.a.createElement($.a,{style:De.otherPriceContainer},H.a.createElement(q.a,{style:{marginBottom:30,textAlign:"center"}},"\uc790\ub3d9\uacb0\uc81c\uc77c\n"+(s?"\ub9e4\ub144":"\ub9e4\uc6d4")),H.a.createElement(q.a,{style:De.inputFont},"1\uc77c"),H.a.createElement(q.a,{style:De.subtitle},Re(h)+" ~ "+Re(O))))))))},De=Q.a.create({surface:{padding:8,width:280,height:226,alignItems:"center",justifyContent:"center",elevation:8,borderRadius:8,marginVertical:25},bigSurface:{padding:8,width:570,height:226,alignItems:"center",justifyContent:"center",alignSelf:"center",elevation:8,borderRadius:8,marginVertical:25},otherPriceContainer:{width:300,height:130,borderBottomColor:"#00000030"},inputFont:{fontWeight:"400",lineHeight:36,letterSpacing:-.3,fontSize:34,color:"#2fb5b5",textAlign:"center",marginBottom:10},subtitle:{fontSize:16,color:"#ADB2BA",lineHeight:24,letterSpacing:.2,alignSelf:"center"},buttonTitleFont:{fontWeight:"700",fontSize:14,lineHeight:16,letterSpacing:.5,color:"white"},buttonFont:{fontSize:12,color:"black"}}),we=function(e){var t=e.navigation,n=(e.route,function(e){return H.a.createElement($.a,{style:{marginHorizontal:15,marginVertical:10}},H.a.createElement(q.a,{style:Be.titleFont},e.title),H.a.createElement($.a,{style:Be.smallContainer},H.a.createElement(q.a,null,e.description),e.buttonTitle&&H.a.createElement(te.a,{buttonStyle:Be.ButtonTag,type:"clear",title:e.buttonTitle,onPress:e.buttonPressed,titleStyle:Be.buttonFont})))});return H.a.createElement($.a,{style:{justifyContent:"center",alignItems:"center",backgroundColor:"white",flex:1}},H.a.createElement(ne.a,{showsVerticalScrollIndicator:!1},H.a.createElement(ae.a,{style:Be.container},n({title:"\uc0ac\uc6a9\uc911\uc778 \uc694\uae08\uc81c",description:"\ud504\ub9ac\ubbf8\uc5c4 \uc694\uae08\uc81c",buttonTitle:"\uad6c\ub3c5\ucde8\uc18c",buttonPressed:function(){}}),H.a.createElement($.a,{style:{flexDirection:"row",justifyContent:"space-between"}},n({title:"\uc0c1\ud0dc",description:"\ud65c\uc131"}),n({title:"\ub77c\uc774\uc120\uc2a4",description:"17\uac1c",buttonTitle:"\ubcc0\uacbd",buttonPressed:function(){t.navigate("PaySubscribe")}}),n({title:"\uacb0\uc81c\ubc29\ubc95",description:"\uc790\ub3d9\uacb0\uc81c"}),n({title:"\uc608\uc0c1 \uc6d4\uac04 \uccad\uad6c\uc561",description:"102,000\uc6d0"}))),H.a.createElement($.a,{style:{flexDirection:"row",padding:10,justifyContent:"space-between",marginBottom:30}},H.a.createElement(q.a,{style:{fontWeight:"500",fontSize:24,lineHeight:24}},"\uac70\ub798 \ub0b4\uc5ed"),H.a.createElement(te.a,{style:[Be.Tag,{borderWidth:0,backgroundColor:"#5B667610"}],icon:H.a.createElement(te.d,{name:"tune",color:"#00000060"}),title:"\ud544\ud130",type:"clear",titleStyle:{fontWeight:"700",fontSize:14,lineHeight:16,letterSpacing:.5,color:"#00000060"}})),H.a.createElement(X.a,{data:Le,renderItem:function(e){var t=e.item;e.index;return H.a.createElement($.a,{style:Be.rowContainer},H.a.createElement(q.a,{style:{textAlign:"left",width:250}},Re(t.date)),H.a.createElement($.a,{style:{flexDirection:"row",justifyContent:"space-between",flex:1}},H.a.createElement(q.a,{style:{textAlign:"left"}},t.description),H.a.createElement(q.a,{style:{textAlign:"right"}},t.price)))},contentContainerStyle:{width:779,borderColor:"#00000030",borderWidth:.5},ListHeaderComponent:H.a.createElement(H.a.Fragment,null,H.a.createElement($.a,{style:[Be.rowContainer,{backgroundColor:"#5B6676"}]},H.a.createElement(q.a,{style:{color:"white",textAlign:"left"}},Re(new Date(2020,1,3))," ~ ",Re(new Date(2121,2,5))),H.a.createElement($.a,{style:{flexDirection:"row"}},H.a.createElement(te.a,{containerStyle:Be.Tag,onPress:function(){},title:"\uc800\uc7a5",type:"clear",titleStyle:{color:"white",fontSize:14}}),H.a.createElement(te.a,{containerStyle:Be.Tag,onPress:function(){},title:"\ud504\ub9b0\ud2b8",type:"clear",titleStyle:{color:"white",fontSize:14}}))),H.a.createElement($.a,{style:Be.row2},H.a.createElement(q.a,{style:{textAlign:"right"}},"\ubbf8\uacb0\uc81c \uc794\uc561 : 37,284\uc6d0")),H.a.createElement($.a,{style:Be.rowContainer},H.a.createElement(q.a,{style:{textAlign:"left",width:250}},"\ub0a0\uc9dc"),H.a.createElement($.a,{style:{flexDirection:"row",justifyContent:"space-between",flex:1}},H.a.createElement(q.a,{style:{textAlign:"left"}},"\uc124\uba85"),H.a.createElement(q.a,{style:{textAlign:"right"}},"\uae08\uc561"))))})))},Le=[{date:new Date(2020,1,31),description:"\uc790\ub3d9\uacb0\uc81c",price:5e4},{date:new Date(1990,12,31),description:"\uc218\ub3d9\uacb0\uc81c Vis** **** ****",price:15e4},{date:new Date(2002,6,29),description:"\uc815\uae30\uacb0\uc81c CustomerID: HJ",price:23300},{date:new Date(2030,11,21),description:"\uc218\ub3d9\uacb0\uc81c Vis** **** ****",price:3e3},{date:new Date(2021,2,28),description:"\uc218\ub3d9\uacb0\uc81c Vis** **** ****",price:15500}],Be=Q.a.create({rowContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:46,borderBottomColor:"#00000030",borderBottomWidth:.5,padding:5},smallContainer:{flexDirection:"row",alignItems:"center"},row2:{flexDirection:"row",justifyContent:"flex-end",alignItems:"center",height:46,borderBottomColor:"#00000030",borderBottomWidth:.5,padding:5},container:{width:550,paddingHorizontal:50,paddingVertical:30,marginVertical:30,alignSelf:"center"},Tag:{marginHorizontal:5,borderRadius:20,borderColor:"white",borderWidth:.1,height:25,justifyContent:"center"},TagFont:{fontWeight:"700",fontSize:14,lineHeight:24,color:"#979797",textAlign:"left"},ButtonTag:{marginHorizontal:5,borderRadius:20,borderColor:"#979797",height:25,borderWidth:.1},titleFont:{fontWeight:"700",fontSize:14,lineHeight:24,color:"#979797",textAlign:"left"},buttonFont:{fontSize:12,color:"black"}}),ve=Object(F.a)(),Ve=function(){return H.a.createElement(ve.Navigator,{headerMode:"none"},H.a.createElement(ve.Screen,{name:"SubscribePlanHome",component:we}),H.a.createElement(ve.Screen,{name:"PaySubscribe",component:Ne}))},Me=function(){var e=window.location.search.split("=")[1];return H.a.createElement(G.a,null,"pay"===e?H.a.createElement(Ce,null):H.a.createElement(Ve,null))},ke=n(322);function xe(){return console.log("Host Start",window.location.hostname,":",window.location.origin),H.a.createElement(Y.ApolloProvider,{client:U},H.a.createElement(ke.b,null,H.a.createElement(Me,null)))}},332:function(e,t,n){e.exports=n(413)}},[[332,1,2]]]);
//# sourceMappingURL=app.c1a651e9.chunk.js.map