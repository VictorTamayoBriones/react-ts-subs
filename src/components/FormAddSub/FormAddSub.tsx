function FormAddSub() {

    const handleSubmit=()=>{}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nick" placeholder="nick"/>
                <input type="text" name="subMoths" placeholder="subMoths"/>
                <input type="text" name="avatar" placeholder="avatar"/>
                <input type="text" name="description" placeholder="description"/>

                <button>save new Sub!</button>
            </form>
        </div>
    )
}
export default FormAddSub