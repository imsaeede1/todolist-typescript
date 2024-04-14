

import { useEffect, useState } from 'react';
import { getAllTodos} from "../api";
import AddTask from "./componenets/AddTask";
import TodoList from "./componenets/TodoList";


export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className='container mx-auto w-2/4 mt-8 flex flex-col gap-8'>

   <AddTask/>
   <TodoList tasks={tasks}/>
 
    </main>
  );
}
