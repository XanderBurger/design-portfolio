import mainSev from "@/app/assets/images/sev/sevProjectCorrected70.png"
import sketch1 from "@/app/assets/images/sev/sevSketch1.png"
import sketch2 from "@/app/assets/images/sev/sevSketch2.png"
import sketch3 from "@/app/assets/images/sev/sevSketch3.png"


//get images by route slug
const getWorkImages = (slug) =>{
   const images = {
    "sev" : [mainSev, sketch1, sketch2, sketch3]
   }

   return (images[slug])
}

export {getWorkImages}