import { Button, Input } from "antd";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import { Select } from "antd";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid } from "@mui/material";

export default function PostManagement() {
  return (
    <div className="px-6 py-3 flex flex-col  w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-3">
            <Select
              defaultValue="Sắp xếp"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "jack",
                  label: "Thứ tự tăng dần",
                },
                {
                  value: "lucy",
                  label: "Thứ tự giảm dần",
                },
              ]}
            />
            <Input
              className="w-[300px]"
              placeholder="Tìm kiếm người dùng theo tên"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <CachedIcon />
          </div>
          <Button type="primary" className="bg-blue-600">
            Thêm bài viết
          </Button>
        </div>
        <div className="table-container relative">
          <div className="mb-8">
            {/* {isLoadingThunk || currentUsers.length === 0 ? (
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <Table
            columns={columns}
            dataSource={currentUsers}
            pagination={false}
          />
        )} */}
          </div>
          <div className="flex justify-center">
            {/* <Pagination
          count={Math.ceil(allUsers.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
