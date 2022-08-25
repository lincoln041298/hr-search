import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginTest() {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(data);
    try {
      await login(data.email, data.password);
      router.push("./AfterLogin/UserLogin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            placeholder="Enter your password "
          />
        </div>
        <button type="submit">Send to the sky</button>
      </form>
    </div>
  );
}
