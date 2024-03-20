
//get images by route slug
const getWorkImages = (slug) =>{
   const images = {
    "sev" : ["/sev/sevProjectCorrected70.webp", "/sev/sevSketch1.webp", "/sev/sevSketch2.webp", "/sev/sevSketch3.webp"]
   }
   return (images[slug])
}

export {getWorkImages}