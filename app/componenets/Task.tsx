"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa";
import { deleteTodo, editTodo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router =useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [tastTolEdit, setTastToEdit] = useState<string>(task.text);
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: tastTolEdit
    });
    setTastToEdit("");
    setOpenModalEdit(!openModalEdit);
    router.refresh();
  };

  const handleDelete = async (id:string) => {
    await deleteTodo(id)
    setOpenModalDeleted(!openModalDeleted);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <th>{task.text}
     
      </th>
      <td className="flex gap-2 justify-end">
        <BiEdit size={21} className="text-blue-500" cursor="pointer" onClick={()=>setOpenModalEdit(!openModalEdit)}/>
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitNewTodo} className="flex gap-2">
            <input
              value={tastTolEdit}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              onChange={(e) => setTastToEdit(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-fit">
              Update task <FaPlus size={18} />
            </button>
          </form>
        </Modal>
        <RiDeleteBin5Line
          size={21}
          onClick={()=>setOpenModalDeleted(!openModalDeleted)}
          className="text-rose-600"
          cursor="pointer"
        />
            <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg font-semibold">Are you sure, you want to delete this task?</h3>
          <div className="modal-action">
            <button onClick={()=>handleDelete(task.id)} className="btn bg-red-500 text-white">Yes</button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
