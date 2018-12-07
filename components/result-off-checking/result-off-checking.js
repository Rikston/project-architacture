let resultOffChecking = {
  template: `
        <div class="d-flex flex-column flex-nowrap justify-content-center align-items-center">
            <h1>{{resultChecking}}</h1>
        </div>
    `,
  mounted: function() {
    this.resultChecking = resultOfChecked.property && resultOfChecked.mounted;
    console.log(this.resultChecking);
  },
  data: function() {
    return {
      resultChecking: resultOfChecked.property && resultOfChecked.mounted
    };
  }
};
