import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
