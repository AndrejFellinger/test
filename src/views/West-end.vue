<template>
    <img style="position: absolute; z-index: 999; height: 12%; margin: 50px;" src="https://cdn.discordapp.com/attachments/927856123132919819/955196372108320778/IMG_6332.png" alt="">
    <img style="width: 100%;" src="https://cdn.discordapp.com/attachments/927856123132919819/1023595158031306822/unknown.png" alt="">
    <ImgCollage :imgUrl1="url3" :imgUrl2="url2" :imgUrl3="url1"/>
    <img style="width: 100%;" src="https://cdn.discordapp.com/attachments/927856123132919819/1022588002175823912/unknown.png" alt="">
  </template>
  
  <script>
  import ImgCollage from '../components/imgCollage.vue'

  export default {
    components: {
      ImgCollage,
      
    },
    data() {
      return{
        url1: "https://cdn.discordapp.com/attachments/801040443038105613/1018949716836368515/unknown.png",
        url2: "https://cdn.discordapp.com/attachments/801040443038105613/1018948054415585371/unknown.png",
        url3: "https://cdn.discordapp.com/attachments/801040443038105613/1019683071332712499/unknown.png",
        url4: "https://cdn.discordapp.com/attachments/801040443038105613/1154446876012191754/secret_DEV_logo_erased.png",
      }
    }
  }
  </script>
  
  <style>
  
  </style>