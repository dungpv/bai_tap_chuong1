import React, { Component } from "react";
import { Button } from "../JSS_StyledComponent/Components/Button";
import { Heading3 } from "../JSS_StyledComponent/Components/Heading";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../JSS_StyledComponent/Components/Table";
import { connect } from "react-redux";
import {
  deleteNguoiDungAction,
  editNguoiDungAction,
} from "../Redux/Actions/BaiTapQuanLyNguoiDungAction";
import Swal from "sweetalert2";
class TableDanhSachNguoiDung extends Component {
  renderNguoiDung = () => {
    return this.props.nguoiDungList.map((nguoiDung, index) => {
      return (
        <Tr key={index}>
          <Td>{index + 1}</Td>
          <Td>{nguoiDung.taiKhoan}</Td>
          <Td>{nguoiDung.hoTen}</Td>
          <Td>{nguoiDung.matKhau}</Td>
          <Td>{nguoiDung.Email}</Td>
          <Td>{nguoiDung.soDienThoai}</Td>
          <Td>{nguoiDung.loaiNguoiDung}</Td>
          <Td>
            <Button
              className="ml-1"
              primary
              onClick={() => {
                let disableCapNhat = false;
                let disableDangKy = false;
                this.props.dispatch(
                  editNguoiDungAction(nguoiDung),
                  disableCapNhat,
                  disableDangKy
                );
              }}
            >
              Chỉnh sửa
            </Button>
            <Button
              className="ml-1"
              danger
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.props.dispatch(deleteNguoiDungAction(nguoiDung.id));
                    Swal.fire(
                      "Deleted!",
                      "Your record has been deleted.",
                      "success"
                    );
                  }
                });
              }}
            >
              Xóa
            </Button>
          </Td>
        </Tr>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          width: "90%",
        }}
        className="bg-white pt-3 pl-5 pr-5 pb-3 ml-5 mr-5"
      >
        <Heading3 className="text-left mt-5 mb-3">
          Danh sách người dùng
        </Heading3>
        <Table>
          <Thead className="text-dark">
            <Tr>
              <Th className="nowrap">STT</Th>
              <Th>Tài khoản</Th>
              <Th>Họ tên</Th>
              <Th>Mật khẩu</Th>
              <Th>Email</Th>
              <Th>Số điện thoại</Th>
              <Th>Loại người dùng</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>{this.renderNguoiDung()}</Tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungList: state.BaiTapQuanLyNguoiDungReducer.nguoiDungList,
  };
};

export default connect(mapStateToProps)(TableDanhSachNguoiDung);
