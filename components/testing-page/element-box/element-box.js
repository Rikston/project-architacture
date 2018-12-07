let elementBox = {
  components: {
    "e-d": paragraph,
    "e-e": classElement
  },
  template: `
        <div
         class="d-flex flex-column flex-nowrap justify-content-center align-items-center "
         v-on:dragstart="dragStart"
         v-on:drop="drop"
         v-on:dragover="dragOver"
        >
            <e-e title="Age" type="property"></e-e>
            <e-e title="First Name" type="property"></e-e>
            <e-e title="Last Name" type="property"></e-e>
            <e-e title="getFullName" type="method"></e-e>
            <e-e title="getAge" type="method"></e-e>
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
