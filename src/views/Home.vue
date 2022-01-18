<template>
  <div class="home">
    <h1 class="title">Welcome to Academy</h1>
    <div class="courses">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <!-- we map over the courses array -->
        <!-- :key attribute a value of our course's ID. -->
        <div v-for="course in courses" class="course-item" :key="course._id"> 
          <!-- The slug of the course is passed to its to prop.  -->
          <router-link :to="`/academy/${course.slug.current}`">
           <img :src="imageUrlFor(course.image).width(480)" />
            <h2>{{ course.title }}</h2>
          </router-link>
          <p>{{course.excerpt}}</p>
          <hr />
        </div>
      </div>
    </div>
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
          console.log(this.courses);
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
.container {
  margin: 0 auto;
  max-width: 42em;
  width: 100%;
}
.course-item {
  box-sizing: border-box;
}
</style>