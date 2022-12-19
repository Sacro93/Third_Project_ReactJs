import"./button.css"

export default function Button(props){
    // console.log(props)
    // Se imprime: {color:"orange", text: "Hola desde props"}
    const styleButton={
        backgroundColor: props.color,
        padding: props.padding,
    };
    return( <button style={styleButton} className="button" >{props.children}</button>)
}

//estilos 1.43 hs de la clase 4 