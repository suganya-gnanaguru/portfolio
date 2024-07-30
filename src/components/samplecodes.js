import { Component } from "react";
import './dashboard.css';

class Dashboard extends Component{
    render(){
        return (
            <div className="dashboardBackground  py-[100px] mx-[25%] my-[10%] hover:rounded-3xl hover:border hover:border-red-900 hover:g-red-200" style={{
                backgroundImage: 'url(' + require('../images/background.png') + ')',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "1008px",              
                backgroundImage: 'url(' + require('../images/my-pic-HD-Zoom.png') + ')',    


                
            }}> 

            <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                 <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>JV</span> Logesh 
                     <p className='text-2xl'>subtitle</p>
                 </h1>
                 <div className='flex py-10'>
                     <a href="sdsds" className='pr-5 hover:text-white'>twitter</a>
                     <a href="sdsd" className='pr-5 hover:text-white'>facebook</a>
                     <a href="{config.social.linkedin}" className='hover:text-white'>linkedin</a>
                 </div>
            </div>
            <img className='md:w-1/3' src={MyPicture} />
         </section>

            


            
               
                <img  src={require('./images/background.png')} width="100%" height="100%;" alt="backdrop" className="dashboardBackground"/>
                
                <h1>welcome to dashboard</h1>
            </div>
        );
    }
}
