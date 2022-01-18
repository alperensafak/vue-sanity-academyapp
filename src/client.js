import sanityClient from "@sanity/client";
//This code configures the Sanity client with information about the project we're accessing.
export default sanityClient({
  projectId: "sgfl39ay", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2021-03-25"
});