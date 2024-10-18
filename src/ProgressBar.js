import React from 'react';
import styled from 'styled-components';


const ProgressBarContainer = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
  `
  
const Progress= styled.div `
    height: 30px;
    background-color: #76c7c0;
    text-align: center;
    line-height: 30px; /* Center the text vertically */
    color: white;
    transition: width 0.3s ease-in-out;
    max-width: 300px
  `

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Progress 
        style={{ width: `${progress}%` }}>
        {progress}%
      </Progress>
    </ProgressBarContainer>
  );
};

export default ProgressBar;