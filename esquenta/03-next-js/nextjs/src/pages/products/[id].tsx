import { useRouter } from "next/router"

const ProductShowPage = () => {
    const router = useRouter()
    return <div>
        <h1>Mostrando produto { router.query.id }</h1>
    </div>
}

export default ProductShowPage;