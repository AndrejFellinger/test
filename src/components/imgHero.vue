<template>
  <div class="container">
    <div class="container-wrap-img" id="container-wrap-img">
        <div v-for="imghero in $props.data" :key="imghero" class="wrap-img">
            <div class="img-color-overlay"></div>
            <img :src="imghero.url" alt="">
            <div class="container-items">
                <div class="items">
                    <div class="logo">
                        <img :src="imghero.logo" alt="">   
                    </div>
                    <h1>{{ imghero.title }}</h1>
                    <p>{{ imghero.description }}</p>
                    <button>{{ imghero.buttontext }}</button>
                </div>
            </div>
        </div>
    </div>
    <div class="wrap-controls">

    </div>
  </div>
</template>

<script>
export default {
    props: {
        data: Array
    },
}
</script>

<style scoped>

    .container-items{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        color: white;
        /* background: red; */
        z-index: 3;
    }

    .logo{
        max-height: 175px;
        max-width: 175px;
        margin-left: auto;
        margin-right: auto;
        pointer-events: fill;
    }

    .items{
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .wrap-img{
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
    }

    .container{
        position: relative;
        display: flex;
    }
    .container-wrap-img{
        display: grid;
        grid-template-columns: auto auto;
        z-index: 99;
    }
    .wrap-img {
        overflow-x: hidden;
    }

    img{
        width: 100%;
        pointer-events: none;
    }
    .img-color-overlay{
        background: black;
        z-index: 2;
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.5;
    }

    h1{
        font-size: 50px;
        margin-left: auto;
        margin-right: auto;
    }
    
    p{
        font-size: 20px;
        margin-bottom: 15px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    button{
        padding: 14px 24px;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px rgb(122, 122, 122) solid;
        font-weight: 600;
        border-radius: 5px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        cursor: pointer;
    }

    button:hover{
        transition: 0.2s ease;
        background: rgba(255, 255, 255, 0.2);
    }
</style>