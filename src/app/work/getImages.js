
//get images by route slug
const getWorkImages = (slug) =>{
   const images = {
    "sev" : ["/sev/SevProjectCorrected.webp", "/sev/sevSketch1.webp", "/sev/sevSketch2.webp", "/sev/sevSketch3.webp"]
   }
   return (images[slug])
}

export {getWorkImages}