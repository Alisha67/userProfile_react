import {styled ,css} from "styled-components"
export const Btn = styled.button`
color:white;
border:1px solid gray;
padding:0.3rem 0.8rem;
margin:0.5rem 0rem !important;
border-radius:5px;
background-color: black;

${props=>props. $postBtn && css`
  background-color:  #013f55;
  color:white;
  border:1px solid #013f55 !important;
  border:0;
  font-weight:600;
`}
${props=>props.$editBtn && css`
background-color:#013f55 ;
color:white;
border:1px solid white;
  font-weight:600;
`}
`