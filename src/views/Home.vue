<template>
  <div class="home">
      <div class="loading text-center" v-if="loading">
        <h2 class="text-lg text-indigo-500 tracking-widest font-medium title-font mb-1">
        Loading...</h2></div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
    <h1 class="text-4xl font-medium title-font mb-4 md:mb-16 text-gray-600 my-8">Welcome to Academy</h1>
    
      
     
       
    

          
        
        </div>
     
     

</template>

<script>
//import the client from the file we created
import sanity from "../client";
 //we use imageUrlBuilder from @sanity/image-url to generate image URLs for our images.
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

//use Sanity's GROQ API to query our data. GROQ query is used to fetch the _id, title, slug, excerpt and image.url
const query = `*[_type == "course"]{
  _id,
  title,
  slug,
 
  excerpt,
   "image": mainImage{
  asset->{
   url
}
},
"category":category->title,
}[0...50]`;
// This means that only the first 50 courses will be fetched.



export default {
  name: "Home",
  data() {
    return {
      loading: true,
      courses: [],
    };
  },
  created() {
    this.fetchData();
    
  },
 
//we create a method called imageUrlFor() and use it inside template
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },

    //The fetched content is stored in the courses array using this.courses=courses.
    fetchData() {
      this.error = this.course = null;
      this.loading = true;
      sanity.fetch(query).then(
        (courses) => {
          this.loading = false;
          this.courses = courses;
          
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
.home h1{
    text-align: center;

}


</style>