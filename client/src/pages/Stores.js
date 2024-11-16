import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

const StoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.background || "#F7F3E9"};
  color: ${({ theme }) => theme.colors.primary || "#5A3825"};
  font-family: ${({ theme }) => theme.fonts.body || "'Cormorant Garamond', serif"};
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || "#5A3825"};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const MapContainer = styled.div`
  width: 60%;
  position: relative;
  margin-top: 2rem;
`;

const BranchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const BranchCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary || "#5A3825"};
  color: ${({ theme }) => theme.colors.background || "#F7F3E9"};
  padding: 1rem;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  font-family: ${({ theme }) => theme.fonts.body || "'Cormorant Garamond', serif"};
  margin-top: 1rem;
`;

const stores = [
  {
    city: "Mumbai",
    branches: [
      { id: 1, name: "Branch 1", address: "Address 1, Mumbai" },
      { id: 2, name: "Branch 2", address: "Address 2, Mumbai" },
    ],
  },
  // Add more locations as needed
];

const MapImage = styled.div`
  background-image: url("https://i.postimg.cc/WbXNbS37/india-map-labelled-black.png");
  width: 100%;
  max-width: 600px; /* Set a max width to keep the map within reasonable bounds */
  height: auto; /* Adjust height automatically based on aspect ratio */
  padding-top: 75%; /* This maintains the aspect ratio of the image (4:3 here) */
  background-size: contain; /* Scale the image to fit within the container */
  background-repeat: no-repeat; /* Prevent the background from repeating */
  background-position: center; /* Center the background image */
  border-radius: 8px;
  margin: 0 auto;
`;


const Stores = () => {
  const [selectedCity, setSelectedCity] = useState(stores[0]);

  const options = stores.map(store => ({ value: store.city, label: store.city }));

  const handleSelectChange = selectedOption => {
    const city = stores.find(store => store.city === selectedOption.value);
    setSelectedCity(city);
  };

  return (
    <StoresContainer>
      <Title>Jewelry Shop Branches in India</Title>
      <StyledSelect
        options={options}
        defaultValue={options[0]}
        onChange={handleSelectChange}
        placeholder="Select City"
      />
      <MapContainer>
        <MapImage />
      </MapContainer>
      <BranchList>
        {selectedCity.branches.map(branch => (
          <BranchCard key={branch.id}>
            <div>{branch.name}</div>
            <div>{branch.address}</div>
          </BranchCard>
        ))}
      </BranchList>
    </StoresContainer>
  );
};

export default Stores;
