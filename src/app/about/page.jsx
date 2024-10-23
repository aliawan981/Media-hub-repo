import Banner from '@/components/Banner';
import AboutSection from './AboutSection';
import AboutFaq from './AboutFaq';
export default function page() {
  return (
    <>
      <Banner
        heading={
          <>
            <span className="font-roboto tracking-widest xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl">
              About Us
            </span>
          </>
        }
        description={
          <>
            <span className="font-roboto capitalize text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg">
              Media Hub offers premium stock images, videos, and design resources to empower creators and
              businesses. Discover high-quality assets to bring your ideas to life and simplify content
              creation.
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
        bgImage="/img/about.png"
        descriptionWidth="lg"
      />
      <AboutSection />
      <AboutFaq />
    </>
  );
}
