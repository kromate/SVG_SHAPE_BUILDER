<template>
  <div></div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    start() {
      const view = document.querySelector("body");
      view.innerHTML = `
     <style>
    body {
      font-family: 'Galada', cursive;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      /* background-color: blueviolet; */
      overflow: hidden;
      align-items: center;
      justify-content: center;
      transition: 1s ease;
      background-color: rgb(5, 5, 5);

    }

    main {
      background-color: rgb(5, 5, 5);
      padding: 1rem;
      display: flex;
      text-align:center;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      border-radius: 35px;
      box-shadow: 2px 3px 19px 2px;
      transition: 5s;
      -webkit-text-stroke-color: #6e1cfa;
      -webkit-text-stroke-width: 1px;
      -webkit-text-fill-color: rgb(8, 8, 8);
    }

    main p {

      text-align: center;
      font-size: 20rem;
      padding: 2rem;
      /* margin: 0; */
      margin: 1rem auto;
      text-shadow: 1px -1px 9px;
      color: #0b35abed;
      transition: 5s;
      display:block;
    }
button {
  margin: 20px;
}
.custom-btn {
  width: 260px;
  height: 50px;
  color: #5e19de;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

/* 13 */
.btn-13 {
  background-color: #16b9af;
  border: none;
  z-index: 1;
}
.btn-13:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
background-color: #eaf818;
  background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-13:hover {
 color: #000;
}
.btn-13:hover:after {
  top: 0;
  height: 100%;
}
.btn-13:active {
  top: 2px;
}


/* 14 */
.btn-14 {
  background: #16b9af;
  border: none;
  z-index: 1;
}
.btn-14:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #eaf818;
  background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
.btn-14:hover {
  color: #000;
}
.btn-14:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-14:active {
  top: 2px;
}


    .di {
      font-size: 15rem;
      -webkit-text-stroke-color: #6e1cfa;
      -webkit-text-stroke-width: 1.8px;
      -webkit-text-fill-color: rgb(8, 8, 8);
      border-radius: 50px;
      animation: fade 2s forwards linear;
      transition: 2s linear;
    }
    @keyframes fade {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }

    .wrapper {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: 874px) {
      .di {
        font-size: 10rem;
      }}
    @media screen and (max-width: 614px) {
      .di {
        font-size: 7rem;
      }
    }
    @media screen and (max-width: 430px) {
      .di {
        font-size: 5rem;
      }
    }
  </style>

  <div class="wrapper">
    <main>
      <p id="draw" class="di">Welcome</p>
      <div>This is my Submission for the Frontend developer challenge posted by Cozzbie on twitter</div>
       <div class="CBtn">
      <a href="/builder"><button class="custom-btn btn-13">View Shape Builder</button></a>
      <a href="https://wa.me/2348146923944"><button class="custom-btn btn-14">Contact</button></a>
    </div>
    </main>
  </div>
    `;

      // setTimeout(finishLoading, 5000);
    },
  },
  mounted() {
    this.start();
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
h1 {
  font-size: 3rem;
}
</style>
