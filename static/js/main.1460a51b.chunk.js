(this.webpackJsonptodoforvladimir=this.webpackJsonptodoforvladimir||[]).push([[0],{16:function(e,t,n){e.exports={main:"Task_main__21tQX",inputBlock:"Task_inputBlock__I2QHl",btnAdd:"Task_btnAdd__2K39n",taskStyle:"Task_taskStyle__vaM3F",itemStyle:"Task_itemStyle__32DOX",checkAndDelete:"Task_checkAndDelete__1MT14",allBtnStyle:"Task_allBtnStyle__mfSZD",btnDelete:"Task_btnDelete__2XSxb",input1:"Task_input1__JzEz3",errorMessage:"Task_errorMessage__blHY4"}},87:function(e,t,n){"use strict";n.r(t);var a,c,i=n(0),s=n(9),r=n.n(s),l=n(37),o=n(19),d=n(42),j=n(13),b=n(17);!function(e){e.ADD_TASK="ADD-TASK",e.DELETE_TASK="DELETE-TASK",e.CHANGE_TASK_STATUS="CHANGE-TASK-STATUS",e.UPDATE_STATE="UPDATE-STATE"}(a||(a={})),function(e){e.All="all",e.Active="active",e.Completed="completed"}(c||(c={}));var u={tasks:[{id:Object(b.v1)(),task:"\u042f \u0443\u0437\u043d\u0430\u043b, \u0447\u0442\u043e \u0443 \u043c\u0435\u043d\u044f",isDone:!1},{id:Object(b.v1)(),task:"\u0415\u0441\u0442\u044c \u043e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u0440\u043e\u0434\u043d\u044f:",isDone:!0},{id:Object(b.v1)(),task:"\u0418 \u0442\u0440\u043e\u043f\u0438\u043d\u043a\u0430, \u0438 \u043b\u0435\u0441\u043e\u043a,",isDone:!1},{id:Object(b.v1)(),task:"\u0412 \u043f\u043e\u043b\u0435 \u2014 \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043b\u043e\u0441\u043e\u043a,",isDone:!0},{id:Object(b.v1)(),task:"\u0417\u0432\u0435\u0440\u0438, \u043f\u0442\u0438\u0446\u044b, \u0438 \u0436\u0443\u043a\u0438,",isDone:!1},{id:Object(b.v1)(),task:"\u041c\u0443\u0440\u0430\u0432\u044c\u0438 \u0438 \u043c\u043e\u0442\u044b\u043b\u044c\u043a\u0438\u2026",isDone:!0},{id:Object(b.v1)(),task:"\u0412\u0441\u0451, \u0447\u0442\u043e \u0440\u044f\u0434\u044b\u0448\u043a\u043e\u043c \u0441\u043e \u043c\u043d\u043e\u044e, \u2014",isDone:!1},{id:Object(b.v1)(),task:"\u042d\u0442\u043e \u0432\u0441\u0451 \u043c\u043e\u0451 \u0440\u043e\u0434\u043d\u043e\u0435!",isDone:!0},{id:Object(b.v1)(),task:"\u041a\u0430\u043a \u0436\u0435 \u043c\u043d\u0435 \u0432 \u043a\u0440\u0430\u044e \u0440\u043e\u0434\u043d\u043e\u043c",isDone:!1},{id:Object(b.v1)(),task:"\u041d\u0435 \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043e \u043d\u0451\u043c!",isDone:!0}]},k=function(e){return{type:a.ADD_TASK,payload:{task:e}}},O=function(e){return{type:a.UPDATE_STATE,payload:{tasks:e}}},T=function(e){return{type:a.DELETE_TASK,payload:{taskId:e}}},f=function(e,t){return{type:a.CHANGE_TASK_STATUS,payload:{taskId:e,isDone:t}}},A=n(121),p=n(16),v=n.n(p),D=n(41),_=n(120),h=n(122),S=n(119),x=n(63),m=n.n(x),C=n(6),E=function(e){var t=e.id,n=e.task,a=e.idx,c=e.isDone,i=e.onClickChangeCheckbox,s=e.onClickDeleteTask;return Object(C.jsx)("div",{className:v.a.taskStyle,children:Object(C.jsx)(D.b,{draggableId:t,index:a,children:function(e){return Object(C.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:v.a.itemStyle,children:[Object(C.jsx)("p",{children:n}),Object(C.jsxs)("div",{className:v.a.checkAndDelete,children:[Object(C.jsx)(h.a,{checked:c||!1,onChange:function(e){return i(t,e)},name:"checkedA"}),Object(C.jsx)(S.a,{onClick:s,"aria-label":"delete",className:v.a.margin,children:Object(C.jsx)(m.a,{})})]})]}))}},t)},t)};function g(e){var t=Object(o.c)(),n=Object(o.d)((function(e){return e.tasks.tasks})),a=Object(i.useState)(c.All),s=Object(l.a)(a,2),r=s[0],b=s[1],u=function(e){return r===c.Active?e.filter((function(e){return!e.isDone})):r===c.Completed?e.filter((function(e){return e.isDone})):e},k=function(e,n){var a=n.currentTarget.checked;t(f(e,a))},p=function(e){b(e)};return Object(C.jsxs)("div",{className:v.a.main,children:[Object(C.jsxs)("div",{className:v.a.inputBlock,children:[Object(C.jsx)(A.a,{id:"outlined-basic",label:"Task",variant:"outlined",value:e.title,onChange:e.onChangeHandler,className:v.a.input1}),Object(C.jsx)(_.a,{size:"small",variant:"outlined",className:v.a.btnAdd,onClick:e.addTask,children:"+"}),e.error&&Object(C.jsx)("div",{className:v.a.errorMessage,children:e.error})]}),Object(C.jsx)(D.a,{onDragEnd:function(e){if(e.destination){var a=Object(d.a)(n),c=a.splice(e.source.index,1),i=Object(l.a)(c,1)[0];a.splice(e.destination.index,0,i),t(O(a))}},children:Object(C.jsx)(D.c,{droppableId:"droppable",children:function(e){return Object(C.jsx)("div",Object(j.a)(Object(j.a)({},e.droppableProps),{},{ref:e.innerRef,children:Object(C.jsxs)("div",{children:[u(n).map((function(e,n){if(e.task)return Object(C.jsx)(E,{id:e.id,idx:n,isDone:e.isDone,task:e.task,onClickDeleteTask:function(){return n=e.id,void t(T(n));var n},onClickChangeCheckbox:k},e.id)})),e.placeholder]})}))}})}),Object(C.jsxs)("div",{className:v.a.allBtnStyle,children:[Object(C.jsx)(_.a,{onClick:function(){return p(c.All)},children:"All"}),Object(C.jsx)(_.a,{onClick:function(){return p(c.Active)},children:"Active"}),Object(C.jsx)(_.a,{onClick:function(){return p(c.Completed)},children:"Completed"})]})]})}function y(){var e=Object(o.c)(),t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),r=Object(l.a)(s,2),d=r[0],j=r[1];return Object(C.jsx)(g,{addTask:function(){""!==a.trim()?(e(k(a.trim())),c("")):j("Title is required")},onChangeHandler:function(e){j(""),c(e.currentTarget.value)},title:a,error:d})}var N=function(){return Object(C.jsx)(y,{})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},H=n(23),I=Object(H.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.ADD_TASK:return Object(j.a)(Object(j.a)({},e),{},{tasks:[].concat(Object(d.a)(e.tasks),[{id:Object(b.v1)(),task:t.payload.task,isDone:!1}])});case a.DELETE_TASK:return Object(j.a)(Object(j.a)({},e),{},{tasks:Object(d.a)(e.tasks.filter((function(e){return e.id!==t.payload.taskId})))});case a.CHANGE_TASK_STATUS:return Object(j.a)(Object(j.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload.taskId?Object(j.a)(Object(j.a)({},e),{},{isDone:t.payload.isDone}):e}))});case a.UPDATE_STATE:return Object(j.a)(Object(j.a)({},e),{},{tasks:t.payload.tasks});default:return e}}}),P=Object(H.e)(I);r.a.render(Object(C.jsx)(o.a,{store:P,children:Object(C.jsx)(N,{})}),document.getElementById("root")),K()}},[[87,1,2]]]);
//# sourceMappingURL=main.1460a51b.chunk.js.map