import { useContext } from "react";
import Navbar from "../components/Navbar";
import { LoginContext } from "../context/Context";
const Login = () => {
  const { login, setLogin } = useContext(LoginContext);
  async function loginn() {
    // const auth = await fetch(import.meta.env.VITE_BACKEND + "/api/login");
    // setLogin(auth.success);
  }
  return (
    <>
      <header className="fixed left-0 top-0">
        <Navbar />
      </header>
      <main className="pl-36 flex flex-col justify-center items-center h-screen">
        <section>
          <form
            onSubmit={loginn}
            className="flex flex-col border-2 border-gruen p-5 rounded-md"
          >
            <input
              type="text"
              name="name"
              placeholder="username"
              className="input input-bordered border-2 border-gruen w-full max-w-xs p-2 my-2"
            />
            <input
              type="text"
              name="baujahr"
              placeholder="password"
              className="input input-bordered w-full max-w-xs p-2 my-2 border-2 border-gruen"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
