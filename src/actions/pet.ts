'use server'

import { PetData, editPetDB, getPetDB } from "@/db/pet";
import { getUser } from "./user";
import { pet } from "@prisma/client";

export async function getPet() {
    try {
        const user = await getUser();
        if (user) {
            return getPetDB(Number(user.id));
        }
    }
    catch (error) {
        console.log("Couldn't get pet", error);
    }
}

export async function editPet(petData: pet) {
    try {
        const user = await getUser();
        if (user && user.id === petData.user) {  // check ownership
            return editPetDB(petData);
        }
    }
    catch (error) {
        console.log("Couldn't edit pet", error);
    }
}