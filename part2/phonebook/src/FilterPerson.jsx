import { useState } from "react"

const SearchPerson = (props) => {
    const [search, setSearch] = useState('')
    const {persons} = props

    const handleInput = (event) => {
        setSearch(event.target.value)
    }
    
    const searchPersons = () => (persons.find(person => person.name === search))
    const found = searchPersons()

    const isNotFound = found === undefined
    
    return(
        <div>
            <form onSubmit={searchPersons}>
                Search name <input onChange={handleInput}></input>
            </form>
            <div>
            {isNotFound ?  <p>No name found</p> : <p>{found.name} {found.number}</p>}
            </div>
        </div>
    )
}


export default SearchPerson