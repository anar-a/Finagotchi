import { Claims, getSession } from '@auth0/nextjs-auth0'
import prisma from '@/prisma/prisma'

// -----------------------------------------------------------------------------------
// These can only be used from the server, for client API calls check /actions/user.ts
// there is little to no validation for these. Make sure not to expose it to
// the client without validation/authorization
// -----------------------------------------------------------------------------------

// Checks if the given user Id matches the user Id stored for the session's email address (authorize)
export async function checkUserIdMatchesSession(userId: number, user: Claims | undefined | null) {
    const userInfo = await getUserById(userId);

    if (!userInfo) {
        throw new Error('User not found in database')
    }
    else if (!user) {
        throw new Error('Session not found for user')
    }
    else if (userInfo.email != user.email) {
        throw new Error(`Authorize failure: User ${user.email} does not match ${userInfo.email}`)
    }

    return userInfo;
}

export async function getSessionInfo() {
    const session = await getSession();
    const user = session?.user;

    if (!user) throw new Error("Couldn't get session for user");
    
    return user;
}

export function getUserById(userId: number) {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}

export function createUser(userEmail: string) {
    return prisma.user.create({
        data: {
            email: userEmail
        }
    })
}

export function getUserByEmail(userEmail: string) {
    return prisma.user.findUnique({
        where: {
            email: userEmail
        }
    })
}