import React, { useState } from "react"

function FormAddSub() {

    const[formData, setFormData]=useState({
        nick:'',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit=()=>{}

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="formAddSub">
            <form onSubmit={handleSubmit}>
                <input type="text" value={formData.nick}  onChange={handleChange}  name="nick" placeholder="nick"/>
                <input type="number" value={formData.subMonths}  onChange={handleChange}  name="subMoths" placeholder="subMoths"/>
                <input type="text" value={formData.avatar}  onChange={handleChange}  name="avatar" placeholder="avatar"/>
                <input type="text" value={formData.description}  onChange={handleChange}  name="description" placeholder="description"/>

                <button>save new Sub!</button>
            </form>
        </div>
    )
}
export default FormAddSub