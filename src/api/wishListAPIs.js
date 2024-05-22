import { notify } from "../utils/notification";
import { jsonAxios } from "./api.base.url";
export const getWishListUser = async () => {
  try {
    const response = await jsonAxios.get(
      "/api/v1/wish-list/get-by-current-user"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addWishListAPI = async (idCourse) => {
  try {
    const response = await jsonAxios.post("/api/v1/wish-list", {
      id: idCourse,
    });
    notify("success", "Đã thêm vào danh sách yêu thích");
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const removeWishListAPI = async (idCourse) => {
  try {
    const response = await jsonAxios.delete(`/api/v1/wish-list/${idCourse}`);
    notify("success", "Đã xóa khỏi danh sách yêu thích");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    notify("error", "Đã có lỗi xảy ra");
  }
};
