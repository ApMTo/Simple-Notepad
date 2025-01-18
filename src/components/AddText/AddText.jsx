import { useDispatch, useSelector } from "react-redux";
import styles from "./addText.module.css";
import { useNavigate } from "react-router-dom";
import { addText, selectCategories } from "../../store/slices/Categories/slice";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { addTextLocal } from "../../utils/storageManager";

const AddText = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentCategory } = useSelector(selectCategories);
  const goBack = () => {
    navigate("/category");
  };
  const handlerAddText = (e) => {
    e.preventDefault();
    const [text] = e.target;
    const obj = {
      id: new Date().getTime().toString(),
      date: getFormattedDate(),
      text: text.value,
    };
      dispatch(addText(obj));
      addTextLocal(currentCategory.id, obj)
    goBack();
  };
  return (
    <div className={styles.main}>
      <form className={`${styles.form}`} onSubmit={handlerAddText}>
        <i className="fa-solid fa-xmark" onClick={goBack}></i>
        <textarea type="text" />

        <button>Add</button>
      </form>
    </div>
  );
};

export default AddText;
