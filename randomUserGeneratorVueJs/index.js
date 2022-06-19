const app = Vue.createApp({
  //Data
  data() {
    return {
      url: "https://randomuser.me/api/",
      image: "",
      firs: "",
      last: "",
      email: "",
      gender: "",
      phone: "",
      isFamele: false,
    };
  },
  //Run method log() onload
  mounted() {
    this.log();
  },
  methods: {
    //Get request
    async log() {
      const info = await fetch(this.url);
      const jsonInfo = await info.json();
      console.log(jsonInfo.results[0]);
      this.firs = jsonInfo.results[0].name.first;
      this.last = jsonInfo.results[0].name.last;
      this.email = jsonInfo.results[0].email;
      this.gender = jsonInfo.results[0].gender;
      this.image = jsonInfo.results[0].picture.large;
      this.phone = jsonInfo.results[0].phone;

      this.active();
    },
    //Gender
    active() {
      if (this.gender.toString() === "female") {
        this.isFamele = true;
      } else {
        this.isFamele = false;
      }
    },
  },
});
