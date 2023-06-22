import { Product } from "models/Product";
import { checkProduct } from "services";
import { isDate } from "utils/isDate";
import { isImage } from "utils/isImage";

export const validProduct = async (product: Product, isEdit: boolean) => {
  const {date_release, description, id, logo, name} = product;
  const error: Product = {
    date_release: "",
    date_revision: "",
    description: "",
    id: "",
    logo: "",
    name: "",
  };
  let isError = false;

  if (id === "") {
    error.id = "No puede estar vacío el ID";
    isError = true;
  }

  const isFoundId = await checkProduct(id);

  if (isFoundId && error.id === "" && !isEdit) {
    error.id = "Este ID ya está siendo utilizado";
    isError = true;
  }

  if (description === "") {
    error.description = "No puede estar vacío la descripción";
    isError = true;
  }

  if (name === "") {
    error.name = "No puede estar vacío el nombre";
    isError = true;
  }

  if (logo === "") {
    error.logo = "No puede estar vacío el logo";
    isError = true;
  } else if (!isImage(logo)) {
    error.logo = "Debe ingresar un logo de manera correcta";
    isError = true;
  }

  if (date_release === "") {
    error.date_release = "Debe ingresar la fecha de liberación";
    isError = true;
  } else if (!isDate(date_release)) {
    error.date_release = "Debe ingresar correctamente la fecha";
    isError = true;
  }

  return {isError, data: error};
}