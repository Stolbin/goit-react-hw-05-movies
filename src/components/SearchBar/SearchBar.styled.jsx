import styled from "@emotion/styled";
import { HiSearch } from "react-icons/hi";

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  right: 6px;
  transform: scale(1);
  transition: transform 450ms cubic-bezier(0, 0.11, 0.35, 2);
  &:hover {
    transform: scale(1.1);
    transition: transform 450ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  max-width: 600px;
  background-color: #fff;
  border: none;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 3px 3px 5px #696969;
`;

export const FormButton = styled.button`
  display: inline-block;
  height: 20px;
  padding: 0px 5px;
  opacity: 0.4;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 4px 10px 4px 10px;
  border-radius: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
