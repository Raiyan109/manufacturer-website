import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text, itemId }) => {


    const [purchase, setPurchase] = useState([])
    // const { id } = useParams()
    useEffect(() => {
        fetch(`https://leviathan-server-1.onrender.com/api/parts/${itemId}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [itemId])

    const partImg = `https://leviathan-server-1.onrender.com/${purchase.photo}`

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white h-[600px] w-[500px] md:w-[700px] lg:w-[900px] rounded-xl -mt-10 flex flex-col gap-5 overflow-auto p-5 z-20 sticky top-12"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button onClick={handleClose} className="bg-primary text-white place-self-end p-2 mr-2 rounded-full">
                    <MdClose />
                </button>
                <div className="badge badge-lg badge-secondary">{purchase.category}</div>
                <img src={partImg} alt="" className="w-48 h-48 object-contain" />
                <h1 className="text-4xl font-semibold">{purchase.name}</h1>
                <h4>{purchase.desc}</h4>

                <h5><span className="text-primary font-semibold">Price:</span> $ {purchase.price}</h5>
                <h5><span className="text-primary font-semibold">Available:</span> $ {purchase.available}</h5>
                <h5><span className="text-primary font-semibold">Min order:</span> $ {purchase.order}</h5>

            </motion.div>
        </Backdrop>
    );
};


export default Modal;