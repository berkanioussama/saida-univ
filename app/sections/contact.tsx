import ContactForm from "../components/contactForm";
import Map from "../components/map";

const Contact = () => {
  return (
    <div className="flex flex-col gap-24 py-24">
      <div className="flex">
        <div className="w-1/2">
          <ContactForm />
        </div>
        <div className="w-1/2">
          <Map/>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;