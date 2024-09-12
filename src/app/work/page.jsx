import BouncingIn from "../components/bounceIn";
import Arrow from "../components/arrow";
import NavBar from "../components/navBar";
import WorkDisplay from "../components/workDisplay";
import { getImagesUrls } from "./getImageUrls";

export default function Work() {
  const imageUrls = getImagesUrls();
  const arrayMiddleIndex = Math.floor(imageUrls.length / 2);
  const imageUrlsFirstHalf = imageUrls.slice(0, arrayMiddleIndex);
  const imageUrlsSecondHalf = imageUrls.slice(arrayMiddleIndex);
  const workImagesCol1 = [];
  const workImagesCol2 = [];

  imageUrlsFirstHalf.forEach((e) => {
    workImagesCol1.push(
      <WorkDisplay imageUrl={e} alt={e} title={e.split("/")[2].split(".")[0]} />
    );
  });
  imageUrlsSecondHalf.forEach((e) => {
    workImagesCol2.push(
      <WorkDisplay imageUrl={e} alt={e} title={e.split("/")[2].split(".")[0]} />
    );
  });

  const linkHeader = (
    <h1 className='p-5 rounded-lg bg-white text-2xl uppercase text-center'>
      Deployed Projects
    </h1>
  );

  const triLink = (
    <a
      className='flex p-5 group rounded-lg bg-white justify-end'
      href='https://tri-web-app.vercel.app/'>
      <h1 className='text-2xl group-hover:text-hot-pink pr-2 mr-auto'>
        Toxic Release Inventory: Interactive
      </h1>
      <Arrow direction='right' />
    </a>
  );
  const MTIPLink = (
    <a
      className='flex p-5 group rounded-lg bg-white justify-end'
      href='https://www.montanainnovationpartnership.org/'>
      <h1 className='text-2xl group-hover:text-hot-pink pr-2 mr-auto'>
        Montana Innovation Partnership
      </h1>
      <Arrow direction='right' />
    </a>
  );

  const ACRM = (
    <a
      className='flex p-5 group rounded-lg bg-white justify-end'
      href='https://xanderburger.github.io/ARCM-webApp/'>
      <h1 className='text-2xl group-hover:text-hot-pink pr-2 mr-auto'>
        American Computer & Robotics Museum Invite
      </h1>
      <Arrow direction='right' />
    </a>
  );

  const externalLinks = [linkHeader, triLink, ACRM, MTIPLink];
  return (
    <main className='flex justify-center w-full'>
      <div className='w-full flex flex-col justify-center max-w-[1500px] space-y-5'>
        <NavBar />
        <BouncingIn
          items={externalLinks}
          containerClass='flex w-full flex-col space-y-2'
        />
        <div className='grid grid-cols-1 w-full gap-5 lg:grid-cols-2'>
          <BouncingIn
            items={workImagesCol1}
            containerClass={"flex flex-col space-y-5"}
          />
          <BouncingIn
            items={workImagesCol2}
            containerClass={"flex flex-col space-y-5"}
          />
        </div>
      </div>
    </main>
  );
}
