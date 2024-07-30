import PLMS from '../images/PLMS.png';
import CMS from '../images/CMS.png';
import GS from '../images/gs.png';
import { useState } from 'react';
export default function Projects(){
    const [showPLMSDescription, setDescription] = useState(false);
    return (
        <section className="flex flex-col lightTheme" id="Projects">
            <div className="w-full py-[2%]">
                <p className="heading underline font-extrabold text-2xl">Projects</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 pb-[2%]'>
                <div className="w-full md:w-1/3 ">
                    <img src={PLMS} alt="P1" className="hover:shadow-2xl" id="plms" onClick={()=> setDescription(!showPLMSDescription) }/>
                    {
                        showPLMSDescription && <p className='text-base text-justify py-[1%]'>
                        Property Lease Management System
                    </p>
                    }
                </div>
                <div className='w-full md:w-1/3'>
                    <img src={CMS} alt="P2" className="hover:shadow-2xl"/>
                </div>
                <div className='w-full md:w-1/3'>
                    <img src={GS} alt="P2" className="hover:shadow-2xl"/>
                </div>
            </div>
           
        </section>
    );
} 