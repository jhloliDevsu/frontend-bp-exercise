import FooterTable from "components/organisms/FooterTable";
import Header from "components/organisms/Header";
import SearchAddField from "components/organisms/SearchAddField";
import Table from "components/organisms/Table";
import { COLORS } from "constants/colors";
import { LIMITS } from "constants/limits";
import { filterProducts } from "lib/filterProducts";
import { Product } from "models/Product";
import React, { CSSProperties, useEffect, useState } from "react";

interface Props {
  products: Product[];
}

const styleBody: CSSProperties = {
  backgroundColor: COLORS.gray,
  height: "100vh",
  padding: "10px 50px",
}

const styleTable: CSSProperties = {
  backgroundColor: "white",
  padding: "10px",
}

const ProductsSkeleton: React.FC<Props> = ({products}) => {
  const [limit, setLimit] = useState<number>(LIMITS[0]);
  const [search, setSearch] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const count = filteredProducts.length;

  useEffect(() => {
    const tempFilteredProducts = filterProducts(products, search, limit);
    setFilteredProducts(tempFilteredProducts);
  }, [products, search, limit]);

  return (
    <div>
      <Header />
      <div style={styleBody}>
        <div style={{marginTop: "80px", marginBottom: "30px"}}>
          <SearchAddField setSearch={setSearch} />
        </div>
        <div style={styleTable}>
          <Table rows={filteredProducts} />
          <div style={{paddingBottom: "30px"}}>
            <FooterTable count={count} setPage={(value) => setLimit(+value)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsSkeleton;