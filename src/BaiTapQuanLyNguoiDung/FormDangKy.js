import React, { Component } from "react";
import { Button } from "../JSS_StyledComponent/Components/Button";
import { TextField } from "../JSS_StyledComponent/Components/TextField";
import { Dropdown } from "../JSS_StyledComponent/Components/Dropdown";
import { Heading3 } from "../JSS_StyledComponent/Components/Heading";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import {
  addNguoiDungAction,
  updateNguoiDungAction,
} from "../Redux/Actions/BaiTapQuanLyNguoiDungAction";
class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      Email: "",
      soDienThoai: "",
      loaiNguoiDung: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      Email: "",
      soDienThoai: "",
      loaiNguoiDung: "",
    },
    disableCapNhat: true,
    disableDangKy: true,
    isValidInput: true,
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;

    let newValue = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };
    let valid = true;
    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
      valid = false;
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        newErrors[name] = name + " is invalid!";
        valid = false;
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "matKhau") {
      if (value.length < 6) {
        newErrors[name] = name + " is invalid!";
        valid = false;
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "soDienThoai") {
      const regexDienThoai = new RegExp(/^[0-9\b]+$/);
      if (!regexDienThoai.test(value) || value.length != 10) {
        newErrors[name] = name + " is invalid!";
        valid = false;
      } else {
        newErrors[name] = "";
      }
    }

    this.setState({
      values: newValue,
      errors: newErrors,
      isValidInput: valid,
    });
    let isValid = this.state.isValidInput;
    console.log(isValid);
  };

  validate() {
    let { values, errors } = this.state;
    let valid = true;
    let profileContent = "";
    let errorContent = "";
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        errorContent += `
        <p class="text-left">
        <b class="text-danger">${key} is invalid!</b>
        </p>`;
      }
      profileContent += `
      <p class="text-left">
      <b>${key}:</b>
      ${values[key]}
      </p>`;
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorContent += `
        <p class="text-left">
        <b class="text-danger">${key} is invalid!</b>
        </p>`;
        valid = false;
      }
    }
    return { valid, profileContent, errorContent };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let { valid, profileContent, errorContent } = this.validate();

    if (!valid) {
      Swal.fire({
        title: "Your Profile",
        html: errorContent,
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }

    Swal.fire({
      title: "Your Profile",
      html: profileContent,
      icon: "success",
      confirmButtonText: "OK",
    });

    this.setState({
      values: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        Email: "",
        soDienThoai: "",
        loaiNguoiDung: "",
      },
    });
  };

  render() {
    return (
      <form
        id="formDangKy"
        onSubmit={this.handleSubmit}
        style={{
          width: "90%",
        }}
        className="bg-white pt-5 pl-5 pr-5 ml-5 mr-5"
      >
        <Heading3 className="text-left mt-0 mb-3">Form đăng ký</Heading3>
        <div className="form-row">
          <div className="form-group col-md-6">
            <TextField
              label="Tài khoản"
              type="text"
              name="taiKhoan"
              className="form-control"
              value={this.state.values.taiKhoan}
              onChange={this.handleChangeValue}
            ></TextField>
            <span className="text text-danger">
              {this.state.errors.taiKhoan}
            </span>
          </div>
          <div className="form-group col-md-6">
            <TextField
              label="Họ tên"
              type="text"
              name="hoTen"
              className="form-control"
              value={this.state.values.hoTen}
              onChange={this.handleChangeValue}
            ></TextField>
            <span className="text text-danger">{this.state.errors.hoTen}</span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <TextField
              label="Mật khẩu"
              type="password"
              name="matKhau"
              className="form-control"
              value={this.state.values.matKhau}
              onChange={this.handleChangeValue}
            ></TextField>
            <span className="text text-danger">
              {this.state.errors.matKhau}
            </span>
          </div>
          <div className="form-group col-md-6">
            <TextField
              label="Số điện thoại"
              type="text"
              name="soDienThoai"
              className="form-control"
              value={this.state.values.soDienThoai}
              onChange={this.handleChangeValue}
            ></TextField>
            <span className="text text-danger">
              {this.state.errors.soDienThoai}
            </span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <TextField
              label="Email"
              type="email"
              name="Email"
              className="form-control"
              value={this.state.values.Email}
              onChange={this.handleChangeValue}
            ></TextField>
            <span className="text text-danger">{this.state.errors.Email}</span>
          </div>
          <div className="form-group col-md-6">
            <label>Mã loại khách hàng</label>
            <Dropdown
              id="loaiNguoiDung"
              name="loaiNguoiDung"
              value={this.state.values.loaiNguoiDung}
              onChange={this.handleChangeValue}
            >
              <option value="">Chọn loại khách hàng</option>
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </Dropdown>
            <span className="text text-danger">
              {this.state.errors.loaiNguoiDung}
            </span>
          </div>
        </div>

        {!this.state.disableDangKy ? (
          <Button className=" ml-1" disabled success>
            Đăng ký
          </Button>
        ) : (
          <Button
            className=" ml-1"
            success
            onClick={() => {
              let { valid } = this.validate();

              let {
                taiKhoan,
                hoTen,
                matKhau,
                Email,
                soDienThoai,
                loaiNguoiDung,
              } = this.state.values;

              if (valid) {
                let newNguoiDung = {
                  id: Date.now(),
                  taiKhoan: taiKhoan,
                  hoTen: hoTen,
                  matKhau: matKhau,
                  Email: Email,
                  soDienThoai: soDienThoai,
                  loaiNguoiDung: loaiNguoiDung,
                };

                this.props.dispatch(addNguoiDungAction(newNguoiDung));
              }
            }}
          >
            Đăng ký
          </Button>
        )}
        {this.state.disableCapNhat ? (
          <Button disabled primary className="ml-1">
            Cập nhật
          </Button>
        ) : (
          <Button
            className="ml-1"
            primary
            onClick={() => {
              let { valid } = this.validate();
              let {
                taiKhoan,
                hoTen,
                matKhau,
                Email,
                soDienThoai,
                loaiNguoiDung,
              } = this.state.values;
              if (valid) {
                this.props.dispatch(
                  updateNguoiDungAction(
                    taiKhoan,
                    hoTen,
                    matKhau,
                    Email,
                    soDienThoai,
                    loaiNguoiDung
                  )
                );
              }
            }}
          >
            Cập nhật
          </Button>
        )}
      </form>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nguoiDungEdit.id !== this.props.nguoiDungEdit.id) {
      this.setState({
        values: this.props.nguoiDungEdit,
        disableCapNhat: this.props.disableCapNhat,
        disableDangKy: this.props.disableDangKy,
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungEdit: state.BaiTapQuanLyNguoiDungReducer.nguoiDungEdit,
    disableCapNhat: state.BaiTapQuanLyNguoiDungReducer.disableCapNhat,
    disableDangKy: state.BaiTapQuanLyNguoiDungReducer.disableDangKy,
  };
};

export default connect(mapStateToProps)(FormDangKy);
