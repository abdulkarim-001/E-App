import { useUIContext } from "../context/ui";



function  usePayment(product){
    const {payment, setPayment} = useUIContext();
        const payProcress = ()=>{
            payment.findIndex ( c=> c.price === product.price) >= 0  
            ? setPayment(payment.filter(c => c.price !== product.price ))
            : setPayment(c=> [...c, product]);             
        }

        const payProcressText = payment.findIndex((c) => c.price === product.price) >= 0
        ? "Payment Process" : "First Select Items";

        return {payProcress, payProcressText}
}

export default usePayment;