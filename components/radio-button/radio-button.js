let radioButton = {
  props: {
    name: {
      default: "ww"
    },
    title: {
      default: "_ "
    },
    widthFull: {
      default: false
    },
    value: {},
    id: {},
    selected: {
      default: false
    },
    changed: {
      default: null
    }
  },
  template: `
        <div class="radio-button" v-bind:class="{'width-full': widthFull}">
          <input v-bind:id="id"
           type="radio"
            v-bind:name="name"
            v-bind:value="title"
            v-on:input="$emit('input', $event.target.value)"
            :checked="selected"
            v-on:change="check"
            >
            <label class="btn-saffron" v-bind:for="id">{{title}}</label>
        </div>
    `,
  data: function() {
    return {
      input: null,
      check: function() {
        console.log("checkd");
      }
    };
  },
  mounted: function() {
    this.input = this.$el.querySelector("input[type='radio']");
  },
  created: function() {
    console.log(this.changed);
    if (this.changed) this.check = this.changed;
  },
  methods: {},
  watch: {
    "input.checked": function(e) {
      console.log(e);
      console.log("input changed");
    }
  }
};
