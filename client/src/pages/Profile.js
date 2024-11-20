import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: "Arial, sans-serif";
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const UploadInput = styled.input`
  display: none;
`;

const NameText = styled.h2`
  margin: 1rem 0 0.5rem;
  font-size: 1.8rem;
  color: #333;
  text-transform: capitalize;
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${({ primary }) => (primary ? "#000" : "#e0e0e0")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#333" : "#d6d6d6")};
  }
`;

const ContactDetails = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    font-size: 0.9rem;
    color: #666;
  }

  strong {
    font-size: 1rem;
    color: #333;
  }
`;

const Profile = ({ firstName = "Harmaig", lastName = "Jeweller" }) => {
    const [image, setImage] = useState(null);
  const [name, setName] = useState(`${firstName} ${lastName}`);
  const navigate= useNavigate();


  const handleContactButton = () => {
    navigate("/contact-us"); // Navigate to the contact us page
  };
  const handleFaqButton = () => {
    navigate("/faqs"); // Navigate to the contact us page
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const getInitials = () => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <ProfileContainer>
      {/* Avatar Section */}
      <AvatarWrapper>
        {image ? (
          <img src={image} alt="Profile" style={{ width: "100%", height: "100%" }} />
        ) : (
          getInitials()
        )}
        <UploadInput
          type="file"
          accept="image/*"
          id="upload"
          onChange={handleImageUpload}
        />
      </AvatarWrapper>

      {/* Name and SubText */}
        <label htmlFor="upload" style={{ cursor: "pointer", color: "#000" }}>
          edit
        </label>
      <NameText>{name}</NameText>
      <SubText>Active membership since 2021</SubText>

      {/* Buttons */}
      <ButtonGroup>
        <ActionButton primary onClick={handleContactButton}>Contact Support</ActionButton>
        <ActionButton primary onClick={handleFaqButton}>FAQ</ActionButton>
      </ButtonGroup>
      {/* <ActionButton primary>Report an Issue</ActionButton> */}

      {/* Contact Details */}
      <ContactDetails>
        <ContactRow>
          <span>Email</span>
          <strong>hello@harmaig.com</strong>
        </ContactRow>
        <ContactRow>
          <span>Phone (Our Country)</span>
          <strong>+91 7021920836</strong>
        </ContactRow>
        <ContactRow>
          <span>Address</span>
          <strong>IIT Bombay, Powai, Mumbai 400076, Maharashtra</strong>
        </ContactRow>
      </ContactDetails>
    </ProfileContainer>
  );
};

export default Profile;
