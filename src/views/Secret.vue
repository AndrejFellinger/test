<template>

  <ImgHero :data="imghero" />
  <ImgCollage :data="card"/>

  <TxtDivider :title="'This is Title'" :description="'this should be used as a description of this very beautiful component that divides sections. beautiful component that divides sections. beautiful component that divides sections. beautiful component that divides sections.'"/>

  <ImgCollage :data="test"/>  

    <h1>ahoj<badge :title="'NEW'"/></h1>
    <h1>ahoj<badge :title="'NEW'"/></h1>
    <h1>ahoj<badge :title="'NEW'"/></h1>

    <ImgHero :data="imghero2" />

  </template>
  
  <script>
  import ImgwText from '../components/imgwText.vue'
  import ImgCollage from '../components/imgCollage.vue'
  import ImgHero from '../components/imgHero.vue'
  import TxtDivider from '../components/txtDivider.vue'
  import badge from '../components/badge.vue'

  export default {
    components: {
      ImgwText,
      ImgCollage,
      TxtDivider,
      ImgHero,
      badge,
      
    },
    data() {
      return{
        card: [
          {
            url: "https://cdn.discordapp.com/attachments/801040443038105613/1156666668316102726/Screenshot_2023-09-27_at_9.00.06_PM.png?ex=6515cd47&is=65147bc7&hm=27aff056792bcea09e2c312ab6148166eaf39667237cebb2becc4b172d53567a&",
            title: "Testing",
            description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
            btntext: "Click me",
          
          },
          {
            url: "https://cdn.discordapp.com/attachments/801040443038105613/1156667179379478611/Screenshot_2023-09-27_at_9.02.11_PM.png?ex=6515cdc1&is=65147c41&hm=12c503db109e76525c32bdcbd3bbc615d8658e6bcb1d5be98d93017da01c2196&",
            title: "Gaining Skills",
            description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
            btntext: "Click me"
          },
          {
            url: "https://cdn.discordapp.com/attachments/801040443038105613/1156654808720216074/Screenshot_2023-09-27_at_8.12.48_PM.png?ex=6515c23c&is=651470bc&hm=a62288e0750e3ec02a21b881307a908dcdec5ec7f6a24457e26ff329b37062b7&",
            title: "Seems to be working",
            description: "I am literally very happy, that it works and it wasn't realy hard tho, that it works and it wasn't realy hard tho. wasn't realy hard tho, that it works and it wasn't realy hard tho. wasn't realy hard tho, that it works and it wasn't realy hard tho.",
            btntext: "Click me"
          },
          {
            url: "https://cdn.discordapp.com/attachments/801040443038105613/1154446876012191754/secret_DEV_logo_erased.png",
            title: "Finally made it",
            description: "I am literally very happy, that it works and it wasn't realy hard tho, that it works and it wasn't realy hard tho.",
            btntext: "Click me"
          },
        ],
        imghero: [
          {
            url: "https://cdn.discordapp.com/attachments/801040443038105613/1156499651982266378/Screenshot_2023-09-27_at_9.56.12_AM.png?ex=651531bb&is=6513e03b&hm=68ec06dd00c4c44b214a1bc676fbaf0a2e39f6cdf78d661ba40bcd9cb636e54e&",
            logo: "https://cdn.discordapp.com/attachments/801040443038105613/1154447119432822803/adwawdadadadawdawdpng.png?ex=6514fa69&is=6513a8e9&hm=7e90c18c171aa397a343f94ce73902c838f267662b83853318bfedf20895c50c&",
            title: "The Development Journey",
            description: 'Come ahead with my journey of developing my first game called "Secret"',
            buttontext: "Learn more..."
          },
          
        ],
        imghero2: [
          {
            url: "https://cdn.discordapp.com/attachments/801040443038105613/1089961783902617661/image.png?ex=65150cc3&is=6513bb43&hm=a3dadc91b6d0d653a7074ac996455a78e22fcbc1258e32c8fe1dabad8d640b00&",
            title: "2D Version of Secret",
            description: 'I tried making, 2D version of my firts game, and this is how it went...',
            buttontext: "Learn more",
            logo: "https://cdn.discordapp.com/attachments/801040443038105613/1154446876012191754/secret_DEV_logo_erased.png",
          },
        ],
        test: [
          {
            title: 'Testing this component',
            description: 'this is a description this is a description this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'Seems to be really working',
            description: 'this is a description this is a description this is a description this is a description this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'I am suprised to be honest',
            description: 'this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'I am suprised to be honest',
            description: 'this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'Testing this component',
            description: 'this is a description this is a description this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'Seems to be really working',
            description: 'this is a description this is a description this is a description this is a description this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'I am suprised to be honest',
            description: 'this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
          {
            title: 'I am suprised to be honest',
            description: 'this is a description this is a description this is a description',
            // btntext: 'Learn more'
          },
        ],
      }
    }
  }
  </script>
  
  <style>

    h1{
      width: fit-content;
      display: flex;
      align-items: center;
    }
  </style>