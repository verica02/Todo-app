import Head from "next/head";
import { useState } from "react";
import { connectToDatabase } from "../util/mongodb";
import Todos from "../components/Todos";
import NewTodoForm from "../components/NewTodoForm";

import "tailwindcss/tailwind.css";


export default function Home({ isConnected, todos }) {
  const [allTodos, setAllTodos] = useState(todos || []);

  return (
    

    
    <div  className=" flex justify-center bg-green-300 min-h-screen ">
      
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/wood-bg.jpg" />
      </Head>

      <main className="container bg-white rounded shadow p-16 m-4 mt-32 py-20 my-10 w-3/4 absolute ">
        
        <div className="text-3xl font-bold text-grey-darkest grid place-items-center ">
          Todo App
        </div>
        {isConnected ? (
          <>
            <h2 className="text-green-600 pt-4">
              
            </h2>
            <NewTodoForm setAllTodos={setAllTodos} />
            <Todos allTodos={allTodos} setAllTodos={setAllTodos} />
          </>
        ) : (
          <h2 className="text-red-500 pt-4">
            
          </h2>
        )}
      </main>
      <img src = "/Picture1.png" className=" absolute "/>
        <img src = "/wood-bg.jpg" className="lg:w-full static "/>
        
       
    </div>
   
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();
  const isConnected = await client.isConnected();
  const collection = db.collection("todos");

  const todos = await collection.find({}).toArray();

  return { props: { isConnected, todos: JSON.parse(JSON.stringify(todos)) } };
}
