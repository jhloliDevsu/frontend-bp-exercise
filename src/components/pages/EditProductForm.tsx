import FormProductSkeleton from "components/templates/FormProductSkeleton";
import { ROUTES } from "enums/routes";
import { Product } from "models/Product";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "services";
import { formatDateFromString } from "utils/formatDateFromString";

const EditProductForm: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchData = async () => {
      const body = await getProductById(id as string);
      
      if (!body) {
        navigate(ROUTES.PRODUCTS);
        return;
      }

      setProduct({
        ...body,
        date_release: formatDateFromString(body.date_release),
        date_revision: formatDateFromString(body.date_revision),
      });
    }

    fetchData();
  }, []);

  return (
    <FormProductSkeleton inputProduct={product} />
  )
}

export default EditProductForm;