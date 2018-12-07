let classBlock = {
  components: {
    "class-field": classField
  },
  props: {
    "class-name": {
      default: () => "Class Name"
    }
  },
  template: `
        <div class="container class-block d-flex flex-column">
        <div class="">
                <div class="col-12">
                    <h3>{{className}}</h3>
                </div>
            </div>
            <div class="row class-block-item h-50">
                <div class="col-12">
                    <class-field id="property"></class-field>
                </div>
            </div>
            <div class="divider"></div>
            <div class="row class-block-item h-40">
                <div class="col-12">
                    <class-field id="method"></class-field>
                </div>
            </div>
        </div>
   `,
  methods: {
    check: function() {
      let d = this.$el.querySelectorAll("#property [draggable='true']");
      let p = true;
      let m = true;
      for (let i = 0; i < d.length; ++i) {
        let attr = d[i].getAttribute("type");
        if (attr && attr != "property") p = false;
      }

      d = this.$el.querySelectorAll("#method [draggable='true']");
      for (let i = 0; i < d.length; ++i) {
        let attr = d[i].getAttribute("type");
        if (attr && attr != "method") m = false;
      }
      resultOfChecked.property = p;
      resultOfChecked.method = m;
      return {
        property: p,
        method: m
      };
    }
  }
};
