import { Component } from "react";
import MyPicture from '../images/my-pic-HD-Zoom.png'
class Dashboard extends Component{
    render(){
        return (  
        <section id="dashboard" className="flex flex-col md:flex-row lightTheme" >
            <div className="w-full md:w-1/2 my-[4%]">
                <div className="w-full">
                    <img className="pulse" src={MyPicture} alt="backdrop" />
                </div>
            </div>
            <div className="w-full md:w-1/2 text-center  my-[4%]">
                <div className="mx-[10%] my-[25%] bounce-in-right">
                    <p className="font-bold text-5xl heading hover:[text-shadow:_0_6px_0_rgb(188_142_152_/_56%)]">Hello! <br />I'm Suganya </p>
                    <p className="text-xl py-5 subHeading hover:[text-shadow:_0_6px_0_rgb(188_142_152_/_56%)]">A Front-end Developer and Designer</p>
                </div>
            </div>
            
        </section>
            
        );
    }
}

export default Dashboard;