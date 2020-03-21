import styled from 'styled-components';

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 80px;
  overflow-y: auto;
  padding: 5px;
  
  > .tag {
    background: #128fdc;
    color: white;
    padding: 5px;
    font-size: 12px;
    padding: 0 10px;
    line-height: 21px;
    border-radius: 5px;
    margin: 0 5px 5px 0;
    height: 20px;
  }
`;

export default TagsWrapper;