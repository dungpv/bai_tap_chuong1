import styled from "styled-components";

const primary = `  
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
                `;
const success = `  
                color: #fff;
                background-color: #28a745;
                border-color: #28a745;
                `;
const danger = `    
                color: #fff;
                background-color: #dc3545;
                border-color: #dc3545;
                `;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${(props) => (props.primary ? primary : props.success ? success : danger)}
`;
