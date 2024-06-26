import React, { useState, useEffect, memo, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Button, Input, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { toolbarOptions, formats } from "../../utils/toolbarOptions";
import { getTeachersApi } from "../../api/teacher";
import StopPropagationWrapper from "../StopPropagationWrapper/StopPropagationWrapper";
const { Option } = Select;
function FormEditCourse({ closeFormEdit, handleEdit, courseInfo }) {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState();
  const [subDescription, setSubDescription] = useState("");
  const [teachers, setTeachers] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(undefined);
  const [courseStatus, setCourseStatus] = useState(
    courseInfo?.voided ? "inactive" : "active"
  );

  const formRef = useRef(null);
  const handleGetTeachers = async () => {
    const response = await getTeachersApi();
    setTeachers(response);
  };
  useEffect(() => {
    handleGetTeachers();
  }, []);
  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      closeFormEdit(); // Đóng form nếu click bên ngoài form
    }
  };
  // Gán giá trị cho các state từ props courseInfo khi component được render
  useEffect(() => {
    if (courseInfo) {
      setTitle(courseInfo.title);
      setDescription(courseInfo.description);
      setImageUrl(courseInfo.image);
      setSubDescription(courseInfo.subDescription);
      setSelectedTeacher(courseInfo.teacherDto.id);
    }
  }, [courseInfo]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      setImageFile(file);
      reader.readAsDataURL(file);
    }
  };

  const handleEditCourse = () => {
    // Gọi hàm handleEdit và truyền thông tin cập nhật của khóa học
    handleEdit({
      id: courseInfo.id,
      title,
      description,
      imageFile: imageFile ? imageFile : null,
      subDescription,
      teacherId: selectedTeacher,
      voided: courseStatus === "active" ? false : true,
    });
    resetField();
  };

  const resetField = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <>
      <div className="overlay" onClick={handleClickOutside}>
        <form
          ref={formRef}
          className="fade-down bg-white w-[50%] px-[24px] py-[20px] rounded"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-[20px] font-semibold">Sửa khóa học</h3>
            <CloseIcon
              onClick={closeFormEdit}
              className="cursor-pointer hover:text-gray-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-3">
            <div>
              <label htmlFor="">Tên khóa học</label>
              <Input
                className="mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Mô tả tổng quát:</label>
              <Input
                className="mt-2"
                value={subDescription}
                onChange={(e) => setSubDescription(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="courseImage">
                Chọn ảnh: <UploadFileIcon />
              </label>
              <input
                type="file"
                id="courseImage"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              {imageUrl && (
                <img
                  src={imageUrl}
                  style={{
                    width: "200px",
                    height: "100px",
                    marginTop: "10px",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <StopPropagationWrapper>
              {" "}
              <label>Chọn giảng viên:</label>
              <Select
                className="mt-2 w-full"
                placeholder="Chọn giảng viên"
                value={selectedTeacher}
                onChange={(value) => setSelectedTeacher(value)}
              >
                {teachers?.map((teacher) => (
                  <Option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </Option>
                ))}
              </Select>
            </StopPropagationWrapper>
            <div>
              <label htmlFor="">Trạng thái: </label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="active"
                    checked={courseStatus === "active"}
                    onChange={() => setCourseStatus("active")}
                  />
                  <span className="text-green-600 font-bold">
                    Đang hoạt động
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="inactive"
                    checked={courseStatus === "inactive"}
                    onChange={() => setCourseStatus("inactive")}
                  />
                  <span className="text-red-600 font-bold">Bị khóa</span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <label htmlFor="">Mô tả</label>
            <ReactQuill
              className="mt-2"
              modules={toolbarOptions}
              theme="snow"
              value={description}
              onChange={setDescription}
              formats={formats}
            />
          </div>
          <Divider />
          <div className="flex justify-end gap-2">
            <Button onClick={closeFormEdit}>Hủy</Button>
            <Button
              type="primary"
              className="bg-blue-600"
              onClick={handleEditCourse}
            >
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default memo(FormEditCourse);
