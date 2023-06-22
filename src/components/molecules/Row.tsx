import ContextMenu from "components/atoms/ContextMenu";
import IconButton from "components/atoms/IconButton";
import Logo from "components/atoms/Logo";
import { ROUTES } from "enums/routes";
import { Product } from "models/Product";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "services";
import { formatDateFromString } from "utils/formatDateFromString";

interface Props {
  data: Product;
}

const padding = "10px 0px";

const Row: React.FC<Props> = ({data}) => {
  const ref = useRef(null);
  const [showContext, setShowContext] = useState(false);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const navigate = useNavigate();
  const {date_release, date_revision, description, logo, name, id} = data;

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {x, y} = ref.current.getBoundingClientRect();
    
    setPositionX(x);
    setPositionY(y);
    setShowContext(!showContext);
  }

  const handleClickOutside = () => {
    setShowContext(false);
  }

  const handleEdit = () => {
    navigate(ROUTES.EDIT_PRODUCT.replace(":id", id));
  }

  const handleDelete = async () => {
    await deleteProduct(id);
    window.location.reload();
  }

  const options = [
    {
      label: "Editar",
      onClick: handleEdit
    },
    {
      label: "Eliminar",
      onClick: handleDelete
    },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  return (
    <tr>
      <td style={{textAlign: "center", padding}}>
        <Logo src={logo} />
      </td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{formatDateFromString(date_release)}</td>
      <td>{formatDateFromString(date_revision)}</td>
      <td>
        <div ref={ref}>
          <IconButton src="/images/dots.png" onClick={handleClick} width={32} />
        </div>
        {showContext && <ContextMenu options={options} x={positionX} y={positionY} />}
      </td>
    </tr>
  )
}

export default Row;