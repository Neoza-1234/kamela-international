import About from "./About/page";
import Accreditations from "./Accreditations/page";
import CourseCategory from "./Course Category/page";
import Hero from "./Hero/page";
import Paralex from "./Paralex/page";
import Purpose from "./Purpose/page";
import Services from "./Services/page";
import Testimonials  from "./Testimonials/page";
import ContactUs from "./Contact Us/page";
import WhyChooseUs from "./Why Choose Us/page";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <CourseCategory />
      <Accreditations />
      <Paralex />
      <Services />
      <Purpose />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
    </>
  );
}
