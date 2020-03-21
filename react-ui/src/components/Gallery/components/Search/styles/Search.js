import styled from 'styled-components';

const SearchWrapper = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-bottom: 50px;

> input {
  box-sizing: border-box;
  height: 40px;
  padding: 0 8px 0 35px;
  border: none;
  font-size: 14px;
  background-color: #f3f3f4;
  border-radius: 4px;
}
`;

export default SearchWrapper;