
//get images by route slug
const getWorkImages = (slug) =>{
   const images = {
    "sev" : ["/sev/sevProjectCorrected70.png", "/sev/sevSketch1.png", "/sev/sevSketch2.png", "/sev/sevSketch3.png"]
   }
   return (images[slug])
}

export {getWorkImages}