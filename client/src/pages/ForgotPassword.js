import React, { useState } from 'react';
import styled from 'styled-components';

import api from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.formBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

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
  font-family: ${({ theme }) => theme.fonts.body};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
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

const Message = styled.p`
  color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
  margin-top: 1rem;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/forgot-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <>
      {/* <Header /> */}
      <Container>
        <FormContainer>
          <Title>Forgot Password</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Button type="submit">Send Reset Link</Button>
          </form>
          {message && <Message type="success">{message}</Message>}
          {error && <Message type="error">{error}</Message>}
        </FormContainer>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default ForgotPassword;
