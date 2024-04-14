"use client";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";


const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
    });
    setNewTaskValue("");
    setModalOpen(!modalOpen);
    router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="btn btn-primary w-full"
      >
        Add new task <FaPlus size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo} className="flex gap-2">
          <input
            value={newTaskValue}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
             onChange={(e) => setNewTaskValue(e.target.value)}
          />
          <button type="submit" className="btn text-white bg-green-600 w-fit">
            Add new task <FaPlus size={18} />
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
