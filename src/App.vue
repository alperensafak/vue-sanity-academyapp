<template>
<section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto">
 
  <NavBar/>
  <router-view />
  </div></section>
</template>



  <script type="text/javascript">
  import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      NavBar,
    },
  };
  </script>

<style>




p,
ul,
ol {
  font-size: 1.3rem;
  line-height: 1.75em;
  margin: 1.2em 0;
}

a {
  color: inherit;
  transition: color linear 0.15s;
}

a:hover {
  color: #42b983;
}



hr {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
rgba(66, 185, 131, 1),    rgba(0, 0, 0, 0)
  );
  border: 0;
  height: 2px;
  margin: 40px auto;
}



.content h1 {
  font-size: 3em;
  margin: 1em 0;
}

@media (max-width: 1020px) {
  h1 {
    font-size: 3em;
  }

  .content h1 {
    font-size: 2.4em;
  }
}


@media (max-width: 480px) {
  body {
    font-size: 14px;
  }

  p,
  ul,
  ol {
    font-size: 1.2rem;
    margin: 1em 0;
  }
}
</style>