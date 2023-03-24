import styled from "@emotion/styled";

export const CastList = styled.ul`
  padding: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  width: 100px;
`;

export const CardImegeBox = styled.div`
  position: relative;
  border-radius: 5px;
  background: #fff;
  width: 100px;
  height: 150px;
`;

export const CastImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const CastName = styled.p`
  padding-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #8b0000;
  margin: 0;
  text-align: center;
`;
export const CharactertName = styled.p`
  padding-top: 5px;
  font-size: 14px;
  margin: 0;
  color: black;
  text-align: center;
`;

export const Message = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  color: black;
`;
