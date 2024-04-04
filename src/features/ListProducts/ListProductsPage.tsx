import { useNavigate } from "react-router-dom";
import { Product, useFetchProductsQuery } from "../Products/ProductsApiSlice"
import Search from "./Search";
import { useState } from "react";
import ProductList from "./ProductList";

export function ListProductsPage() {
    const { data } = useFetchProductsQuery()
    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const onProductSelect = async ({ id }: Product) => {
        navigate(`/${id}`)
    }

    const handleSearch = (value: string) => {
        if (value.length === 0) {
            setFilteredProducts([])
            return
        }
        if (data) {
            setFilteredProducts(data.filter(product => product.name.toLowerCase().includes(value.toLowerCase())))
        }

    }


    return (<>

        <div className="w-12/12 my-8 sticky top-4 z-30  p-3 rounded-sm  flex flex-col  items:center md:items-end">
            <div className="bg-gray-200 dark:bg-gray-900 p-2 w-12/12 lg:w-4/12 ">
                <Search placeholder="Search" handleSearch={handleSearch}></Search>
            </div>
        </div>

        <div className="">
            {data && <ProductList elements={filteredProducts.length ? filteredProducts : data} onProductSelect={onProductSelect}></ProductList>}
        </div>

    </>)
}