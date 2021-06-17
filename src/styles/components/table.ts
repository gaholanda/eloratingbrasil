import styled from "styled-components";

const Table = styled.div`
  display: block;
  width: 100%;

  header {
    padding: 1rem;
  }

  .team {
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .team-position-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  .team-position {
    font-weight: bold;
    margin-right: 1rem;
  }

  .team-name {
    font-size: 1.3rem;
    flex: 2;
  }

  .team-rating {
    font-size: 1.3rem;
  }

  .team-info {
    font-size: 0.9rem;
    margin-top: 0.8rem;
    span {
      margin-right: 1rem;
    }
  }
`;

export default Table;
