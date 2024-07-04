import { Profile } from "../profile/Profile"

export function Gallery() {
    let dided = " 7 June 1954 (aged 41) Wilmslow, Cheshire, England"
    return <>
        <h1>Scientists / Computer</h1>
        <Profile name={"Alan Turing"} born={"23 June 1912"} died={dided} isAlive={false} />
        <Profile name={"Timothy John Berners-Lee"} born={"23 June 1912"} isAlive={true}  />
        <hr/>
        <Profile  />
    </>
}