import { requestCreateUser } from "@/actions/user";
import { SignupForm } from "@/components/forms/signup-form";

export default function signupExperience() {
    requestCreateUser()
    .then((user) => {
        if (user) {
            console.log(`User created for ${user?.email}`);
        }
    })
    .catch((e) => {
        console.log('Unable to create user', e);
    })

    return (
        <body>
            <SignupForm />
        </body>
    )
}