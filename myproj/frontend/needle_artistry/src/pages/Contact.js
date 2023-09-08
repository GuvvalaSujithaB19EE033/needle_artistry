import { Outlet, useNavigation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";


function ContactPage() {
    // const navigation = useNavigation();

    return (
        <>
            <Contact />
            <ContactForm />
        </>
    );
}

export default ContactPage;
