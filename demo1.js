function sum(a=0,b=0){
    return (a+b);
}
const add =(...num)=>{
    const sum = num.reduce((i,s)=>(i+s));
    return sum;
}
export default sum;
<html></>