<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App XXXXXX" /> -->
    <Ciao greetings="ETN" />
  </div>
</template>

<script>
import Ciao from "@/components/Ciao.vue";

export default {
  name: "Homepage",
  components: {
    Ciao
  }
};

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// };
</script>
