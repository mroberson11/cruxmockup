import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(69, 162, 158, 1) 0%,
    rgba(102, 252, 241, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled.a`
  margin-top: 2em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 3em;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    text-align: center;
    margin-left: 0;
    margin-top: 2em;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 60px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const CheckListWrapper = styled.div`
  color: white;
  display: grid;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
export const FormComments = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  min-height: 30px;
`;

export const FormButton = styled.button`
  background: #66fcf1;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: white;
  font-size: 14px;
  text-decoration: underline;
`;
