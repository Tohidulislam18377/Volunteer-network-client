

import { useLoaderData } from 'react-router-dom';
import './Home.css'
import VolunteerCard from '../VolunteerCard/VolunteerCard';




const Home = () => {
    const volunteers = useLoaderData();
    return (
        <>

            <h2 className='heading'>A Grow By Helping People In Need</h2>
            <div className='ml-10'>
                <input className='input-search' type="search" name="search" placeholder='Search...' />
                <button className='bg-slate-800 mr-2 btn-search text-white'>search</button>
            </div>
            <div className='grid grid-cols-4'>
                {
                    volunteers.map(volunteer => <VolunteerCard
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></VolunteerCard>)
                }
            </div>
        </>


    );
};

export default Home;