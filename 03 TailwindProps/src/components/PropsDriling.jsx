export  const PropsDriling = ()=> {
    return ( 
        <section className="p-4 h-lvh w-screen tracking-wider flex flex-col bg-gray-900 text-shadow-white shadow-2xl justify-center items-center">
            <h1>Parent Component!</h1>
            <ChildComponent data="React Js"/>
        </section>
     );
};

const ChildComponent = (props)=>{
    return(
        <>
        <h1>Hello, This is B Section</h1>
        <GrandChildComponent data = {props.data}/>
        </>
    );
}
const GrandChildComponent = (props)=>{
    return(
        <>
        <h1>Hello, This is C Section</h1>
        <GrandGrandChildComponent data = {props.data}/>
        </>
    )
}
const GrandGrandChildComponent = ({data})=>{
    return(
        <>
        <h1>Hello,{data}</h1>
        </>
    )
}