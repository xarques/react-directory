import React from 'react';

import styled from 'styled-components';

import Floor from '../../components/Floor';
import floors from '../../data/floors.json';

const Directory = () => {
  return (
    <Wrapper>
      <h2>Répertoire</h2>
      {floors.map(({ name, members }) => (
        <>
          <Floor name={name} members={members} />
          <br />
        </>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10px;
`;
export default Directory;
