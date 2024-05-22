import React, { useEffect, useState } from "react";
import { getWishListUser, removeWishListAPI } from "../../../api/wishListAPIs";
import WishListElement from "../../../components/WishListElement/WishListElement";
import { Fragment } from "react";

export default function WishList() {
  const [wishLists, setWishLists] = useState(null);
  const [flag, setFlag] = useState(false);
  const getWishList = async () => {
    const response = await getWishListUser();
    setWishLists(response.content);
  };
  useEffect(() => {
    getWishList();
  }, [flag]);
  const handleRemoveWishList = async (id) => {
    await removeWishListAPI(id);
    setFlag(!flag);
  };
  return (
    <div className="mt-[100px]">
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Trang chủ</a>
                    </li>

                    <li
                      className="breadcrumb-item cursor-pointer"
                      aria-current="page"
                    >
                      Danh sách yêu thích
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="course-content">
        <div className="container">
          <div className="card wish-card">
            <div className="card-header">
              <h5>
                Danh sách yêu thích của bạn ({wishLists?.length} khóa học)
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  {wishLists?.map((item, index) => (
                    <Fragment key={index}>
                      <WishListElement
                        item={item}
                        onRemoveWishList={handleRemoveWishList}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
