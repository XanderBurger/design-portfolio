
//get images by route slug
import markupVid from "/videos/markup-vid.mov"
import triVid from "/videos/tri-vid3.mov"
import acrmVid from "/videos/acrm-vid2.mov"

const getWorkInfo = (slug) => {
   const info = {
    "sev" : {
      title: "Sevilleta NWR",
      images: ["/sev/SevProjectCorrected.webp", "/sev/sevSketch1.webp", "/sev/sevSketch2.webp", "/sev/sevSketch3.webp"],
      videos: [],
      description: "A project done in collaboration with the Sevilleta National Wildlife Refuge about the collection and transfer of digital ecological data."
      },
      "markup": {
         title: "Markup",
         images: ["/markup/layoutMockup.webp", "/markup/logo.png", "/markup/layout1.webp", "/markup/layout2.webp","/markup/layout3.webp", "/markup/layout4.webp"],
         videos: [markupVid],
         description: "Submission to the RSA design awards"
      },
      "tri": {
         title: "Toxic Release Inventory Visualization",
         images: ["/tri/tri1@300x.webp", "/tri/tri2@300x.webp", "/tri/tri3@300x.webp", "/tri/tri4@300x.webp", "/tri/tri5@300x.webp"],
         videos: [triVid],
         description: "The TRI or Toxic Release Inventory is a program run by the EPA to provide transparency on how and where chemicals that are harmful to human health are released into the environment. The program requires facilities to report where, how, and what chemicals are being disposed of. This data is then gathered by the EPA and released to the public. "
      },
      "acrm": {
         title: "American Computer and Robotics Museum",
         images: ["/acrm/board.webp", "/acrm/bus.webp", "/acrm/car.webp"],
         videos: [acrmVid],
         description: "Promotional campaign for the American Computer and Robotic Museum."
      }
   }
   return info[slug]
}

export {getWorkInfo}