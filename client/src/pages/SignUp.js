// import React from "react";
// import styled from "styled-components";

// const SignUpContainer = styled.div`
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

// const SignUp = () => {
//   return (
//     <SignUpContainer>
//       <Title>Sign Up</Title>
//       <Input type="text" placeholder="First Name" name="firstName" />
//       <Input type="text" placeholder="Last Name" name="lastName" />
//       <Input type="email" placeholder="Email" name="email" />
//       <Input type="text" placeholder="Phone Number" name="phoneNumber" />
//       <Input type="password" placeholder="Password" name="password" />
//       <Button>Sign Up</Button>
//     </SignUpContainer>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore"; // Zustand store for authentication

// Use same styles as the Login component

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

// Reuse Title, Input, Button, PasswordContainer, PasswordInput, PasswordToggleButton, and ClickHereSpan styles

const Signup = () => {
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !email.includes("@") ||
      password.length < 6 ||
      phoneNumber.length < 10
    ) {
      setError("Please enter valid details");
      return;
    }
    setLoading(true);
    try {
      const response = await signup({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        referralCode,
      });
      if (response.status >= 400) {
        setError(response?.data?.message || "Could not signup");
      } else {
        navigate("/login"); // Redirect after successful signup
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
<FormContainer>
      <Title>Sign Up</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <Input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          placeholder="Referral Code (Optional)"
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
          {loading ? "Loading..." : "Sign Up"}
        </Button>
      </form>
        <p>
          Already have an account?{" "}
          <ClickHereSpan onClick={() => navigate("/login")}>Login</ClickHereSpan>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Signup;

