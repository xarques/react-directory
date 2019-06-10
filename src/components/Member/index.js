import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

const Member = ({ pictureUrl, name, role }) => {
  return (
    <Wrapper>
      <Avatar pictureUrl={pictureUrl} name={name} size="large" />
      <StyledText>
        <StyledRole>{role}</StyledRole>
        <StyledName>{name}</StyledName>
      </StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5px;
  display: flex;
`;

const StyledRole = styled.p`
  margin: 0;
  padding: 1px 10px;
  border-radius: 10px;
  background-color: rgb(248, 226, 206);
  color: rgb(244, 173, 107);
  font-weight: bold;
`;

const StyledName = styled.p`
  margin: 0;
  padding: 0 10px;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;
export default Member;
