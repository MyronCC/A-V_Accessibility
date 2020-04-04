// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {
    authenticated: true,
    // mock up the user - this well eventually come from the database UMS (user management system)
    

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Beauty on parade", thumb: "beautyonparada.jpg", vidsource: "beautyonparade.mp4", description: "" },
      { name: "Superman 2", thumb: "superman2.jpg", vidsource: "superman2.mp4", description: "" },
      { name: "The time machine", thumb: "thetimemachine.jpg", vidsource: "thetimemachine.mp4", description: "" }
    ],

    videotitle: "video title goes here",
    videodescription: "vid description goes here",
    videosource: "",

    showDetails: false
  },

  created: function() {
    // vue instance is ready to go, mostly - add some live data to the VM
    console.log('created lifecycle hook fired, go get user data');
    this.fetchUsers();
  },

  methods: {
    zoom() {
      const el = document.body;
              if(el.style.zoom == "100%"){
              el.style.zoom = "150%";
            }else{
              el.style.zoom = "100%";
            }
    },

    setUserPrefs() {
      console.log('set user prefs via routing and probably a component');
    },

    // this is ES6 data destructuring - pull the keys and values you need, not the whole object
    loadMovie({name, description, vidsource}) {
      console.log('show movie details');

      this.videotitle = name;
      this.videodescription = description;
      this.videosource = vidsource;

      this.showDetails = true;
    },

    fetchUsers() {
      // get our user data here and push it back into the VM
      console.log('fetch user data here');

      const url = './includes/index.php?user=true';

      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // push our user data into the VM
        this.user = data[0];
      })
      .catch((err) => console.log(err))
    }
   }
});
