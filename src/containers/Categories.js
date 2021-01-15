import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import { useProductsContext } from "../context/ProductsContext";

export default function Categories() {
    const {prods} = useProductsContext()
    const {category} = useParams()
    const filteredProds =  prods.filter(p => {return p.category.toLowerCase().indexOf(category) >= 0 })

    return <>
        <Container fluid>
            <CategoryList filteredProds={filteredProds} category={category}/>
        </Container>
    </>
}