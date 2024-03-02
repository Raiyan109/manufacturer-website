import { MdEdit, MdOutlineRemoveRedEye, MdDelete } from "react-icons/md";

const ManageProductTable = ({ part }) => {
    console.log(part);
    const partImg = `https://leviathan-server-1.onrender.com/${part.photo}`
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
            {/* <td>Purple</td> */}
            <th>
                <button className="btn btn-ghost btn-xs">
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