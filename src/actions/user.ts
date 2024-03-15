'use server'
import { createUser, getSessionInfo, getUserByEmail } from '@/db/user';

export async function getUser() {
    const user = await getSessionInfo();

    try {
        return getUserByEmail(user.email);
    }
    catch (error) {
        console.log("Could not get user by session", error);
    }
}

export async function requestCreateUser() {
    const user = await getSessionInfo();

    try {        
        if (user) {
            const existingUser = await getUserByEmail(user.email);
            if (!existingUser) {
                return createUser(user.email);
            }
            else {
                console.log(`User already exists for ${user.email}`);
            }
        }
    }
    catch (error) {
        console.log(`Error creating user for ${user.email}`, error);
    }
}
