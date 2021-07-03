import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #528e96;
  color: white;
  height: 60px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderComponent = () => {
    return (
        <Header>
            <h2>일정 관리</h2>
        </Header>
    );
}

export default HeaderComponent;
