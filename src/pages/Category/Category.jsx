import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  selectCategories,
} from "../../store/slices/Categories/slice";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./category.module.css";
import { deletePostLocal } from "../../utils/storageManager";

const Category = () => {
  const { currentCategory } = useSelector(selectCategories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentCategory?.name) {
      navigate("/");
    }
  }, [currentCategory, navigate]);

  const handlerDeletePost = (id) => {
    dispatch(deletePost(id));
    deletePostLocal(currentCategory.id, id);
  };

  return (
    <>
      <Outlet />
      <div className={styles.goBack}>
        <Link to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <div className={styles.header}>
            <h2>{currentCategory?.name}</h2>
            <Link to="add">
              <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
          <div className={styles.description}>
            <i className="fa-solid fa-exclamation"></i>
            <span>{currentCategory?.advice}</span>
          </div>
          <div className={styles.posts}>
            {currentCategory?.posts?.length > 0
              ? currentCategory.posts.map((el, index) => (
                  <div key={index} className={styles.container}>
                    <div className={styles.date}>
                      <span>
                        Date: {el.date}{" "}
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => handlerDeletePost(el.id)}
                        ></i>
                      </span>
                    </div>
                    <div className={styles.text}>
                      <span>Text: {el.text}</span>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
