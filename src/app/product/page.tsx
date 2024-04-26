import { notFound } from "next/navigation";
import Link from "next/link";

export default function product(){
    const productID=10
    return (
        <>
            <h1>Product Page</h1>
            <h2>
                <Link href="product/1">Product 1</Link>
            </h2>
            <h2>
                <Link href="product/2">Product 2</Link>
            </h2>
            <h2>
                <Link href="product/3" replace>Product 3</Link> {/*(clear stack)in this when we will back we will be navigated to home page not product page*/}
            </h2>
            <h2>
                <Link href={`product/${productID}`}>Product {productID}</Link>
            </h2>
            <Link href="/">Click here to go back to home page</Link>
        </>
    );
}