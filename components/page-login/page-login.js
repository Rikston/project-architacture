let pageLogin = {
  template: `
  <div>
    <div class="login">
        <input type="text" placeholder="Username" v-model="username">  
        <input type="password" placeholder="password" v-model="password">  
        <input type="submit" value="Sign In" v-on:click="check">
    </div>
    <div class="shadow"></div>
  </div>
    `,
  mounted: function() {},
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    check: function() {
      if (this.username == "Rikston" && this.password == "125851")
        this.$router.push("/testing");
    }
  }
};
