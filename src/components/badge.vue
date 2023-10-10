<template>
  <span class="container">
    {{ title }}
  </span>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>

<style scoped>
    .container{
        background: white;
        padding: 3px 5px;
        font-size: 10px;
        color: black;
        border-radius: 4px;
        width: fit-content;
        height: fit-content;
        display: flex;
        margin-left: 5px;
        font-weight: bold;
    }
</style>