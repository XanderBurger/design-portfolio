
//get images by route slug
import markupVid from "/videos/markup-vid2.mov"
import triVid from "/videos/tri-vid4.mov"
import acrmVid from "/videos/acrm-vid2.mov"


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
      <p>
      The TRI or Toxic Release Inventory is a program run by the EPA to provide transparency on how and where chemicals that are harmful to human health are released into the environment. The program requires facilities to report where, how, and what chemicals are being disposed of. This data is then gathered by the EPA and released to the public.
      </p>
      <br/>
      <p>This project is a series of interactive visualizations made with the TRIs 2021 datasets.</p>
      <br/>
      <a href="https://tri-web-app.vercel.app/" className="underline text-hot-pink hover:text-black">Project Link</a>
      </>
   )

}

const ACRMDescription = () => {
   return (
      <>
      <p>
      The American Computer and Robotics Museum is a gem in Bozeman Montana. It hosts some of the most significant artifacts in computing history ranging from World War 2 era Enigma Machines, early quantum computer chips, computers from the Apollo missions, and everything in between. This is a promotional campaign that contains a digital poster promoting the histories contained in the museum. 
      </p>
      <br/>
      <a href="https://xanderburger.github.io/ARCM-webApp/" className="underline text-hot-pink hover:text-black">Project Link</a>
      </>
   )

}


const info = {
   "sev" : {
     title: "Sevilleta Digitized Landscape",
     images: ["/sev/SevProjectCorrected.webp", "/sev/sevSketch1.webp", "/sev/sevSketch2.webp", "/sev/sevSketch3.webp", "/sev/desert.webp", "/sev/lab.webp"],
     videos: [],
     description: <SevDescription/>,
     tags: ["Public Art", "Data Viz"],
     sentence: "What does data collected on a ecosystem look like?",
     prevPage: "acrm",
     nextPage: "markup"
     },

     "markup": {
        title: "Markup",
        images: ["/markup/LayoutMockup.webp", "/markup/logo.png", "/markup/layout1.webp", "/markup/layout2.webp","/markup/layout3.webp", "/markup/layout-7.webp", "/markup/layout-6.webp"],
        videos: [markupVid],
        description: <MarkupDescription/>,
        tags: ["UI/UX", "Web Design", "Creative Code", "Branding"],
        sentence: "Whats the connection between the law and the environment?",
        prevPage: "sev",
        nextPage: "tri"
     },
     
     "tri": {
        title: "Interactive Dataset: the Toxic Release Inventory",
        images: ["/tri/tri1@300x.webp", "/tri/tri2@300x.webp", "/tri/tri3@300x.webp", "/tri/tri4@300x.webp", "/tri/tri5@300x.webp"],
        videos: [triVid],
        description: <TRIDescription/>,
        tags: ["Data Viz", "Web Design", "Creative Code"],
        sentence: "How can we make important datasets be accessible?",
        prevPage: "markup",
        nextPage: "acrm"
     },

     "acrm": {
        title: "American Computer and Robotics Museum",
        images: ["/acrm/board.webp", "/acrm/bus.webp", "/acrm/car.webp"],
        videos: [acrmVid],
        description: <ACRMDescription/>,
        tags: ["Web Design", "Creative Code"],
        sentence: "What does the history of computer science look like?",
        prevPage: "tri",
        nextPage: "sev"
     }
  }

const getWorkInfo = (slug) => {
   return info[slug]
}

export {getWorkInfo, info}