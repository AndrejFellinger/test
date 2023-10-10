<template>
  <div class="container">
    <div v-for="card in $props.data" :key="card" class="wrap">
        <div class="container-img">
            <img :src="card.url" alt="">
        </div>
        <div class="subcontainer">
            <div class="container-text">
                <h2>{{ card.title }}</h2>
                <p>{{ card.description }}</p>
            </div>
            <div class="container-btn">
                <div :on-click="card.onclick" class="button">
                    {{ card.btntext }}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

    props: {
        data: Array
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        /* max-height: 600px; */
        height: auto;
        display: grid;
        grid-template-columns: auto auto auto auto;
        padding: 30px;
        justify-content: center;
    }

    @media only screen and (min-width: 360px) {
        .container{
            grid-template-columns: auto;
        }
    }

    @media screen and (min-width: 700px) {
        .container{
            grid-template-columns: auto auto;
        }
    }

    @media screen and (min-width: 1000px) {
        .container{
            grid-template-columns: auto auto auto;
        }
    }
    @media screen and (min-width: 1280px) {
        .container{
            grid-template-columns: auto auto auto auto;
        }
    }
    @media screen and (min-width: 1450px) {
        .container{
            grid-template-columns: auto auto auto auto auto;
        }
    }
    @media only screen and (max-device-width: 480px) {
       /* styles for mobile browsers smaller than 480px; (iPhone) */
    }
    @media only screen and (device-width: 768px) {
        .container{
            grid-template-columns: auto auto auto;
        }
    }
       

    .wrap{
        background: rgba(47, 47, 47, 0.75);
        /* border: solid 1px rgba(0, 0, 0, 0.5); */
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        max-width: 300px;
        display: grid;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        transition: 0.2s ease;
        margin-right: 10px;
        margin-left: 10px;
    }

    .wrap:hover{
        margin-top: 5px;
        margin-bottom: 15px;
        transition: 0.2s ease;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
    }

    .wrap:empty{
        display: none !important;
    }

    .subcontainer{
        display: grid;
        align-items: end;
        height: 100%;
        vertical-align: top;
    }

    .container-text{
        padding: 0 20px;
        margin-top: 15px;
        margin-bottom: 15px;
        color: rgba(235, 235, 235, 0.64);
    }

    h2{
        font-size: 20px;
        font-weight: 600;
    }

    h2:empty{
        display: none !important;
    }

    p:empty{
        display: none !important;
    }

    .container-btn{
        padding: 5px;
        display: flex;
    }

    img{
        max-width: 300px;
        display: flex;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    

    .button{
        width: 100%;
        padding: 15px 20px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 14px;
        cursor: pointer;
        transition: 0.2s ease;
        text-align: center;
    }

    .button:hover{
        background: rgba(0, 0, 0, 0.2);
        transition: 0.2s ease;
        border: 1px solid white;
    }

    .button:empty{
        display: none;
    }
</style>