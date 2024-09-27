import { Analytics } from "@vercel/analytics/react";
import Menu from "./components/menu";
import BouncingIn from "./components/bounceIn";
import Sketch from "./components/attractions";

const books1 = [
  { title: "A fire Upon the Deep", author: "Venor Vinge" },
  { title: "The Light Eaters", author: "Zoe Schlanger" },
  { title: "Code", author: "Charles Petzold" },
  { title: "Neuromancer", author: "William Gibson" },
  { title: "Blindsight", author: "Peter Watts" },
  { title: "Project Hail Mary", author: "Andy Weir" },
  { title: "Children of Time", author: "Adrian Tchaikovsky" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin" },
  { title: "Parable of the Sower", author: "Octavia E. Butler" },
];

const siteLinks = [
  {
    title: "Laurie Wired",
    description: "Great information on cybersecurity & malware",
    link: "https://www.youtube.com/@lauriewired",
  },
  {
    title: "The Nightingale",
    description: "Article on all things related to data viz",
    link: "https://nightingaledvs.com/",
  },
  {
    title: "Velvetyne Libre Friends",
    description: "Links to open source fonts and foundries",
    link: "https://velvetyne.fr/velvetyne-libre-friends/",
  },
  {
    title: "James Webb Images",
    description: "Latest Images from the James Webb Telescope",
    link: "https://www.flickr.com/photos/nasawebbtelescope/albums/72177720313923911/with/53912178488",
  },
  {
    title: "National Lichens & Air Quality Database",
    description: "UFS database on lichens (What more do you need?)",
    link: "https://gis.nacse.org/lichenair/index.php",
  },
  {
    title: "My Pinterest Pins",
    description: "Images the influence me",
    link: "https://www.pinterest.com/xanburger/pins/",
  },
];

const mainContent = (
  <div className='bg-white rounded-lg grid h-full overflow-hidden relative p-5 z-10'>
    <p className='font-IBMPlex uppercase text-2xl z-10 bg-light-gray p-2 rounded-lg w-fit h-fit'>
      HOWDY!
    </p>
    <div
      id='home-container'
      className='fixed top-0 left-0 w-full h-full z-0 rounded-lg overflow-hidden'>
      <Sketch
        backgroundColor='#FFFFFF'
        size={{ x: 500, y: 500 }}
        frameRate={60}
      />
    </div>

    <div className='self-end font-IBMPlexMono uppercase underline flex space-x-2 z-10 bg-light-gray p-2 rounded-lg w-fit'>
      <a
        href='mailto:xanderbdesign@gmail.com'
        className='hover:text-hot-pink hover:cursor-pointer'>
        email
      </a>
      <a
        href='https://github.com/XanderBurger'
        className='hover:text-hot-pink hover:cursor-pointer'>
        github
      </a>
      <a
        href='https://www.linkedin.com/in/xander-burger-25673b28a'
        className='hover:text-hot-pink hover:cursor-pointer'>
        linkedIn
      </a>
    </div>
  </div>
);

const largeHeader = (
  <div className='rounded-lg bg-white p-5 flex justify-center'>
    <h1 className='font-IBMPlex text-[9vw] sm:text-[11vw] xl:text-[9vw] tracking-tighter leading-[7vw] uppercase font-[400]'>
      Xander—Burger
    </h1>
  </div>
);

const bookMarquee = (
  <div className='rounded-lg bg-white p-5 overflow-x-hidden'>
    <h4 className='pb-5 text-lg'>What Ive Been Reading</h4>
    <div className='animate-marquee flex overflow-x-hidden rounded-lg'>
      {books1.map((e) => {
        return (
          <div
            key={e.title}
            className=' text-nowrap pr-5 border-r border-dashed border-almost-black mr-5'>
            <h3 className='text-xl uppercase'>{e.title}</h3>
            <p className='font-[200]'>{e.author}</p>
          </div>
        );
      })}
    </div>
  </div>
);

const siteMarquee = (
  <div className='rounded-lg bg-white p-5 overflow-x-hidden'>
    <h4 className='pb-5 text-lg'>Where Ive Been on the Web</h4>
    <div className='animate-marquee flex overflow-x-hidden rounded-lg'>
      {siteLinks.map((e) => {
        return (
          <div
            key={e.title}
            className='text-nowrap pr-5 border-r border-dashed border-almost-black mr-5'>
            <a
              className='text-xl uppercase underline hover:text-hot-pink'
              href={e.link}>
              {e.title}
            </a>
            <p className='font-[200]'>{e.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 z-10 w-full overflow-x-hidden max-w-[1500px]'>
        <BouncingIn
          items={[largeHeader]}
          containerClass='grid col-span-1 lg:col-span-12 duration-300 ease-out'
        />
        <BouncingIn
          items={[mainContent]}
          containerClass='grid col-span-1 h-[600px] lg:h-auto lg:col-span-8 grid duration-300 ease-out'
        />

        <Menu containerClass='grid space-y-2 col-span-1 lg:col-span-4 duration-300 ease-out' />
        <BouncingIn
          items={[siteMarquee]}
          containerClass='grid col-span-1 lg:col-span-6 duration-300 ease-out overflow-hidden rounded-lg'
        />
        <BouncingIn
          items={[bookMarquee]}
          containerClass='grid col-span-1 lg:col-span-6 duration-300 ease-out overflow-hidden h-full rounded-lg'
        />
      </div>
      <Analytics />
    </>
  );
}
