<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      isOpened: false
    }
  },
  methods: { 
    moveTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    openMenu (){
      const menu = document.getElementById('menu-container');
      const navlinks = document.getElementById('nav-links');
      const homenav = document.getElementById('home-nav');
      if(this.isOpened == false) {
        menu.style.height = 'auto';
        menu.style.padding = '25px';
        menu.style.width = 'auto';
        navlinks.style.display = 'none';
        homenav.style.width = '100%';
        homenav.style.marginRight = '0px';
        this.isOpened = true;
      }
      else{
        menu.style.height = '0px';
        menu.style.padding = '0px';
        menu.style.width = '0px';
        navlinks.style.display = 'flex';
        homenav.style.width = 'auto';
        homenav.style.marginRight = '6px';
        this.isOpened = false;
      }
    },
  }
}

</script>

<template>
      <nav class="navbar">
        <div id="menu-container" class="menu-container">
          <div class="menu-items-container">
            <h4>Title</h4>
            <p>link name</p>
            <p>longer link name</p>
            <p>shorter name</p>
          </div>
          <div class="menu-items-container">
            <h4>Title</h4>
            <p>medium link name</p>
            <p>link name</p>
            <p>long link name</p>
            <p>link name</p>
          </div>
          <div class="menu-items-container">
            <h4>Title</h4>
            <p>shorter link name</p>
            <p>link name</p>
            <h4>Title</h4>
            <p>medium link name</p>
            <p>long link name</p>
          </div>
          <div class="menu-items-container">
            <h4>Title</h4>
            <p>link name</p>
            <p>link name</p>
          </div>
        </div>
        <div class="nav-container">
          <div class="nav-default">
            <div id="home-nav" class="home-nav">
              <RouterLink class="home-nav-txt" to="/main">Home</RouterLink>
              <ion-icon @click="openMenu()" class="menu-i" name="grid-outline"></ion-icon>
            </div>
            <div id="nav-links" class="nav-links">
              <RouterLink class="link" to="/about">About</RouterLink>
              <RouterLink class="link link-mrgn" to="/secret">Secret</RouterLink>
              <RouterLink class="link link-mrgn" to="/secret2">Secret#2</RouterLink>
              <RouterLink class="link link-mrgn" to="/west-end">West End</RouterLink>

              <div class="to-the-top">
                <ion-icon class="top-i" name="chevron-up-circle" @click="moveTop"></ion-icon>
              </div>
            </div>
          </div>
        </div>
          

      </nav>

  <!-- <RouterView /> -->
</template>

<style scoped>

nav {
  z-index: 999;
}
  .navbar {
    position: fixed;
    background: rgba(47, 47, 47, 0.75);
    padding: 5px;
    border-radius: 10px;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    bottom: 50px;
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    width: fit-content;
  }

  .nav-container{
    height: 56px;
    bottom: 0 !important;
  }

  .menu-container{
    height: 0px;
    /* padding: 25px; */ 
    transition: 0.3s ease;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* display: none; */
    width: 0px;
  }

  .menu-items-container{
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    border-right: 0;
    border-bottom: 0;
    border-top: 0;
    border-style: dashed;
    padding-left: 15px;
    overflow: hidden;
    width: fit-content;
    font-size: 16px; /* CHANGE IT AFTER IMPLEMENTING VUE ROUTERS!!!!!!!! */
  }

  .menu-items-container h4{
    font-size: 12px !important;
    color: rgb(170, 170, 170);
  }

  .menu-items-container p{ /* CHANGE IT AFTER IMPLEMENTING VUE ROUTERS!!!!!!!! */
    margin-top: 30px;
    margin-bottom: 30px;
    color: white;
    padding-right: 15px;
  }

  .menu-items-container p:nth-last-child(1){
    margin-bottom: 0px;
  }

  .menu-i{
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.65);
    transition: 0.2s ease;
  }

  .menu-i:hover{
    transition: 0.2s ease;
    color: white;
  }

  .home-nav{
    display: flex;
    align-items: center;
    background: rgb(33, 33, 33);
    border-radius: 5px;
    font-size: 14px;
    padding: 0 25px;
    margin-right: 6px;
    color: white;
    font-weight: bold !important;
    height: 56px;
    width: auto;
    transition: 0.3s ease;
  }

  .nav-default{
    display: flex;
  }

  .home-nav-txt{
    font-weight: bold;
    color: white;
  }

  .link{
    color: rgba(255, 255, 255, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 10px;
    border-radius: 5px;
    transition: 0.2s ease;
    height: 46px;
  }

  .link:hover{
    color: rgba(255, 255, 255, 1);
    background: none;
    /* text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);s */
    transition: 0.2s ease;
    color: rgba(255, 255, 255, 0.65);
    background: rgba(255, 255, 255, 0.15);
  }

  .nav-links {
    background: rgb(47, 47, 47);
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }

  .link-mrgn{
    margin-left: 5px;
  }

  .to-the-top{
    align-items: center;
    margin-left: 5px;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.250);
  }

  .top-i{
    cursor: pointer;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.65);
    transition: 0.2s ease;
  }

  .top-i:hover{
    transition: 0.2s ease;
    color: white;
  }
</style>