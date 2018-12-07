let testingPage = {
  components: {
    "left-panel": leftSide,
    "work-space": workSpace
  },
  template: `
        <div class="d-flex flex-column flex-nowrap justify-content-start align-items-center h-100 w-100">
        <div class="row btn-danger w-100">s</div>
        <div class="row w-100 justify-content-start h-75">
            <left-panel class="col-3"></left-panel>
            <work-space class="col-9"></work-space>
        </div>
        </div>
    `
};
