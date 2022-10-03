// import './App.css';
import './css/App.css'
import Start from './components/Home.js'
import ShowAllGroup from './components/management.js'
import { BrowserRouter, Route } from 'react-router-dom'
// import Toddlers from './components/ToddlerScreenManager.js'
import DataTableBasicDemo from './components/Group'
import ReportsBabies from './components/Reports'
// import Counter from './components/redux'
import Babyreports from './components/Babyreports'
import Groupbabies from './components/babiesGroup'
import ShowGroup from './components/Admingroupscreen'
// import DataTableBasicDemo from './components/Group'





export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact><Start /></Route>
      <Route path="/management" ><ShowAllGroup /></Route>
      {/* <Route path="/Admingroupscreen" ><Groups /></Route> */}
      {/* <Route path="/ToddlerScreenManager" ><Toddlers /></Route> */}
      <Route path="/group" ><DataTableBasicDemo /></Route>
      <Route path="/reports" ><ReportsBabies /></Route>
      {/* <Route path="/redux" ><Counter /></Route> */}
      {/* <Route path="/group" ><DataTableBasicDemo /></Route> */}
      <Route path="/Babyreports" ><Babyreports /></Route>
      <Route path="/Groupbabies" ><Groupbabies /></Route>
      <Route path="/showGroup" ><ShowGroup /></Route>




    </BrowserRouter>
  );
}



