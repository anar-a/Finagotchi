import React from "react";

export const PetName = ({ prevStep, nextStep, handleChange, values }: any) => {

    const Previous = (event: any) => {
        event.preventDefault();
        prevStep();
    }

    const Continue = (event: any) => {
        event.preventDefault();
        console.log(values);
        nextStep();
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <h1>Enter Your Pets Name!</h1>
            <form onSubmit={Continue}>
                <label>Pet Name</label>
                <input
                    type="text"
                    name="petName"
                    placeholder="Pet Name"
                    value={values.petName}
                    onChange={event => handleChange('petName', event.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg text-slate-100"
                    onClick={Previous}
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="bg-blue-400 p-2 rounded-lg text-slate-100"
                    onSubmit={Continue}
                >
                    Submit
                </button>
            </form>
        </div>

    )

}
