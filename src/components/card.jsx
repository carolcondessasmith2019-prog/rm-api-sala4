import s from './card.module.css'

export const Card = (props) => {
    return(
        <>
              <img src={props.imagem} alt={props.nome} />
              <h4 >Name: {props.nome}</h4>
              <p>Species: {props.especies}</p>
              <p>Origin: {props.origem} </p>
        </>
    )
}
