export default function ProductDetails({ params }: {
    params: { productId: string}
}) {
    return <div>
        <p className="text-3xl text-black bg-white">Olá prod {params.productId}</p>
    </div>
}