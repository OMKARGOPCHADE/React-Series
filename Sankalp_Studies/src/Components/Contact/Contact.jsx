import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 text-center"
    >
      <h3 className="text-3xl font-semibold mb-6 text-blue-900 dark:text-white">
        Contact Us
      </h3>

      {/* Contact Details */}
      <div className="mb-8 space-y-2 text-gray-700 dark:text-gray-300 justify-items-center">
        <ul className="space-y-3">
          <li className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>
              Sankalp Study Point, New Mondha, Hyder Bagh,Dashmesh Nagar,
            </span>
            <span>Harsh Nagar, Nanded-Waghala, Nanded</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaPhoneAlt className="text-yellow-400" />
            <a href="tel:+91 8857850611">
              +91 8857850611</a>
          </li>
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:maheshgopchhade@gmail.com">
              contact@studypoint.com
            </a>
          </li>
        </ul>
      </div>

      {/* Google Map Embed */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Sankalp Study Point Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15074.422566132054!2d77.3132624!3d19.1687321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7de422cfabd%3A0xc4930191bb689d81!2sSankalp%20study%20point!5e0!3m2!1sen!2sin!4v1754508227846!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
