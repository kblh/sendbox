<template>
  <div>
    <h1>Users overview</h1>
    <div>age: {{ age }}</div>
    <div>weight: {{ weight }}</div>
  </div>
</template>

<script>
  export default {
    props: [
      'age',
      'weight'
    ]
  }
</script>
