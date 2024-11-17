// // // ResetPassword.jsx
// // import React, { useState } from 'react';
// // import api from '../utils/api'
// // import { useParams } from 'react-router-dom';
// // import Header from './Header';
// // import Footer from './Footer';

// // const ResetPassword = () => {
// //   const [newPassword, setNewPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [error, setError] = useState('');
// //   const { token } = useParams();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if(newPassword.trim().length<6 || confirmPassword.trim().length<6){
// //         setError('Password should be 6 or more characters long.');
// //       setMessage('');
// //       return;
// //     }
// //     if (newPassword !== confirmPassword) {
// //       setError('Passwords do not match');
// //       setMessage('');
// //       return;
// //     }


// //     try {
// //       const response = await api.post(`auth/reset-password/${token}`, {
// //         newPassword,
// //       });
// //       setMessage(response.data.message);
// //       setError('');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'An error occurred');
// //       setMessage('');
// //     }
// //   };

// //   return (
// //     <>
// //     <Header/>
// //     <div className='login-signup-container'>
// //     <div className='login-signup-form'>
// //       <h2>Reset Password</h2>
// //       <form onSubmit={handleSubmit} className='reset-password-form'>
// //         <label>
// //           New Password:
// //           <input
// //             type="password"
// //             value={newPassword}
// //             onChange={(e) => setNewPassword(e.target.value)}
// //             required
// //           />
// //         </label>
// //         <label>
// //           Confirm Password:
// //           <input
// //             type="password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             required
// //           />
// //         </label>
// //         <button type="submit">Reset Password</button>
// //       </form>
// //       {message && <p style={{ color: 'green' }}>{message}</p>}
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //     </div>
// //     </div>
// //     <Footer/>
// //     </>
// //   );
// // };

// // export default ResetPassword;
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import api from '../utils/api';


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 2rem;
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// const FormContainer = styled.div`
//   max-width: 400px;
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.formBackground};
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-family: ${({ theme }) => theme.fonts.header};
//   margin-bottom: 1.5rem;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-family: ${({ theme }) => theme.fonts.body};
//   outline: none;
//   &:focus {
//     border-color: ${({ theme }) => theme.colors.primary};
//   }
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

// const Message = styled.p`
//   color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
//   margin-top: 1rem;
// `;

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const { token } = useParams();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newPassword.trim().length < 6 || confirmPassword.trim().length < 6) {
//       setError('Password should be 6 or more characters long.');
//       setMessage('');
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       setMessage('');
//       return;
//     }

//     try {
//       const response = await api.post(`auth/reset-password/${token}`, {
//         newPassword,
//       });
//       setMessage(response.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'An error occurred');
//       setMessage('');
//     }
//   };

//   return (
//     <>
//       {/* <Header /> */}
//       <Container>
//         <FormContainer>
//           <Title>Reset Password</Title>
//           <form onSubmit={handleSubmit}>
//             <Input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               placeholder="New Password"
//               required
//             />
//             <Input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm Password"
//               required
//             />
//             <Button type="submit">Reset Password</Button>
//           </form>
//           {message && <Message type="success">{message}</Message>}
//           {error && <Message type="error">{error}</Message>}
//         </FormContainer>
//       </Container>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default ResetPassword;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
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
text-align:center;
  font-family: ${({ theme }) => theme.fonts.header};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ToggleButton = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
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

const PasswordToggle = ({ type, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      <Input
        type={showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <ToggleButton onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
      </ToggleButton>
    </InputWrapper>
  );
};

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword.trim().length < 6 || confirmPassword.trim().length < 6) {
      setError('Password should be 6 or more characters long.');
      setMessage('');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setMessage('');
      return;
    }

    try {
      const response = await api.post(`auth/reset-password/${token}`, {
        newPassword,
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Reset Password</Title>
        <form onSubmit={handleSubmit}>
          <PasswordToggle
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <PasswordToggle
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <Button type="submit">Reset Password</Button>
        </form>
        {message && <Message type="success">{message}</Message>}
        {error && <Message type="error">{error}</Message>}
      </FormContainer>
    </Container>
  );
};

export default ResetPassword;
