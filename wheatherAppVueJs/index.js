const app = Vue.createApp({
  //Data
  data() {
    return {
      message: "Welcome to my Vue Wheather app",
      myInput: "",
      timezone: "",
      temp: "",
      wheather: "",
      data: "",
      wind: "",
      message: "",
      image: "./Cloudy.jpg",
    };
  },

  methods: {
    async getWehather() {
      // GET request using fetch with error handling
      try {  
        const res = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.myInput}&APPID=52b0a995f220ace5868e18882364447f`
        );
        const jsonData = await res.json();
        console.log(jsonData);
        this.timezone = jsonData.name;
        this.temp = "Temperature: " + this.kelvinToCelsius(jsonData.main.temp);
        this.wheather = "Weather: " + jsonData.weather[0].main;
        this.data = "Today: " + this.getcurrentData();
        this.wind = "Wind Speed: " + jsonData.wind.speed;
        this.clearInputAndMessage();
      } catch (err) {
        this.message = "Incorrect timezone or empty";
        this.clearFlieds();
      }
    },
    //Today date
    getcurrentData() {
      const today = new Date();
      return (time =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate());
    },

    //Convert Kelvin to Celsius
    kelvinToCelsius(temp) {
      return Math.round(temp - 273.15) + " °C ";
    },
    //Clearing fields
    clearFlieds() {
      this.timezone = "";
      this.temp = "";
      this.wheather = "";
      this.data = "";
      this.wind = "";
    },
    //Clearing message and input
    clearInputAndMessage() {
      this.message = "";
      this.myInput = "";
    },
  },
});

