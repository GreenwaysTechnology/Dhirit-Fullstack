
//props = object
// export const Profile = (props) => {
//     return <section>
//         <h3>{props.name}</h3>
//         <h4>Born : {props.born}</h4>
//         {!props.isAlive ? <h4>{`Died: ${props.died}`}</h4> : null}
//     </section>
// }

//destructure
// export const Profile = (props) => {
//     const { name, born, isAlive, died } = props
//     return <section>
//         <h3>{name}</h3>
//         <h4>Born : {born}</h4>
//         {!isAlive ? <h4>{`Died: ${died}`}</h4> : null}
//     </section>
// }

export const Profile = ({ name, born, isAlive, died }) => <section>
    <h3>{name}</h3>
    <h4>Born : {born}</h4>
    {!isAlive ? <h4>{`Died: ${died}`}</h4> : null}
</section>
