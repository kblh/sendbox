<template>
  <h1>Ciao ... {{ greetings }}</h1>
</template>
<script>
export default {
  name: "Ciao",
  props: {
    greetings: String
  }
};
</script>
