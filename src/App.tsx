import AddProductForm from "components/pages/AddProductForm";
import EditProductForm from "components/pages/EditProductForm";
import Products from "components/pages/Products";
import { ROUTES } from "enums/routes";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.ADD_PRODUCT} element={<AddProductForm />} />
        <Route path={ROUTES.EDIT_PRODUCT} element={<EditProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
