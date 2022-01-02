import {
  add_nguoidung,
  delete_nguoidung,
  edit_nguoidung,
  update_nguoidung,
} from "../Types/BaiTapQuanLyNguoiDungType";

const initialState = {
  nguoiDungList: [
    {
      id: "nguoidung-1",
      taiKhoan: "nguyenvana",
      hoTen: "Nguyễn Văn A",
      matKhau: "123",
      Email: "nguyenvana@gmail.com",
      soDienThoai: "123456789",
      loaiNguoiDung: "KhachHang",
    },
    {
      id: "nguoidung-2",
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyễn Văn B",
      matKhau: "123",
      Email: "nguyenvanb@gmail.com",
      soDienThoai: "123456789",
      loaiNguoiDung: "KhachHang",
    },
    {
      id: "nguoidung-3",
      taiKhoan: "nguyenvanc",
      hoTen: "Nguyễn Văn C",
      matKhau: "123",
      Email: "nguyenvanc@gmail.com",
      soDienThoai: "123456789",
      loaiNguoiDung: "KhachHang",
    },
    {
      id: "nguoidung-4",
      taiKhoan: "nguyenvand",
      hoTen: "Nguyễn Văn D",
      matKhau: "123",
      Email: "nguyenvand@gmail.com",
      soDienThoai: "123456789",
      loaiNguoiDung: "QuanTri",
    },
    {
      id: "nguoidung-5",
      taiKhoan: "nguyenvane",
      hoTen: "Nguyễn Văn E",
      matKhau: "123",
      Email: "nguyenvane@gmail.com",
      soDienThoai: "123456789",
      loaiNguoiDung: "QuanTri",
    },
  ],
  nguoiDungEdit: {
    id: "nguoidung-abc",
    taiKhoan: "nguyenvanabc",
    hoTen: "Nguyễn Văn ABC",
    matKhau: "123ABC",
    Email: "nguyenvanabc@gmail.com",
    soDienThoai: "123456789",
    loaiNguoiDung: "KhachHang",
  },
  disableCapNhat: true,
  disableDangKy: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_nguoidung: {
      let nguoiDungListUpdate = [...state.nguoiDungList];
      let index = nguoiDungListUpdate.findIndex(
        (nguoiDung) => nguoiDung.taiKhoan === action.newNguoiDung.taiKhoan
      );

      if (index !== -1) {
        alert("Tài khoản đã tồn tại.");
        return { ...state };
      }
      nguoiDungListUpdate.push(action.newNguoiDung);

      state.nguoiDungList = nguoiDungListUpdate;
      return { ...state };
    }

    case delete_nguoidung: {
      return {
        ...state,
        nguoiDungList: state.nguoiDungList.filter(
          (nguoiDung) => nguoiDung.id !== action.nguoiDungId
        ),
      };
    }

    case edit_nguoidung: {
      return {
        ...state,
        nguoiDungEdit: action.editNguoiDung,
        disableCapNhat: action.disableCapNhat,
        disableDangKy: action.disableDangKy,
      };
    }
    case update_nguoidung: {
      state.nguoiDungEdit = {
        ...state.nguoiDungEdit,
        taiKhoan: action.taiKhoan,
        hoTen: action.hoTen,
        matKhau: action.matKhau,
        Email: action.Email,
        soDienThoai: action.soDienThoai,
        loaiNguoiDung: action.loaiNguoiDung,
      };

      let nguoiDungListUpdate = [...state.nguoiDungList];

      let index = nguoiDungListUpdate.findIndex(
        (nguoiDung) => nguoiDung.id === state.nguoiDungEdit.id
      );

      if (index !== -1) {
        nguoiDungListUpdate[index] = state.nguoiDungEdit;
      }

      state.nguoiDungList = nguoiDungListUpdate;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
