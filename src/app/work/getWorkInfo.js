
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
      description: <SevDescription/>
      },
      "markup": {
         title: "Markup",
         images: ["/markup/LayoutMockup.webp", "/markup/logo.png", "/markup/layout1.webp", "/markup/layout2.webp","/markup/layout3.webp", "/markup/layout4.webp"],
         videos: [markupVid],
         description: <MarkupDescription/>
      },
      "tri": {
         title: "Toxic Release Inventory Visualization",
         images: ["/tri/tri1@300x.webp", "/tri/tri2@300x.webp", "/tri/tri3@300x.webp", "/tri/tri4@300x.webp", "/tri/tri5@300x.webp"],
         videos: [triVid],
         description: <TRIDescription/>
      },
      "acrm": {
         title: "American Computer and Robotics Museum",
         images: ["/acrm/board.webp", "/acrm/bus.webp", "/acrm/car.webp"],
         videos: [acrmVid],
         description: <ACRMDescription/>
      }
   }
   return info[slug]
}

const SevDescription = () => {
   return(
      <>
      <p>A project done in collaboration with the Sevilleta National Wildlife Refuge about the collection and transfer of digital ecological data.</p>
      <br/>
      <p>The final piece is a 5’ by 4’ multimedia drawing that was installed at the visitor center at the wildlife refuge. The artwork consists of silkscreens of mapping data, remote sensors, research infrastructure, and desert flora and an abstract drawing overlaid on top representative of the large amounts of data that are collected each day studying this desert ecosystem.</p>
      <br/>
      <p>The project was completed as part of a summer residency at the Sevilleta National Wildlife Refuge, working with the scientists who study the landscape. </p>
      </>
   )
}

const MarkupDescription = () => {
   return(
      <>
      <p>
      My submission to RSA student design awards with the prompt “How might we empower communities to use AI to tackle the local challenges of climate change?”.
      </p>
      <br/>
      <p>Markup is a tool that acts as a bridge between environmental law and the actual land the communities live on. The tool uses AI to interpret how current or proposed laws may affect your local ecosystem. </p>
      </>
   )
}

const TRIDescription = () => {
   return (
      <>
      <a href="https://tri-web-app.vercel.app/" className="underline hover:text-hot-pink">Project Link</a>
      <br/>
      <br/>
      <p>
      The TRI or Toxic Release Inventory is a program run by the EPA to provide transparency on how and where chemicals that are harmful to human health are released into the environment. The program requires facilities to report where, how, and what chemicals are being disposed of. This data is then gathered by the EPA and released to the public.
      </p>
      <br/>
      <p>This project is a series of interactive visualizations made with the TRI's 21 datasets.</p>
      </>
   )

}

const ACRMDescription = () => {
   return (
      <>
      <a href="https://xanderburger.github.io/ARCM-webApp/" className="underline hover:text-hot-pink">Project Link</a>
      <br/>
      <br/>
      <p>
      A promotional campaign for the American Computer and Robotics Museum.
      </p>
      </>
   )

}

export {getWorkInfo}