'use server'
import { getSessionInfo, getUserBySession } from '@/db/user';
import prisma from '@/prisma/prisma'

export async function getUser() {
    const user = await getSessionInfo();

    try {
        return getUserBySession(user);
    }
    catch (error) {
        console.log("Could not get user by session", error);
    }
}
