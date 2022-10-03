import '../css/Reports.css'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../fetch/babies';

export default function ReportsBabies() {
  const [products, setProducts] = useState([]);
  console.log(products)
  const productService = new ProductService();

  useEffect(() => {
    productService.getProductsSmall().then(data => setProducts(data) );
   
}, []);
  return (
      <div>

          {/* <img src={require('../img/previous.jpg') } style={{width : '200px', height : '150px'}}   />
           <img src={require('../img/next.jpg') } style={{width : '200px', height : '150px'}}   /> */}
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item left">
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                <img src={require('../img/baby3.jpg') } style={{width : '200px', height : '150px' ,borderRadius:'50%'}}   />
                 <h1>:שם</h1>
                 <h1>:תז</h1>
                 <h1>:גיל</h1>
                 <div>
                  <br></br>
          <h1>תזכורות והודעות</h1>
          <br></br>
          <label>רשימת פריטים
            <h3></h3>
          <select name= "select1">
          <option value= "1">פריט 1 </option>
          <option value= "2">פריט 2 </option>
          <option value= "3">פריט 3 </option>
        </select>
        </label>
         <br></br>
        <textarea name="details" rows="1" cols="1"></textarea>
       
      
                   <h1 dir="rtl">בוקר</h1>
          <div className="card">
              <DataTable value={products} responsiveLayout="scroll">

                  <Column field="Quantity" header="כמות"></Column>
                  <Column field="Dish" header="מאכל"></Column>
              </DataTable>
          </div>
          <h1 dir="rtl">צהריים</h1>
          <div className="card">
              <DataTable value={products} responsiveLayout="scroll">

                  <Column field="Quantity" header="כמות"></Column>
                  <Column field="Dish" header="מאכל"></Column>
              </DataTable>
          </div>
          <div className="card">
              <DataTable value={products} responsiveLayout="scroll">

                  <Column field="rising" header="קימה"></Column>
                  <Column field="layer" header="השכבה"></Column>
              </DataTable>
          </div>
      </div>
                </div>
              </div>
            </div>
          </div>
         </div>
     </div>
     </div>
     
    </div>
        
    
  )
}
