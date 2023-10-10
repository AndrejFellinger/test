<template>
  <div class="container">
    <div class="container-img">
        <img :src=imgUrl alt="">
    </div>
    <div class="container-text">
        <h2>Title Title Tirle</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat quo unde consequuntur officia ut error, saepe temporibus cum repudiandae odit totam iure voluptatum qui eveniet veniam harum expedita aperiam.</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        imgUrl: String
    },
}
</script>

<style scoped>
    .container{
        border-radius: 10px;
        width: fit-content;
        background: rgba(47, 47, 47, 0.75);
        border: solid 1px 1px solid rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        max-width: 300px;
    }

    .container-img{
        height: fit-content;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .container-img img{
        max-width: 300px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: auto;
    }

    .container-text{
        padding: 10px;
        color: white;
        text-align: center;
    }

    .container-text p{
        margin-bottom: 10px;
    }
</style>