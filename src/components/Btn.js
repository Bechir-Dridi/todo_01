import React from 'react'
import bin from "../media/bin.png";
import { Card } from "react-bootstrap";


export default function Btn({ pindex, plist, pdone_list, pdelete_list }) {

    return (
        <Card>
            <div className='todo_list'>

                {/* done */}
                <div className='done_button' >
                    <button onClick={() => pdone_list(pindex)} style={plist.is_done ? { color: "rgb(169, 250, 98)", fontWeight: "bolder" } : {}}  >{plist.is_done ? "✓" : "D"}</button>

                </div>
                <div className='list' style={{ textDecoration: plist.is_done ? "line-through" : "" }} >
                    {/* the list */}
                    <ol start={pindex + 1}><li>{plist.text}</li></ol>
                </div>

                {/* delete */}
                < button onClick={() => pdelete_list(pindex)}><img alt='delete' width="30" height="38" src={bin} /></button>

            </div >
        </Card>
    )
}
