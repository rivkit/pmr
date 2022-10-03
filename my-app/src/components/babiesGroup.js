import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../fetch/babies';
import '../css/table.css'
// import image from '../img'

export default function Groupbabies() {
    const [products1, setProducts1] = useState([]);
    console.log(products1)
    const productService = new ProductService();


    const imageBodyTemplate = (rowData) => {
        console.log(rowData.Image)
        return <img src={`../img/${rowData.Image}`} />;
        // style={{width : '120px', height : '100px'}} 
    }

    //    alt={rowData.Image}require(`../img/`+rowData.Image)

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts1(data));

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <DataTable value={products1} responsiveLayout="scroll" className='table'>
                    <Column header="נוכחות" type="checkbox" className='td'></Column>
                    <Column field="Age" header="גיל" className='td'></Column>
                    <Column field="FullName" header="שם" className='td'></Column>
                    <Column field="Image" header="תמונה" body={imageBodyTemplate} className='td'></Column>
                </DataTable>

            </div>
        </div>
    );
}