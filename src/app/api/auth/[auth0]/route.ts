import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/budget",
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "/signup-experience",
  }),
  logout: handleLogout({
    returnTo: "/"
  })
});