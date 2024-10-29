import ContactForm from "../components/contactForm";
import Map from "../components/map";

const Contact = () => {
  return (
    <div className="flex flex-col gap-24 py-24">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <ContactForm />
        </div>
        <div className="md:w-1/2 p-4">
          <Map/>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;