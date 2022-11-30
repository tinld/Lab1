import * as React from "react"

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1, name: "Tin"});
        }, 1000)
    })
}

export default function Ex11() {
    const [id, setId] = React.useState("loading...")
    const [name, setName] = React.useState("loading...")

    React.useEffect(() => {
        fetchUser().then((user) => {
            setId(user.id)
            setName(user.name)
        })
    })

    return (
        <>
            <h3 style={{color: "pink"}}>Ex 1.1</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    )

}