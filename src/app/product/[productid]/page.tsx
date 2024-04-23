import { notFound } from "next/navigation";

export default function productdetails({
    params,
}:{
    params: {productid:string};
}){
    if(parseInt(params.productid)>5){
        notFound();
    }
    return <h1>product detail Page {params.productid}</h1>
}


// "http://localhost:3000/product/3"
//dynamic route