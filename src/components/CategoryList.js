import { Row, Col } from "react-bootstrap"
import ProductCard from './ProductCard'
import './CategoryList.css'

export default function CategoryList({category, filteredProds}) {
    
    return <>
            <Row className="justify-content-around">
                <Col sm={12} md={12} lg={12} xl={12}>
                    <h3 className="category-title">{category.toUpperCase()}</h3>
                </Col>
                {filteredProds
                .map((p) =>
                    <ProductCard
                        key={p.id}
                        prod={p}
                    />
                )}
            </Row>
    </>
}