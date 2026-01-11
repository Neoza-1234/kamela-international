
import { StaggerTestimonials } from "@/components/stagger-testimonials";

const Testimonials = () => {
  return (

    <div className="bg-white py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-center mb-12">
          What Our Clients Say
        </h2>
        <StaggerTestimonials />
      </div>
    </div>
  );
}


export { Testimonials };