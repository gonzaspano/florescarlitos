import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import { useProductsContext } from "../context/ProductsContext";
import WithoutProducts from "../components/WithoutProducts";

export default function Categories() {
    const [empty, setEmpty] = useState(false)
    const { prods } = useProductsContext()
    const { category } = useParams()
    const filteredProds = prods.filter(p => { return p.category.toLowerCase().indexOf(category) >= 0 })

    useEffect(() => {
        if (filteredProds.length === 0) {
            setEmpty(true)
        } else setEmpty(false)

    }, [filteredProds, category])

    return <>
        <Container fluid>
            {empty ?
                <WithoutProducts category={category} /> :
                <CategoryList filteredProds={filteredProds} category={category} />}
        </Container>
    </>
}