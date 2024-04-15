import { requestCreateUser } from "@/actions/user";
import { SignupForm } from "@/components/forms/signup-form";
import { createPetDB } from "@/db/pet";

export default function signupExperience() {
    requestCreateUser()
    .then((user) => {
        if (user) {
            console.log(`User created for ${user?.email}`);

            createPetDB({
                user: Number(user.id),
                name: undefined,
            })
            .catch((error) => {
                console.log('Unable to create pet', error)
            })
        }
    })
    .catch((error) => {
        console.log('Unable to create user', error);
    })


    return (
        <body>
            <SignupForm />
        </body>
    )
}