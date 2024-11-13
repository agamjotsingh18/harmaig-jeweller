import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
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

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.header};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
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

const Login = () => {
  return (
    <LoginContainer>
      <Title>Login</Title>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </LoginContainer>
  );
};

export default Login;
