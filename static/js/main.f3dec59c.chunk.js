(this.webpackJsonptodoforvladimir=this.webpackJsonptodoforvladimir||[]).push([[0],{14:function(e,t,a){e.exports={main:"Task_main__21tQX",inputBlock:"Task_inputBlock__I2QHl",btnAdd:"Task_btnAdd__2K39n",taskStyle:"Task_taskStyle__vaM3F",itemStyle:"Task_itemStyle__32DOX",allBtnStyle:"Task_allBtnStyle__mfSZD",btnDelete:"Task_btnDelete__2XSxb",input1:"Task_input1__JzEz3",errorMessage:"Task_errorMessage__blHY4"}},88:function(e,t,a){"use strict";a.r(t);var n,c,i=a(0),s=a(9),r=a.n(s),l=a(13),o=a(42),d=a(37),j=a(19),u=a(41),b=a(17);!function(e){e.ADD_TASK="ADD-TASK",e.DELETE_TASK="DELETE-TASK",e.CHANGE_TASK_STATUS="CHANGE-TASK-STATUS",e.UPDATE_STATE="UPDATE-STATE"}(n||(n={})),function(e){e.All="all",e.Active="active",e.Completed="completed"}(c||(c={}));var O={tasks:[{id:Object(b.v1)(),task:"\u042f \u0443\u0437\u043d\u0430\u043b, \u0447\u0442\u043e \u0443 \u043c\u0435\u043d\u044f",isDone:!1},{id:Object(b.v1)(),task:"\u0415\u0441\u0442\u044c \u043e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u0440\u043e\u0434\u043d\u044f:",isDone:!0},{id:Object(b.v1)(),task:"\u0418 \u0442\u0440\u043e\u043f\u0438\u043d\u043a\u0430, \u0438 \u043b\u0435\u0441\u043e\u043a,",isDone:!1},{id:Object(b.v1)(),task:"\u0412 \u043f\u043e\u043b\u0435 \u2014 \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043b\u043e\u0441\u043e\u043a,",isDone:!0},{id:Object(b.v1)(),task:"\u0417\u0432\u0435\u0440\u0438, \u043f\u0442\u0438\u0446\u044b, \u0438 \u0436\u0443\u043a\u0438,",isDone:!1},{id:Object(b.v1)(),task:"\u041c\u0443\u0440\u0430\u0432\u044c\u0438 \u0438 \u043c\u043e\u0442\u044b\u043b\u044c\u043a\u0438\u2026",isDone:!0},{id:Object(b.v1)(),task:"\u0412\u0441\u0451, \u0447\u0442\u043e \u0440\u044f\u0434\u044b\u0448\u043a\u043e\u043c \u0441\u043e \u043c\u043d\u043e\u044e, \u2014",isDone:!1},{id:Object(b.v1)(),task:"\u042d\u0442\u043e \u0432\u0441\u0451 \u043c\u043e\u0451 \u0440\u043e\u0434\u043d\u043e\u0435!",isDone:!0},{id:Object(b.v1)(),task:"\u041a\u0430\u043a \u0436\u0435 \u043c\u043d\u0435 \u0432 \u043a\u0440\u0430\u044e \u0440\u043e\u0434\u043d\u043e\u043c",isDone:!1},{id:Object(b.v1)(),task:"\u041d\u0435 \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043e \u043d\u0451\u043c!",isDone:!0}]},k=function(e){return{type:n.ADD_TASK,payload:{task:e}}},f=function(e){return{type:n.UPDATE_STATE,payload:{tasks:e}}},v=function(e){return{type:n.DELETE_TASK,payload:{taskId:e}}},T=function(e,t){return{type:n.CHANGE_TASK_STATUS,payload:{taskId:e,isDone:t}}},p=a(14),D=a.n(p),A=a(122),_=a(119),h=a(63),S=a.n(h),x=a(6),m=function(e){var t=e.id,a=e.task,n=e.idx,c=e.isDone,i=e.onClickChangeCheckbox,s=e.onClickDeleteTask,r=e.number;return Object(x.jsx)("div",{className:D.a.taskStyle,children:Object(x.jsx)(u.b,{draggableId:t,index:n,children:function(e){return Object(x.jsxs)("div",Object(l.a)(Object(l.a)(Object(l.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:D.a.itemStyle,children:[Object(x.jsx)("p",{children:r+1}),Object(x.jsx)("p",{children:a}),Object(x.jsxs)("div",{className:D.a.checkAndDelete,children:[Object(x.jsx)(A.a,{checked:c||!1,onChange:function(e){return i(t,e)},name:"checkedA"}),Object(x.jsx)(_.a,{onClick:s,"aria-label":"delete",className:D.a.margin,children:Object(x.jsx)(S.a,{})})]})]}))}},t)},t)},g=a(121),E=a(120);function C(){var e=Object(j.c)(),t=function(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),s=Object(d.a)(c,2),r=s[0],l=s[1];return{value:a,setValue:n,error:r,onChange:function(e){n(e.target.value),l("")},onBlur:function(e){e.target.value?l(""):l("Required field")}}}(),a=t.value,n=t.setValue,c=t.error,s=t.onChange,r=t.onBlur;return Object(x.jsxs)("div",{className:D.a.inputBlock,children:[Object(x.jsx)(g.a,{id:"outlined-basic",label:"Task",variant:"outlined",value:a,onChange:s,onBlur:r,className:D.a.input1}),Object(x.jsx)(E.a,{size:"small",variant:"outlined",className:D.a.btnAdd,onClick:function(){e(k(a.trim())),n("")},children:"+"}),c&&Object(x.jsx)("div",{className:D.a.errorMessage,children:c})]})}function y(e){return Object(x.jsx)("div",{children:Object(x.jsx)(E.a,{onClick:function(){return t=e.filterValue,void e.setFilter(t);var t},children:e.filterValue})})}function N(){var e=Object(j.c)(),t=Object(j.d)((function(e){return e.tasks.tasks})),a=Object(i.useState)(c.All),n=Object(d.a)(a,2),s=n[0],r=n[1],b=function(e){return s===c.Active?e.filter((function(e){return!e.isDone})):s===c.Completed?e.filter((function(e){return e.isDone})):e},O=function(t,a){var n=a.currentTarget.checked;e(T(t,n))};return Object(x.jsxs)("div",{className:D.a.main,children:[Object(x.jsx)(C,{}),Object(x.jsx)(u.a,{onDragEnd:function(a){if(a.destination){var n=Object(o.a)(t),c=n.splice(a.source.index,1),i=Object(d.a)(c,1)[0];n.splice(a.destination.index,0,i),e(f(n))}},children:Object(x.jsx)(u.c,{droppableId:"droppable",children:function(a){return Object(x.jsx)("div",Object(l.a)(Object(l.a)({},a.droppableProps),{},{ref:a.innerRef,children:Object(x.jsxs)("div",{children:[b(t).map((function(t,a){if(t.task)return Object(x.jsx)(m,{id:t.id,idx:a,number:a,isDone:t.isDone,task:t.task,onClickDeleteTask:function(){return a=t.id,void e(v(a));var a},onClickChangeCheckbox:O},t.id)})),a.placeholder]})}))}})}),Object(x.jsxs)("div",{className:D.a.allBtnStyle,children:[Object(x.jsx)(y,{setFilter:r,filterValue:c.All}),Object(x.jsx)(y,{setFilter:r,filterValue:c.Active}),Object(x.jsx)(y,{setFilter:r,filterValue:c.Completed})]})]})}var K=function(){return Object(x.jsx)(N,{})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,124)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},F=a(23),I=Object(F.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_TASK:return Object(l.a)(Object(l.a)({},e),{},{tasks:[].concat(Object(o.a)(e.tasks),[{id:Object(b.v1)(),task:t.payload.task,isDone:!1}])});case n.DELETE_TASK:return Object(l.a)(Object(l.a)({},e),{},{tasks:Object(o.a)(e.tasks.filter((function(e){return e.id!==t.payload.taskId})))});case n.CHANGE_TASK_STATUS:return Object(l.a)(Object(l.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload.taskId?Object(l.a)(Object(l.a)({},e),{},{isDone:t.payload.isDone}):e}))});case n.UPDATE_STATE:return Object(l.a)(Object(l.a)({},e),{},{tasks:t.payload.tasks});default:return e}}}),P=Object(F.e)(I);r.a.render(Object(x.jsx)(j.a,{store:P,children:Object(x.jsx)(K,{})}),document.getElementById("root")),B()}},[[88,1,2]]]);
//# sourceMappingURL=main.f3dec59c.chunk.js.map