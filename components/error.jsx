const Error = (props) => {
    const {message} = props 
    return (
        <div className = "error">
            <h2> Error!</h2>
            <p> {message}</p>

        </div>
    )
}
export default Error;
