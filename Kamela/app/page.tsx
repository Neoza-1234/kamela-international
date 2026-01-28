
import Hero from "@/components/Index/Hero";
import About from "@/components/Index/About";
import Services from "@/components/Index/Services";
import CourseCategory from "@/components/Index/Course-Category";
import Purpose from "@/components/Index/Purpose";
import Accreditations from "@/components/Index/Accreditations";
import Testimonials from "@/components/Index/Testimonials";
import Paralex from "@/components/Index/Commitment";
import ContactUs from "@/components/Index/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CourseCategory />
      <Paralex />
      <Services />
      <Purpose />
      <Accreditations />
      <Testimonials />
      <ContactUs />
    </>
  );
}