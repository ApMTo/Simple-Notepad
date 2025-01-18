import { useNavigate } from "react-router-dom";
import styles from "./create.module.css";
import { useState } from "react";
import { createCategory } from "../../utils/storageManager";
import { useDispatch } from "react-redux";
import { addCategories } from "../../store/slices/Categories/slice";
const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const goBack = () => {
    navigate("/");
  };
  const handlerCreateCategory = (e) => {
    e.preventDefault();
    const [text] = e.target;
    if (text.value.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const category = createCategory(text.value);
    dispatch(addCategories(category));
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <div className={styles.create_category}>
        <form
          className={`${styles.form} ${error ? styles.error : ""}`}
          onSubmit={handlerCreateCategory}
        >
          <i className="fa-solid fa-xmark" onClick={goBack}></i>
          <input type="text" />

          <button>Create</button>
        </form>
      </div>
    </>
  );
};

export default Create;
