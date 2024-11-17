// import React from "react";
// import styled from "styled-components";

// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
//   max-width: 400px;
//   margin: 5rem auto;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const Title = styled.h2`
//   font-family: ${({ theme }) => theme.fonts.header};
//   margin-bottom: 1.5rem;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
//   font-family: ${({ theme }) => theme.fonts.body};
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-family: ${({ theme }) => theme.fonts.body};
//   font-size: 1rem;
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.accent};
//   }
// `;

// const Login = () => {
//   return (
//     <LoginContainer>
//       <Title>Login</Title>
//       <Input type="email" placeholder="Email" />
//       <Input type="password" placeholder="Password" />
//       <Button>Login</Button>
//     </LoginContainer>
//   );
// };

// export default Login;

import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore"; // Zustand store for authentication

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 400px;
  margin: 5rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FormContainer = styled.div`
width:100%;
text-align:center;
`
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.header};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

const PasswordToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  margin-top: -1.5rem;
  align-self: flex-end;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ClickHereSpan = styled.span`
  color: blue;
  cursor: pointer;
`;

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password || !email.includes("@") || password.length < 6) {
      setError("Please enter valid details");
      return;
    }
    setLoading(true);
    try {
      const response = await login(email, password);
      if (response.status >= 400) {
        setError(response?.data?.message || "Could not login");
      } else {
        setEmail("");
        setPassword("");
        navigate("/"); // Redirect after successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer>
      <Title>Login</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>

        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <PasswordContainer>
          <PasswordInput
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <PasswordToggleButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </PasswordToggleButton>
        </PasswordContainer>
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
        <p>
          <Link to="/forgot-password">
            Forget Password? <ClickHereSpan>Click Here!</ClickHereSpan>
          </Link>
        </p>
        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            <ClickHereSpan>Sign Up</ClickHereSpan>
          </Link>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Login;
