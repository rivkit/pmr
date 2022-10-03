export  class  GroupService {

    getGroup() {
        return  (
                        fetch(`http://localhost:3010/Group`)
                            .then(Response => {
                                if (Response.ok && Response.status === 200) {
                                    return Response.json();
                                }
                            })
                            .then(data => {
                                if (data) {  
                                    // console.log(data)           
                                    return data
                                }
                                else {
                                    alert("error");
                                }
                            })
                            );
    }
    getBabiesOfGroup(id) {
        return  (

        
                        fetch(`http://localhost:3010/Babies/${id} `,{
                            method: "GET"
                          
                          })
                            .then(Response => {
                                // console.log(id)
                                if (Response.ok && Response.status === 200) {
                                    // console.log("babies in group"+Response.json())
                                    return Response.json();
                                }
                            })
                            .then(data => {
                                if (data) { 
                                    //  console.log("data BabiesOfGroup"+JSON.stringify(data))                   
                                     console.log(id) 
                                     console.log(data)                   
                                    return data
                                }
                                else {
                                    alert("error");
                                }
                            })
                            );
    }
   
}