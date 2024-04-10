import { useEffect, useState } from "react";
import { MdEdit, MdOutlineRemoveRedEye, MdDelete } from "react-icons/md";
import fetcher from "../../api";
import moment from "moment";
import { AnimatePresence, motion } from 'framer-motion'
import Modal from "./Modal";
import EditModal from "./EditModal";

const ManageProductTable = ({ part }) => {
    const [itemId, setItemId] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);


    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    const editClose = () => setEditModalOpen(false);
    const editOpen = () => setEditModalOpen(true);

    const showModal = (id) => {
        setItemId(id)
        if (modalOpen) {
            close()
            console.log(id);
        }
        else {
            open()
        }
    }
    const showEditModal = (id) => {
        setItemId(id)
        if (editModalOpen) {
            editClose()
            console.log(id);
        }
        else {
            editOpen()
        }
    }

    const partImg = `https://leviathan-server-1.onrender.com/${part.photo}`

    useEffect(() => {
        (async () => {
            try {
                const res = await fetcher.get(`api/parts/${part._id}`)
                // console.log(res);
                // setPartDetails(res.data.data.parts)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={partImg} alt={part.name} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{part.name}</div>
                            {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                    </div>
                </td>
                <td>
                    ${part.price}
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>
                    {part.category}
                </td>
                <td>
                    {moment(part.createdAt).format('MMMM Do YYYY, h a')}
                </td>
                <th>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                        onClick={() => showModal(part?._id)} className="btn btn-ghost btn-xs" >
                        <MdOutlineRemoveRedEye size={20} />

                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}

                        onClick={() => showEditModal(part?._id)} className="btn btn-ghost btn-xs" >
                        <MdEdit size={20} />

                    </motion.button>

                    <button className="btn btn-ghost btn-xs">

                        <MdDelete size={20} />
                    </button>
                </th>

            </tr>
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                // exitBeforeEnter={true}
                mode='wait'
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {
                    modalOpen && <Modal modalOpen={modalOpen} handleClose={close} itemId={itemId}
                    />
                }
            </AnimatePresence>
            <AnimatePresence
                // Disable any initial animations on children that
                // are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before entering component is rendered
                // exitBeforeEnter={true}
                mode='wait'
                // Fires when all exiting nodes have completed animating out
                onExitComplete={() => null}
            >
                {
                    editModalOpen && <EditModal editModalOpen={editModalOpen} handleClose={editClose} itemId={itemId}
                    />
                }
            </AnimatePresence>
        </>
    );
};

export default ManageProductTable;