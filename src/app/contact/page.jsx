import Banner from '@/components/Banner';
import ContactForm from './ContactForm';
import AboutFaq from '../about/AboutFaq';

export default function page() {
  return (
    <>
      <Banner
        heading={
          <>
            <span className="font-roboto tracking-widest xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl">
              Contact Us
            </span>
          </>
        }
        description={
          <>
            <span className="font-roboto capitalize text-base xl:text-lg lg:text-lg md:text-lg sm:text-lg">
              At Media Hub, we are dedicated to providing premium stock images, videos, and design resources
              to empower creators and businesses. If you have any questions or need assistance, feel free to
              reach out to us. We're here to help you bring your ideas to life and simplify your creative
              process!
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
        bgImage="/img/contactbackground.png"
        descriptionWidth="xl"
      />
      <ContactForm />
      <AboutFaq />
    </>
  );
}
