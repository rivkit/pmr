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
        productService.getProductsSmall().then(data => setProducts(data));

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
                                        <img src={require('../img/baby3.jpg')} style={{ width: '200px', height: '150px', borderRadius: '50%' }} />
                                        <h1>:שם</h1>
                                        <h1>:תז</h1>
                                        <h1>:גיל</h1>
                                        <div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>בקבוקים</h1>
                                        <table dir="rtl">
                                            <tr >
                                                <td>
                                                    <label>סוג</label>
                                                </td>
                                                <td>
                                                    <label>שעה</label>
                                                </td>
                                                <td>
                                                    <label>כמות</label>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>

                                                    <select name="kind">
                                                        <option value="1">פריט 1 </option>
                                                        <option value="2">פריט 2 </option>
                                                        <option value="3">פריט 3 </option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="hour">
                                                        <option value="1">פריט 1 </option>
                                                        <option value="2">פריט 2 </option>
                                                        <option value="3">פריט 3 </option>
                                                    </select>
                                                </td>
                                                <td>

                                                    <select name="Quantity">
                                                        <option value="1">פריט 1 </option>
                                                        <option value="2">פריט 2 </option>
                                                        <option value="3">פריט 3 </option>
                                                    </select></td>
                                            </tr>
                                        </table>
                                        <button>הוספה</button>
                                        <h1>טעימות</h1>
                                        <table dir="rtl">
                                            <tr>
                                                <td>
                                                    <label>תפוח</label>
                                                </td>
                                                <td>
                                                    <label>בננה</label>
                                                </td>
                                                <td>
                                                    <label>אפרסק</label>
                                                </td>
                                                <td>
                                                    <label>פחמימה</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                            <input type="checkbox"></input>
                                                </td>
                                                <td>
                                            <input type="checkbox"></input>
                                                </td>
                                                <td>
                                            <input type="checkbox"></input>
                                                </td>
                                                <td>
                                            <input type="checkbox"></input>
                                                </td>
                                            </tr>
                                        </table>
                                        <table dir="rtl">
                                            <tr >
                                                <td>
                                                    <label>שעה</label>
                                                </td>
                                                <td>
                                                    <label>כמות</label>
                                                </td>
                                            
                                            </tr>

                                            <tr>
                                                <td>
                                                    <select name="hour">
                                                        <option value="1">פריט 1 </option>
                                                        <option value="2">פריט 2 </option>
                                                        <option value="3">פריט 3 </option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select name="Quantity">
                                                        <option value="1">פריט 1 </option>
                                                        <option value="2">פריט 2 </option>
                                                        <option value="3">פריט 3 </option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </table>
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

