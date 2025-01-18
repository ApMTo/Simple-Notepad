import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  setCurrentCategory,
} from "../../store/slices/Categories/slice";
import styles from "./mainPage.module.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const { categoriesData } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openCategory = (category) => {
    dispatch(setCurrentCategory(category));
    navigate("/category");
  };

  return (
    <>
      <div className={styles.main}>
        {categoriesData[0] && categoriesData[0].length > 0 ? (
          categoriesData[0].map((item, index) => (
            <div
              key={index}
              className={styles.container}
              onClick={() => openCategory(item)}
            >
              <h2>{item.name}</h2>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </>
  );
};

export default MainPage;
