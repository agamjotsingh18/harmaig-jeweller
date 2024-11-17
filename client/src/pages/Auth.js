import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation,Link } from "react-router-dom";
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
const FormContainer = styled.form`
width:100%;
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

const ToggleLink = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight:bold;
  cursor: pointer;
`;


const PasswordContainer = styled.div`
  display: flex;
  flex-direction:column;

  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

// Styled input field for the password
const PasswordInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

// Styled button for the show/hide password toggle
const PasswordToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  padding: 0 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus {
    outline: none;
  }
`;
const ClickHereSpan = styled.span`
  color:blue;
  cursor: pointer;
`;
const Auth = () => {
  const location = useLocation();
  const { type } = location.state || {}; // Get type from location state (either "login" or "signup")
  const navigate = useNavigate();
  const { login, signup } = useAuthStore();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [referralCode, setReferralCode] = useState("");
//   const [role, setRole] = useState("");
  const [isLogin, setIsLogin] = useState(type === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type === "signup") {
      setIsLogin(false);
      resetForm();
    } else {
      setIsLogin(true);
      resetForm();
    }
  }, [type]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    // setFullName("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setReferralCode("");
    // setRole("");
    setError("");
    setShowPassword(false);
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

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    if (
    //   !fullName ||
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
    // if (role !== "user" && role !== "influencer") {
    //   setError("Please select a valid role");
    //   return;
    // }
    setLoading(true);
    try {
      const response = await signup({
       firstName: firstName,
       lastName:lastName,
        email,
        password,
        phoneNumber,
        // referredByCode: referralCode,
        // role,
      });
      if (response.status >= 400) {
        setError(response?.data?.message || "Could not signup");
      } else {
        navigate("/auth", { state: { type: "login" } }); // Redirect after successful signup
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  return (
    <Container>
      <Title>{isLogin ? "Login" : "Sign Up"}</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLogin ? (
        <FormContainer onSubmit={handleLogin}>
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
            <PasswordToggleButton  type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}

            </PasswordToggleButton >
          </PasswordContainer>
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
          <p> <Link to='/forgot-password'>
             Forget Password? <ClickHereSpan>Click Here!</ClickHereSpan>
             </Link>
             </p>
          <p>
            Don't have an account?{" "}
            <ToggleLink onClick={toggleForm}>Sign Up</ToggleLink>
          </p>
        </FormContainer>
      ) : (
        <FormContainer onSubmit={handleSignup}>
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
            placeholder="LastName"
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
            {/* <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button> */}
              <PasswordToggleButton  type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}

            </PasswordToggleButton >
          </PasswordContainer>
          {/* <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="influencer">Influencer</option>
          </select> */}
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </Button>
          <p> <Link to='/forgot-password'>
             Forget Password? <ClickHereSpan>Click Here!</ClickHereSpan>
             </Link>
             </p>
          <p>
            Already have an account?{" "}
            <ToggleLink onClick={toggleForm}>Login</ToggleLink>
          </p>
        </FormContainer>
      )}
    </Container>
  );
};

export default Auth;
