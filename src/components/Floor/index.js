import React from 'react';

import styled from 'styled-components';

import Member from '../Member';

const Floor = ({ name, members = [] }) => {
  return (
    <Wrapper>
      <StyledName>{name} </StyledName>
      {members.map(({ role, name, pictureUrl }) => (
        <Member role={role} name={name} pictureUrl={pictureUrl} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.p`
  margin: 0;
  padding: 0 10px;
`;

export default Floor;
