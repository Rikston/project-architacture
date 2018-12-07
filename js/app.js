let dragItem = null;
let resultOfChecked = {};
Vue.component("class-block", classBlock);
Vue.component("radio-button", radioButton);
let vue = new Vue({
  el: "#app",
  router: new VueRouter({
    routes: [
      {
        path: "/",
        component: pageLogin
      },
      { path: "/testing", component: testingPage },
      { path: "/checking", component: resultOffChecking }
    ]
  }),
  data: {
    test: "Success"
  },
  methods: {
    dragStart: function(e) {},
    drop: function(e) {
      console.log("drop start");
      e.preventDefault();
    },
    dragOver: function(e) {
      console.log("drag over");
      e.preventDefault();
    }
  }
});
