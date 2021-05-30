import styled from "styled-components";

const NavBar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.alternative};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  img {
    width: 2rem;
  }

  p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 1rem;
  }
`;

export default NavBar;
