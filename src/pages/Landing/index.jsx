import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


function Landing() {
//   const [data, setData] = useState(0);
    const navigate =useNavigate();
    const handleRedirect =()=>{
        navigate('/Login');
    }
  const cardData1 = [
    { id: 1, name: "COVID-19 Updates", info: "Stay informed about the latest COVID-19 guidelines and vaccination information" },
    { id: 2, name: "Heart Health", info: "Discover tips and information for maintaining a healthy heart and cardiovascular system. " },
    { id: 3, name: "Mental Wellness", info:"Explore resources and support options for maintaining good mental health." },
    { id: 4, name: "Nutrition & Diet", info:"Learn about balanced nutrition and healthy eating habits for overall wellbeing." },
  ];
  const cardData2 = [
    { id: 1, name: "Bayer Launches New Initiative for Preventive Healthcare", info: "Our new program aims to promote regular health check-ups and early disease detection" },
    { id: 2, name: "Understanding the Importance of Vaccinations", info: "Learn why vaccinations are crucial for individual and community health." },
  ];
  return (
    <>
    <div className='bg-cyan-300'>
      <div  className='font-bold uppercase justify-center text-white mt-10 pt-10 text-lg'>
        BAYER HEALTHCARE
      </div>
    
      <div className="md:flex justify-center bg-green-600 text-white text-center mt-10 text-white">
        <div className='md:w-40'>Home</div>
        <div className='md:w-40'>Health Topics</div>
        <div className='md:w-40'>Resources</div>
        <div className='md:w-40'>About Us</div>
        <Button className='md:w-40' onClick={handleRedirect}>Login</Button>
      </div>
      <div className='md:flex font-bold uppercase justify-center mt-10 text-white text-xl'>
       Your Health, Our Priority
      </div>
      <div className='text-white pb-10'>
      Explore the latest health information and resources from Bayer Healthcare
      </div>
    </div>
    <div className="secondLayer">
      <div className='text-lg font-bold text-left'>
      Featured Health Topics
        </div>
        <div className="md:flex items-center justify-center">
        {cardData1.map((item) => (
            <div className='relative w-full md:w-72 m-5'>
            <Card variant="outlined" className='h-auto p-5 md:h-48'><h1>{item.name}
                <h3>{item.info}</h3>
            </h1>
            <Button variant="contained" className='absolute -bottom-2'>Learn More</Button>
             </Card>
            </div>
        ))}  
        </div>
        
    </div>
    <div className="thirdLayer">
      <div className='text-lg font-bold text-left'>
      Latest Health News
        </div>
        {cardData2.map((item) => (
        <div className="flex text-left">
        
            <Card variant="outlined" className='w-full p-5 m-5'><h1>{item.name}
                <h3>{item.info}</h3>
            </h1>
            <Button variant="contained">Learn More</Button>
             </Card>
            </div>
        ))}   
    </div>
    </>
  )
}

export default Landing