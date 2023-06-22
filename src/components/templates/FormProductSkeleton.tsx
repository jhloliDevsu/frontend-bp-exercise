import Button from "components/atoms/Button";
import Label from "components/atoms/Label";
import Textfield from "components/molecules/Textfield";
import Header from "components/organisms/Header";
import { COLORS } from "constants/colors";
import { INITAL_PRODUCT } from "constants/initalProduct";
import { MESSAGES } from "constants/messages";
import { parseProduct } from "lib/parseProduct";
import { validProduct } from "lib/validProduct";
import { Product } from "models/Product";
import React, { CSSProperties, useState, useEffect } from "react";
import { createProduct, updateProduct } from "services";
import { containErrors } from "utils/containErrors";
import { formatDateFromString } from "utils/formatDateFromString";
import { getDateFromString } from "utils/getDateFromString";
import { isDate } from "utils/isDate";

interface Props {
  inputProduct?: Product;
}

const style: CSSProperties = {
  backgroundColor: COLORS.gray,
  height: "100vh",
}

const styleForm: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "auto auto",
  columnGap: "20px",
  rowGap: "15px",
  padding: "20px 40px"
}

const FormProductSkeleton: React.FC<Props> = ({inputProduct}) => {
  const isEdit = inputProduct !== undefined;
  const [product, setProduct] = useState(INITAL_PRODUCT);
  const [error, setError] = useState(INITAL_PRODUCT);
  const [message, setMessage] = useState("");
  const [colorMessage, setColorMessage] = useState(COLORS.secondary);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (value: string, key: string) => {
    setError({...error, [key]: ""});

    if (key === "date_release") {
      if (isDate(value)) {
        const date = getDateFromString(value);
        date.setFullYear(date.getFullYear() + 1);

        setProduct({...product, [key]: value, date_revision: formatDateFromString(date.toISOString())});
      } else {
        setProduct({...product, [key]: value, date_revision: ""});
      }
    } else {
      setProduct({...product, [key]: value});
    }
  }

  const handleCleanForm = () =>{
    setError(INITAL_PRODUCT);

    const data = isEdit ? {...INITAL_PRODUCT, id: inputProduct.id} : INITAL_PRODUCT;

    setProduct(data);
  }

  const handleSubmit = async () => {
    setMessage(MESSAGES.loading);
    setColorMessage(COLORS.secondary);
    
    const {data, isError} = await validProduct(product, isEdit);
    setError(data);

    if (isError) {
      setMessage("");
      setDisabled(true);
      return;
    }

    const body = parseProduct(product);

    if (isEdit) {
      await updateProduct(body);
    } else {
      await createProduct(body);
      setProduct(INITAL_PRODUCT);
    }

    setMessage(isEdit ? MESSAGES.updated : MESSAGES.saved);
    setColorMessage(COLORS.success);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  useEffect(() => {
    if (disabled) {
      setDisabled(containErrors(error));
    }
  }, [product]);

  useEffect(() => {
    if (isEdit) {
      setProduct(inputProduct);
    }
  }, [inputProduct]);

  return (
    <div style={style}>
      <Header backgroundColor={COLORS.gray} />
      <div style={{backgroundColor: "white", margin: "20px 300px", borderRadius: "10px"}}>
        <div style={{textAlign: "center"}}>
          <Label text="Formulario de Registro" fontSize="32px" />
        </div>
        <hr style={{border: "1px solid"}} />
        <div style={styleForm}>
          <Textfield setValue={(value) => handleChange(value, "id")} label="ID" value={product.id} error={error.id} disabled={isEdit} />
          <Textfield setValue={(value) => handleChange(value, "name")} label="Nombre" value={product.name} error={error.name} />
          <Textfield setValue={(value) => handleChange(value, "description")} label="Descripción" value={product.description} error={error.description} />
          <Textfield setValue={(value) => handleChange(value, "logo")} label="Logo" value={product.logo} error={error.logo} />
          <Textfield setValue={(value) => handleChange(value, "date_release")} label="Fecha Liberación" value={product.date_release} error={error.date_release} />
          <Textfield setValue={(value) => handleChange(value, "date_revision")} label="Fecha Revisión" value={product.date_revision} disabled />
          <div style={{gridColumn: "1 / span 2", display: "grid", gridTemplateColumns: "auto auto", columnGap: "60px", margin: "25px 0px"}}>
            <div style={{textAlign: "right"}}>
              <Button text="Reiniciar" color={COLORS.gray} onClick={handleCleanForm} />
            </div>
            <div>
              <Button text="Enviar" onClick={handleSubmit} disabled={disabled} />
            </div>
          </div>
          <div style={{gridColumn: "1 / span 2", textAlign: "center"}}>
            <Label text={message} color={colorMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormProductSkeleton;