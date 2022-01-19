<template>
  <div>
    <div class="loading text-center" v-if="loading"> <h2 class="text-lg text-indigo-500 tracking-widest font-medium title-font my-24">
        Loading...</h2></div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="course" class="content lg:w-4/6 mx-auto">


<div class="">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center mx-auto " :src="imageUrlFor(course.image).width(480)"/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/6 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <img  class="rounded-full" :src="imageUrlFor(course.authorImage).width(480)"/>
           
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{{ course.name }}</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">{{course.bio}}</p>
          </div>
        </div>
        <div class="sm:w-5/6 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{{ course.title }}</h1>
          <p class="leading-relaxed text-lg mb-4">
            <SanityBlocks  :blocks="blocks" />
          </p>
          
        </div>
      </div>
    </div>





      
    </div>
  </div>
</template>

<script>

import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
//we use imageUrlBuilder from @sanity/image-url to generate image URLs for our images.
//we create a method called imageUrlFor() and use it inside template
const imageBuilder = imageUrlBuilder(sanity);


//use Sanity's GROQ API to query our data. GROQ query is used to fetch the _id, title, slug, body, image.url, author
const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},

"name":author->name,
"bio":author->bio,
"authorImage":author->image
}[0]
`;

export default {
  name: "SingleCourse",
  components: { SanityBlocks },
  data() {
    return {
      loading: true,
      course: [],
      blocks: [],
     
    };
  },
  created() {
    this.fetchData();
     
  },
  methods: {
    imageUrlFor(source) {
      console.log(imageBuilder.image(source));
      return imageBuilder.image(source);
      
    },
    
    fetchData() {
      this.error = this.course = null;
      this.loading = true;


//To fetch the data for a specific course we'll use its unique slug which is accessed using this.$route.params.slug. 
//This is the route object present in Vue Router which represents the state of the current active route.
      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (course) => {
          this.loading = false;
          this.course = course;
          this.blocks = course.body;
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

h1 {
  text-align: center;
}

</style>