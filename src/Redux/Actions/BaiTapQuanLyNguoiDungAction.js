import {
  add_nguoidung,
  delete_nguoidung,
  edit_nguoidung,
  update_nguoidung,
} from "../Types/BaiTapQuanLyNguoiDungType";

export const addNguoiDungAction = (newNguoiDung) => ({
  type: add_nguoidung,
  newNguoiDung,
});

export const deleteNguoiDungAction = (nguoiDungId) => ({
  type: delete_nguoidung,
  nguoiDungId,
});

export const editNguoiDungAction = (
  editNguoiDung,
  disableCapNhat,
  disableDangKy
) => ({
  type: edit_nguoidung,
  editNguoiDung,
  disableCapNhat,
  disableDangKy,
});

export const updateNguoiDungAction = (
  taiKhoan,
  hoTen,
  matKhau,
  Email,
  soDienThoai,
  loaiNguoiDung
) => ({
  type: update_nguoidung,
  taiKhoan,
  hoTen,
  matKhau,
  Email,
  soDienThoai,
  loaiNguoiDung,
});
