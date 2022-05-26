import styled from "styled-components";
const Page1Container = styled.div`
  min-height: 100vh;
  background-color: #63c3eb;
  color: white;
  padding: 10px;
`;
const Page1 = () => {
  return (
    <Page1Container>
      <h1>Page1</h1>
    </Page1Container>
  );
};
export default Page1;
