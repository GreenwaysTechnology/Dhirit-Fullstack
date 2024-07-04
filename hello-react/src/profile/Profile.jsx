
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

// export const Profile = ({ name='Scientists Name', born='01 Jan 1900', isAlive=false, died='01 Jan 1900' }) => <section>
//     <h3>{name}</h3>
//     <h4>Born : {born}</h4>
//     {!isAlive ? <h4>{`Died: ${died}`}</h4> : null}
// </section>

// //default props
// Profile.defaultProps={
//     name:'Scientists Name',
//     born: '01 Jan 1900',
//     isAlive:false,
//     died:'23 June 1912'

// }

// export const Profile = ({ name = 'Scientists Name', born = '01 Jan 1900', isAlive = false, died = '01 Jan 1900' }) => <section>
//     {/* here we are rethrowing all properties to another component */}
//     <ProfileDetails name={name} born={born} isAlive={isAlive} died={died} />
// </section>



// export const Profile = (props) => <section>
//     {/* here we are rethrowing all properties to another component */}
//     <ProfileDetails name={props.name} born={props.born} isAlive={props.isAlive} died={props.died} />
// </section>
export const Profile = (props) => <section>
    {/* Rethrowing all properties to another component using Spread Notation */}
    <ProfileDetails {...props} salution="Mr/Mrs."/>
</section>

export const ProfileDetails = ({salution="Mr/Mrs.", name = 'Scientists Name', born = '01 Jan 1900', isAlive = false, died = '01 Jan 1900' }) => {
    return <><h3>{salution} {name}</h3>
        <h4>Born : {born}</h4>
        {!isAlive ? <h4>{`Died: ${died}`}</h4> : null}
    </>
}
