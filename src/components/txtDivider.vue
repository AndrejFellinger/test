<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        padding: 20px 90px;
        display: grid;
        text-align: center;
    }

    h2{
        color: white;
        font-size: 30px;
    }

    p{
        color: rgba(235, 235, 235, 0.64);
        font-size: 18px;
    }
</style>