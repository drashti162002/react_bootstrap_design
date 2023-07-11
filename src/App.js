import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section_1 from '../src/componets/Section_1';
import Card_section from '../src/componets/Card_section';
import Number_info from "./componets/Number_info";
import Information_section from "./componets/Infomation_section";
import Image_info_section from "./componets/Image_info_section";
import Mobile_icon_section from "./componets/Mobile_icon_section";
import Image_card_section from './componets/Image_card_section';
import Value_section from './componets/Value_section';
import Business_model from './componets/Business model'
import Princing_plan from './componets/Princing_plan';
import Submit_section from './componets/Submit_section';
// import { Offcanvas } from "../src/componets/offcanvas";
// import { Trigger } from "./components/Trigger";
// import { OffcanvasProvider } from "./Context";
function App() {
   const handleOpen = () => console.log("open");
   const handleClose = () => console.log("close");
 
  return (
    <>
     {/* <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
        <Trigger />
        <Offcanvas />
      </OffcanvasProvider> */}
   <Section_1 />
   <Card_section />
   <Number_info />
   <Information_section/>
   <Image_info_section/>
   <Mobile_icon_section/>
   <Image_card_section/>
   <Value_section/>
   <Business_model/>
   <Princing_plan/>
   <Submit_section/>
   </>
  );
}

export default App;
