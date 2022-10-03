const baby='BABY'

export default function babyinAction(response){
    var baby={
        Image:response.Image,
        FullName:response.FullName,
        Id:response.Id,
        Group:response.Group,
        Phone:response.Phone,
        Email:response.Email,
        Address:response.Address,
        Status:response.Status
    }
    return{
        type:'BABY',
        baby
    }
}