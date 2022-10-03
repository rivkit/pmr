import babyinAction from '../Action/babyAction'
import store from '../store'
export  class  ProductService {

    getProductsSmall() {
        return  (
                        fetch(`http://localhost:3010/Babies`)
                            .then(Response => {
                                if (Response.ok && Response.status === 200) {
                                    return Response.json();
                                }
                            })
                            .then(data => {
                                if (data) {
                                    // console.log(data)
                                    // store.dispatch(babyinAction(data[0]))
                                    // console.log(store.getState())
                                    return data
                                    // showGroups(data)
                                }
                                else {
                                    alert("error");
                                }
                            })
                            // .then(d => d.data)
                            );
    }

     getProducts() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

     getProductsWithOrdersSmall() {
        return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    }
}