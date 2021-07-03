import NameTime from "./Components/NameTime";
import StudentData from "./Components/StudentData";
import WeatherReport from "./Components/WeatherReport";
import StudentDetails from "./Components/StudentDetails";
import CustomerDetails from "./Components/CustomerDetails";
function App() {

  return (
    <div>
     <NameTime/>
     <WeatherReport />
     {/* <div>
     <StudentData />
     </div> 
     <div>
     <CustomerDetails />
     </div>
     <div>
       <CustomerDetails/>
     </div> */}
    </div>
  );
}

export default App;
