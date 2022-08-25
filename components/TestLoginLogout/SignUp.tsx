import { useAuth } from "@/context/UserContext";
import { useState } from "react";

export default function SignUp() {
  const { user, signup } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(user);

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e: any) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your passwrd"
            required
            onChange={(e: any) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </div>
        <button type="submit">Hi lets sign up</button>
      </form>
    </div>
  );
}
