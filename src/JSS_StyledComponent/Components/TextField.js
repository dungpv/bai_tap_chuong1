import React from "react";

import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Label = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const TextField = ({ label, ...props }) => {
  return (
    <span>
      <Label>{label}</Label>
      <br></br>
      <Input {...props} />
    </span>
  );
};
