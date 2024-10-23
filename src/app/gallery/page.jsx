import Banner from '@/components/Banner';
import GalleryCollection from './GalleryCollection';
export default function page() {
  return (
    <>
      <Banner
        heading={
          <>
            <span className="font-roboto tracking-widest xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl">
              Our Collections
            </span>
          </>
        }
        description={
          <>
            <span className="font-roboto text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg">
              Discover A Last Collection Of Captivating Premium Iages That Add Depth And Vibrancy To Any
              Project. Explore Stunning Landscapes, Abstract Patterns, And Visually Appealing Textures To
              Enhance Your Designs.
            </span>
          </>
        }
        imgButton={
          <>
            <span className="font-roboto">Browse Images</span>
          </>
        }
        authButton={
          <>
            <span className="font-roboto">Become an author</span>
          </>
        }
        bgImage="/img/collectionsPage.png"
        descriptionWidth="xl"
      />
      <GalleryCollection />
    </>
  );
}
