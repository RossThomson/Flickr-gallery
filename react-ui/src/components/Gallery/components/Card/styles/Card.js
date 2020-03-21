import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 250px;
  height: 400px;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px;
  background: #f3f3f4;

  > a {
    text-decoration: inherit;
    color: inherit;
  }

  .image-thumbnail {
    border-radius: 2px;
    background-image: url(${({ url }) => url});
    width: 100%;
    height: 250px;
    min-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

 .image-info {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > p {
      margin-bottom: 10px;
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > .image-author {
      font-weight: 500;
      font-transform: capitalize;
    }

    > .image-date {
      font-weight: 300;
      font-size: 12px;
    }
  }
`;

export default CardWrapper;