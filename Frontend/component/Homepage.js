import './Homepage.css';  
import Header from './Header';  
import Footer from './Footer';  

import AAC1 from './Nv1';  
import AAC2 from './Nv2';  
import AAC3 from './Nv3';  
import AAC4 from './Nv4';  
import AAC5 from './Nv5';  
import AAC6 from './Nv6';  
import Chatbot from './Chatbot';
import Carousel from './Carousel';
 // Import the Carousel component

export default function Homeproj() {
    return (
        <div className="homebody">
            <Header />
             <Carousel/>
            <div className="scroll-container">
                <div className="hbox1">
                    <AAC1 />
                    <AAC2 />
                    <AAC3 />
                    <AAC4 />
                    <AAC5 />
                    <AAC6 />
                </div>
            </div>
            <Chatbot/>
            <Footer />
        </div>
    );
}
