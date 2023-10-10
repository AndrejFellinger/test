<template>
  <div class="container">
    <div class="wrap-top">
        <div class="wrap-logo item">
            <img src="https://cdn.discordapp.com/attachments/801040443038105613/1154447119432822803/adwawdadadadawdawdpng.png?ex=65164be9&is=6514fa69&hm=ef6195d861f8948f1a9641d6f3c8f6b93e11721eefb92af69c64330ab797d87a&" alt="">
            <div class="logo-slogan">
                <p>Secret™ is the best way of experiencing new games with a strong story</p>
            </div>
        </div>
        <div class="wrap-links item">
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
        </div>
        <div class="wrap-links item">
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
        </div>
        <div class="wrap-links item">
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
            <p>link1</p>
        </div>
        <div class="wrap-extra item">
            <p>this is extra information, this is extra information,  this is extra information,  this is extra information,  this is extra information, </p>
        </div>
    </div>
    <div class="wrap-bottom">
        <div class="wrap-policy bottom">
            <p>privacy policy</p>
            <p>legal terms</p>
            <p>cookies policy</p>
        </div>
        <div class="wrap-copyright bottom">
            © Sercet™ All Rights Reserved 2023
        </div>
        <div class="wrap-socials bottom">
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-twitch"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        data: Array
    }
}
</script>

<style scoped>
    .container {
        background: rgb(21, 21, 21);
        padding: 25px;
        display: grid;
        grid-template-columns: auto;
    }

    .wrap-top{
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-between;
        border-bottom: 1px solid rgb(255, 255, 255, 0.025);
        padding-bottom: 20px;
    }

    .wrap-logo img {
        max-height: 100px;
    }

    .wrap-logo{
        max-width: 200px;
    }

    .wrap-extra{
        max-width: 200px;
        text-align: right;
    }

    .wrap-bottom{
        display: grid;
        grid-template-columns: auto auto auto;
        margin-top: 20px;
        justify-content: space-between;
        align-items: end;
    }

    .wrap-policy{
        display: flex;
        width: 100%;
        text-align: left;
    }

    .wrap-policy p{
        margin-right: 15px;
        cursor: pointer;
        transition: 0.2s ease;
        border-bottom: 1px solid rgba(0, 0, 0, 0.0);
    }

    .wrap-policy p:hover{
        transition: 0.2s ease;
        color: white;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        /* border-bottom-style: dashed; */
    }

    .wrap-copyright{
        text-align: center;
    }

    .wrap-socials{
        text-align: right;
    }

    .bottom{
        min-width: 300px;
    }
</style>