import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Layout from "../Layout/Layout";
import Create from "../pages/Create/Create";
import { useEffect } from "react";
import { getAllCategories } from "../utils/storageManager";
import { useDispatch } from "react-redux";
import { addCategories } from "../store/slices/Categories/slice";
import Category from "../pages/Category/Category";
import AddText from "../components/AddText/AddText";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getAllCategories();
    dispatch(addCategories(data));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/create" element={<Create />} />
        </Route>

        <Route path="/category" element={<Category />}>
          <Route path="add" element={<AddText />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
