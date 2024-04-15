import prisma from "@/prisma/prisma";
import { pet } from "@prisma/client";

export type PetData = {
    user: number,
    name: string | undefined,
}

function validatePet(pet: pet | PetData) {
    if (pet.name) {
        if (pet.name.length > 20) {
            throw new Error("Pet name must not be more than 20 characters");
        }

        // if (pet.name !== pet.name.replace(/\s+/g, '')) {
        //     throw new Error("Pet name must not contain spaces");
        // }
    }

}

export function getPetDB(userId: number) {
    return prisma.pet.findFirst({
        where: {
            user: userId
        }
    })
}

export function createPetDB(petData: PetData) {
    validatePet(petData);

    return prisma.pet.create({
        data: {
            user: petData.user,
            name: petData.name
        }
    })
}

export function editPetDB(pet: pet) {
    validatePet(pet);

    return prisma.pet.update({
        where: {
            id: pet.id
        },
        data: {
            name: pet.name
        }
    })
}