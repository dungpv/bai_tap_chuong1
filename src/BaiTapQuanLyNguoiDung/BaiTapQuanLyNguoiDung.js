import React, { Component } from "react";

import { ContainerFluid } from "../JSS_StyledComponent/Components/Container";
import FormDangKy from "./FormDangKy";
import TableDanhSachNguoiDung from "./TableDanhSachNguoiDung";

export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <ContainerFluid>
        <FormDangKy></FormDangKy>
        <TableDanhSachNguoiDung></TableDanhSachNguoiDung>
      </ContainerFluid>
    );
  }
}
