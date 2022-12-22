// Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.

function Hello(props){
    
return(

    <div className="p-3 mb-3 bg-info bg-opacity-10 border border-info border-start-3 rounded-end">

        <div className="text-center fw-bolder"> 
        
        <p>{props.title}</p> 
        <p>{props.name}</p> 
        <p>{props.proyect}</p>
        </div>
    </div>

)

}
export default Hello;