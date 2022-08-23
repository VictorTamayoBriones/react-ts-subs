import React, { useState } from "react"
import { Isub } from "../../models"

interface Props{
    onNewSub: (newSub: Isub)=>void
}

function FormAddSub({onNewSub}:Props) {

    const[formData, setFormData]=useState<Isub>({
        nick:'',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onNewSub(formData);
        setFormData({
            nick:'',
            subMonths: 0,
            avatar: '',
            description: ''
        })
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="formAddSub">
            <form onSubmit={handleSubmit}>
                <input type="text" value={formData.nick}  onChange={handleChange}  name="nick" placeholder="nick"/>
                <input type="number" value={formData.subMonths}  onChange={handleChange}  name="subMonths" placeholder="subMoths"/>
                <input type="text" value={formData.avatar}  onChange={handleChange}  name="avatar" placeholder="avatar"/>
                <textarea value={formData.description}  onChange={handleChange}  name="description" placeholder="description"/>

                <button>save new Sub!</button>
            </form>
        </div>
    )
}
export default FormAddSub