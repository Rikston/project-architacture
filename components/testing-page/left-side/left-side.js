let leftSide = {
  components: {
    "element-box": elementBox
  },
  template: `
        <div class="d-flex flex-row flex-wrap align-items-start h-100 btn-dark left-side" >
            <element-box class="h-75 w-100"></element-box>
            <button class="btn btn-block btn-primary m-3 " v-on:click="check">Перевірити</button>
        </div>
    `,
  methods: {
    check: function(e) {
      this.$router.push("/checking");
    }
  }
};
