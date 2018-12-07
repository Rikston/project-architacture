let classElement = {
  props: {
    title: {
      default: () => "Name"
    },
    type: {
      default: () => "method or property"
    }
  },
  template: `
        <div class="d-flex flex-row flex-nowrap class-element" draggable="true" v-bind:visibil="visibility" v-bind:type="type">
            <div class="d-flex flex-column option">
                <radio-button name="visibility" title="private" width-full="true" id="pri"  v-model="visibility"></radio-button>
                <radio-button name="visibility" title="public" width-full="true" id="pra"  v-model="visibility"></radio-button>
                <radio-button name="visibility" title="protected" width-full="true" id="pr1"  v-model="visibility"></radio-button>
                
            </div>
            <h5>{{title}}</h5>
        </div>
    `,
  data: function() {
    return {
      visibility: ""
    };
  }
};
