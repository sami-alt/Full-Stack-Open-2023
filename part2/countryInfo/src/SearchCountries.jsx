
const SearchCountries = (props) => {
    
    const handleInput = (event) => {
        event.preventDefault()
        props.setShow(false)
        props.setSearch(event.target.value)
    }

    return (
        <div>
            <form>
                find countries  <input onChange={handleInput}></input>
            </form>
        </div>
    )
}

export default SearchCountries