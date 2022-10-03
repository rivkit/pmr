import { GroupService } from '../fetch/group'
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default  function ShowAllGroup() {
    let history = useHistory();
    const [allGroup, setallGroup] = useState([]);
    // const [numOfBabies, setnumOfBabies] = useState([]);
    const LoginGroup = () => {
        history.push("/Admingroupscreen")
    
    }

    const babiesOfGroup1 = new GroupService();
    useEffect(() => {
        const groupService = new GroupService()
        groupService.getGroup().then(data => setallGroup(data))
    }, [])
    console.log(allGroup)

    return (<div>
        {
            allGroup.map((val) => {
             babiesOfGroup1.getBabiesOfGroup(val._id).then(
                //    data => setnumOfBabies(data)
                )
                // console.log(numOfBabies)
             
            
           
                return <button onClick={() => LoginGroup()}> <div>שם:{val.descrepition}</div>
                    <div>מס' ילדים: </div>
                  {/* {numOfBabies.length}  */}
                   <div>נוכחות יומית:</div>
                </button>
            }
            )
        }
    </div>
    )
}

