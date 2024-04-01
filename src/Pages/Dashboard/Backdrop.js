import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {

    return (
        <motion.div
            onClick={onClick}
            className="backdrop bg-gray-600 h-screen fixed inset-0 bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;