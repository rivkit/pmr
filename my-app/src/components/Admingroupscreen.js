import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../fetch/babies';
import '../css/table.css'
import store from '../store'
import babyinAction from '../Action/babyAction'
import { Checkbox } from 'primereact/checkbox';
// import image from '../img'

export default function ShowGroup() {
    // const [productsFromRedux, setproductsFromRedux] = useState([]);

    const [products, setProducts] = useState([]);
    const productService = new ProductService();


    const imageBodyTemplate = (rowData) => {
        console.log(rowData.Image)
        return <img src={`../img/${rowData.Image}`} />;
    }

    //    alt={rowData.Image}require(`../img/`+rowData.Image)

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data)).then(store.dispatch(babyinAction(products))).then(
            // setproductsFromRedux(store.getState()))
            console.log(store.getState()))
    }, []);
    // eslint-disable-line react-hooks/exhaustive-deps
    // .then(data=>store.dispatch(babyinAction(data),console.log(store.getState())))
    return (
        <div>
            <div className="card">

                <DataTable value={products} responsiveLayout="scroll" className='table'>
                    {/* <Column selectionMode="checkbox" /> */}
                    <Column selectionMode="multiple"></Column>
                    <Column role="checkbox" header="נוכחות" className='td' ></Column>
                    <Column field="Age" header="גיל" className='td'></Column>
                    <Column field="FullName" header="שם" className='td'></Column>
                    <Column field="Image" header="תמונה" body={imageBodyTemplate} className='td'></Column>
                    {/* <image src={'../img/baby1.jpg'}></image> */}
                </DataTable>
            </div>
            <button>שליחת דו"ח יומי</button>
            <br></br>
            <button>שליחת הודעה לכל ילדי הקבוצה</button>
            <br></br>
            <button>מילוי דו"ח</button>
        </div>
        
    );
}
