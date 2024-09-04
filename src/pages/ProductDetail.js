import { useParams } from "react-router-dom"

export default function ProductDetailPage(){
    const params = useParams() //ottengo un oggetto che contiene tutte le proprietà definite nel router della route dinamica, in questo caso productId

    return(
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
        </>
    )
}