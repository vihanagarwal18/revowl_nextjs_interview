export default function Productdetailslaayout({
    children,
}:{
    children:React.ReactNode;
}){
    return(
        <>
            {children}
            <h2>Features products</h2>
        </>
    );
}