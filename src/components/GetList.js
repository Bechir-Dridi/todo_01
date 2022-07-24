import React, { useState } from 'react';
import { Form } from "react-bootstrap";

const GetList = ({ padd_list, pgoDropFct }) => {

    //Get_State
    const [data, getData] = useState("");

    const get_value = (e) => {
        const typed_value = e.target.value;
        getData(typed_value);
        console.log(typed_value);
    }
    const r_value = (e) => {
        e.preventDefault();
        const prev_data = data;
        if (!prev_data) return;
        console.log("submitted");
        padd_list(data);
        getData("");
    }


    return (
        <Form onSubmit={r_value}>
            <Form.Label><b>🔶️</b></Form.Label>
            <Form.Control input value={data} type="text" placeholder='Add New Task' onChange={get_value} maxlength="65" />
            <div>
                <select onChange={pgoDropFct} name='my_list'>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </Form >
    );
}

export default GetList;
//1h12min