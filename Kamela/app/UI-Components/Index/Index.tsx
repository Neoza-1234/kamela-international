import About from "./About/page";
import Accreditations from "./Accreditations/page";
import CourseCategory from "./Course Category/page";
import Hero from "./Hero/page";
import Paralex from "./Paralex/page";
import Purpose from "./Purpose/page";
import Services from "./Services/page";
import { Testimonials } from "./Testimonials/page";
import ContactUs from "./Contact Us/page";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <CourseCategory />
      <Paralex />
      <Services />
      <Accreditations />
      <Purpose />
      <Testimonials />
      <ContactUs />
    </>
  );
}
