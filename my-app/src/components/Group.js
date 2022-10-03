import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../fetch/babies';
import '../css/table.css'
import store from '../store'
import babyinAction from '../Action/babyAction'
// import image from '../img'

export default function DataTableBasicDemo() {
    // const [productsFromRedux, setproductsFromRedux] = useState([]);

    const [products, setProducts] = useState([]);
    // console.log(products)
    const productService = new ProductService();
   
    // async function showBaby(){

    // }
    const imageBodyTemplate = (rowData) => {
    console.log(rowData.Image)
        return <img src={ `../img/${rowData.Image}`}/>;
        // style={{width : '120px', height : '100px'}} 
    }   
    
//    alt={rowData.Image}require(`../img/`+rowData.Image)
    
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data)).then(store.dispatch(babyinAction(products))).then(
        // setproductsFromRedux(store.getState()))
        console.log(store.getState()))
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // .then(data=>store.dispatch(babyinAction(data),console.log(store.getState())))
    return (
        <div>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll" className='table'>
                <Column field="Status" header="סטטוס" className='td' ></Column>
                <Column field="Age" header="גיל"  className='td'></Column>
               
                <Column field='Address.Street'header="כתובת" className='td'></Column>
               
                {/* {console.log(Address.Street)} */} 
                    {/* {Address.map(Address => <div>{Address.Street}</div>)} */}
                    <Column field="Email" header="מייל" className='td'></Column>
                    <Column field="Phone" header="טלפון" className='td'></Column>
                    <Column field="Group.descrepition" header="קבוצה" className='td'></Column>
                    <Column field="Id" header="תז" className='td'></Column>
                    <Column field="FullName" header="שם" className='td'></Column>
                    <Column field="Image" header="תמונה"  body={imageBodyTemplate} className='td'></Column>
                    {/* <image src={'../img/baby1.jpg'}></image> */}
                </DataTable>
            </div>
        </div>
    );
}
