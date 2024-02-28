export const LogoutButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a className="button__logout" href="/api/auth/logout">
        Log Out
      </a>
    </button>
  );
};