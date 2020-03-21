import styled from 'styled-components';

const GalleryWrapper = styled.div`
  padding: 40px;
  box-sizing: border-box;

  > .card-grid {
    display: grid;
    justify-content: flex-start;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(auto-fill, 250px);

    @media screen and (max-width: 590px) {
       justify-content: center;
    } 
  }
`;

export default GalleryWrapper;