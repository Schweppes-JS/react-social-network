(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__18G08",profileImage:"ProfileInfo_profileImage__rr5o8",profilePhoto:"ProfileInfo_profilePhoto__2haaf",infoBlock:"ProfileInfo_infoBlock__2l0va",contact:"ProfileInfo_contact__ozi4H"}},294:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__4BxUn",posts:"MyPosts_posts__3q4MU"}},295:function(e,t,a){e.exports={item:"Post_item__ZwIwL",avatar:"Post_avatar__REdm0"}},296:function(e,t,a){"use strict";a.r(t),a.d(t,"ProfileContainer",(function(){return z}));var n=a(38),o=a(39),l=a(41),r=a(40),c=a(0),s=a.n(c),i=a(294),u=a.n(i),m=a(295),f=a.n(m),p=function(e){return s.a.createElement("div",{className:f.a.item},s.a.createElement("i",{id:f.a.avatar,className:"fas fa-user-astronaut"}),e.massage,s.a.createElement("div",null,s.a.createElement("span",null,"like",e.likesCount)))},b=a(90),E=a(131),d=a(67),v=a(25),h=a(20),k=Object(d.a)(300),g=Object(E.a)({form:"post"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(b.a,{name:"post",component:v.b,validate:[d.b,k]})),s.a.createElement("div",null,s.a.createElement(h.a,null,"Add post")))})),P=s.a.memo((function(e){var t=e.posts.map((function(e){return s.a.createElement(p,{key:e.id,massage:e.message,likesCount:e.likesCount})}));return s.a.createElement("div",{className:u.a.postsBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement(g,{onSubmit:function(t){e.addPost(t.post)}}),s.a.createElement("div",{className:u.a.posts},t))})),O=a(97),j=a(15),_=Object(j.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(O.a)(t))}}}))(P),y=a(98),S=a(43),w=a(293),N=a.n(w),B=a(30),I=a.n(B),M=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return s.a.createElement("form",{className:N.a.infoBlock,onSubmit:t},s.a.createElement("button",null,"Save"),n&&s.a.createElement("div",{className:I.a.formSummaryError},n),s.a.createElement("span",null,s.a.createElement("b",null,"Full name"),": ",Object(v.c)("Full name","fullName",[],v.a)),s.a.createElement("span",null,s.a.createElement("b",null,"Looking for a job"),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),s.a.createElement("span",null,s.a.createElement("b",null,"My professional skills"),": ",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),s.a.createElement("div",{className:N.a.contactsBlock},s.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return s.a.createElement("div",{key:e,className:N.a.contact},s.a.createElement("b",null,e,":",Object(v.c)(e,"contacts."+e,[],v.a)))}))),s.a.createElement("span",null,s.a.createElement("b",null,"About me"),":",Object(v.c)("About Me","aboutMe",[],v.b)))})),A=function(e){var t=Object(c.useState)(!1),a=Object(y.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),r=Object(y.a)(l,2),i=r[0],u=r[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return s.a.createElement(s.a.Fragment,null,!n&&s.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"----"),n&&s.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(i)},autoFocus:!0,value:i}))},C=a(109),F=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return s.a.createElement("div",{className:N.a.infoBlock},a&&s.a.createElement("button",{onClick:n},"Edit"),s.a.createElement("p",null,s.a.createElement("b",null,"Full name"),": ",t.fullName),s.a.createElement("p",null,s.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&s.a.createElement("p",null,s.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),s.a.createElement("div",{className:N.a.contactsBlock},s.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return s.a.createElement(x,{key:e,contacTitle:e,contactValue:t.contacts[e]})}))),s.a.createElement("p",null,s.a.createElement("b",null,"About me"),": ",t.aboutMe))},x=function(e){var t=e.contacTitle,a=e.contactValue;return s.a.createElement("p",{className:N.a.contact},t,": ",s.a.createElement("i",null,a))},J=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,l=e.savePhoto,r=e.saveProfile,i=Object(c.useState)(!1),u=Object(y.a)(i,2),m=u[0],f=u[1];if(!t)return s.a.createElement(S.a,null);return s.a.createElement("div",null,s.a.createElement("div",{className:N.a.descriptionBlock},s.a.createElement("img",{src:t.photos.large||C.a,alt:"user avatar",className:N.a.profilePhoto}),o&&s.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),m?s.a.createElement(M,{onSubmit:function(e){r(e).then((function(){f(!1)}))},initialValues:t,profile:t}):s.a.createElement(F,{profile:t,isOwner:o,goToEditMode:function(){return f(!0)}}),s.a.createElement("p",null,s.a.createElement("b",null,"Status"),": ",s.a.createElement(A,{status:a,updateStatus:n}))))},T=function(e){return s.a.createElement("div",null,s.a.createElement(J,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),s.a.createElement(_,null))},U=a(9),D=a(8),z=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).refreshProfile=function(){var t=e.props.match.params.userId;t||(t=e.props.authorizedUserId)||e.props.history.push("/login"),e.props.getUserProfile(t),e.props.getStatus(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(T,Object.assign({},this.props,{isOwner:!this.props.match.params.userId})))}}]),a}(c.Component);t.default=Object(D.d)(Object(j.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.g,savePhoto:O.e,saveProfile:O.f}),U.f)(z)}}]);
//# sourceMappingURL=3.b633940d.chunk.js.map