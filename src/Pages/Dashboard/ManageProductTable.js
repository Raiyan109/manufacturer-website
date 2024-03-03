import { useEffect, useState } from "react";
import { MdEdit, MdOutlineRemoveRedEye, MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import fetcher from "../../api";
import moment from "moment";

const ManageProductTable = ({ part }) => {
    const [partDetails, setPartDetails] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

    const goToPurchase = () => {
        navigate(`parts/${part._id}`)
    }
    const partImg = `https://leviathan-server-1.onrender.com/${part.photo}`




    useEffect(() => {
        (async () => {
            try {
                const res = await fetcher.get(`api/parts/${part._id}`)
                console.log(res);
                // setPartDetails(res.data.data.parts)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (
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
                <button className="btn btn-ghost btn-xs" onClick={goToPurchase}>
                    <MdOutlineRemoveRedEye size={20} />

                </button>
                <button className="btn btn-ghost btn-xs">

                    <MdEdit size={20} />

                </button>
                <button className="btn btn-ghost btn-xs">

                    <MdDelete size={20} />
                </button>
            </th>
        </tr>
    );
};

export default ManageProductTable;