export const SignupButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a className="button__sign-up" href="/api/auth/signup">
        Sign Up
      </a>
    </button>
  );
};