import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contract = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">
          <a href={`tel:${CONTACT.phoneNo}`} className="border-b relative">
            {CONTACT.phoneNo}
          </a>
        </p>
        <p className="my-4">
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contract;
