let classField = {
  components: {
    "e-d": paragraph
  },
  template: `
        <div
         class="d-flex flex-column flex-nowrap justify-content-center align-items-center class-field h-100"
         v-on:dragstart="dragStart"
         v-on:drop="drop"
         v-on:dragover="dragOver"
        > 
        </div>
    `,
  methods: {
    dragStart: function(e) {
      console.log("drag start");
      e.dataTransfer.setData(
        "text",
        `${e.target.nodeName} ${e.target.innerHTML}`
      );
      dragItem = e.target;
    },
    drop: function(e) {
      console.log(e.dataTransfer.getData("text"));
      e.preventDefault();
      e.target.appendChild(dragItem);
    },
    dragOver: function(e) {
      //   console.log("drag over");
      e.preventDefault();
    }
  }
};
