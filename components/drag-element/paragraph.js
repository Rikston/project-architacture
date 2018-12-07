let paragraph = {
  template: `
        <p draggable="true" v-on:dragstart="dragStart">dqfasdqwd</p>
    `,
  methods: {
    dragStart: function(e) {
      console.log("drag start");
      console.log(e);
    }
  }
};
