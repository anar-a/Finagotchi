'use client'

import { editPet, getPet } from "@/actions/pet";
import { editUser, getUser } from "@/actions/user"
import { pet, user } from "@prisma/client";
import { useEffect, useRef, useState } from "react"
import { FaXmark } from "react-icons/fa6";
import { PacmanLoader, PulseLoader } from "react-spinners";

type InputData = {
  name: string,
  petName: string
}

export default function UserProfile(props: any) {
  const [user, setUser] = useState<user | null | undefined>();
  const [pet, setPet] = useState<pet | null | undefined>();
  const [editing, setEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inputs, setInputs] = useState({} as InputData);
  const [initialInputs, setInitialInputs] = useState({});
  const formRef = useRef<HTMLFormElement>(null);

  function toggleEditing() {
    setEditing(!editing);
    setInputs(initialInputs as InputData);
  }

  function refreshValues(user: user, pet: pet) {
    const formInputs = {
      name: user.name,
      petName: pet.name
    }

    setInputs(formInputs as InputData);
    setInitialInputs(formInputs);
  }

  useEffect(() => {
    (async () => {
      const user = await getUser();
      const pet = await getPet()
      setUser(user);
      setPet(pet);
      
      if (user && pet) {
        refreshValues(user, pet);
      }
    })();

  }, []);

  function onChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({...values, [name]: value}));
  }

  async function onSubmit(event: any) {
    event.preventDefault();

    setSubmitting(true);
    
    if (!formRef.current) {
      return;
    }

    const data = Object.fromEntries((new FormData(formRef.current)).entries())

    try {
      if (user && pet) {
        user.name = data.name as string;
        pet.name = data.petName as string;
  
        const userEdit = await editUser(user);
        const petEdit = await editPet(pet);
  
        if (userEdit && petEdit) {
          refreshValues(userEdit, petEdit);
          setEditing(false);
        }
      }
    }
    finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative bg-white rounded-xl py-5 px-10 shadow-xl border-slate-400 border lg:min-w-[400px] md:min-w-[200px]">
      <button
        className="absolute top-0 right-0 m-3 bg-red-600 rounded-md"
        onClick={props.toggleModal}>
        <FaXmark className="w-5 h-5 fill-white m-1" />
      </button>
      
      <h1 className="text-3xl font-semibold py-2"> User Profile </h1>
      {user && pet ? (
        <form onSubmit={onSubmit} ref={formRef}>
          <h1 className="text-xl pt-1"> Email </h1>
          <div className="flex items-center relative mt-1 mb-2">
            <input 
            className="border border-black rounded-md w-full px-1 py-0.5 text-lg text-gray-500" 
            value={user.email}
            disabled={true}
            name="email"
            type="email"
            onChange={onChange} />

            {editing && <h1 className="right-0 absolute mr-2 text-lg text-center"> 🔒 </h1>}
          </div>

          <h1 className="text-xl"> Name </h1>
          <input 
          className="border border-black rounded-md mt-1 mb-2 w-full px-1 py-0.5 text-lg disabled:text-gray-500" 
          value={inputs.name}
          disabled={!editing}
          name="name"
          type="text"
          onChange={onChange}/>

          <h1 className="text-xl pt-1"> Pet Name </h1>
          <input 
          className="border border-black rounded-md mt-1 mb-2 w-full px-1 py-0.5 text-lg disabled:text-gray-500"
          value={inputs.petName}
          name="petName"
          disabled={!editing}
          maxLength={20}
          onChange={onChange}/>

          <div className="flex justify-end mt-3">
            {(!editing) ? (
              <button 
              className="text-xl bg-purple-700 text-white font-medium py-1 px-2 rounded-md"
              onClick={toggleEditing}>
                EDIT
              </button>
            ) : (
              <div className="flex justify-between w-full">
                <button 
                className="text-xl bg-white text-black border-black border font-medium py-1 px-2 rounded-md"
                onClick={toggleEditing}>
                  CANCEL
                </button>
                <button 
                className="text-xl bg-purple-700 text-white font-medium py-1 px-2 rounded-md"
                disabled={submitting}>
                  {(!submitting) ? (
                    'SAVE'
                    ) : (
                      <PulseLoader size={8} color="#FFFFFF"/>
                    )}
                </button>
              </div>
            )}

          </div>
        </form>
        ) : (
          <> 
            <h1 className="text-lg font-medium py-2"> Loading User Information... </h1>
            <div className="flex justify-center py-3">
              <PacmanLoader color="#fcba03" /> 
            </div>
          </> 
        )}   
    </div>
  )
}