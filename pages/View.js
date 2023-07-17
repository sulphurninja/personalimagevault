import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';

const Snapshots = () => {
    const [snapshots, setSnapshots] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/getSnapshots'); // Replace with your API endpoint
                const { data } = response.data;
                setSnapshots(data);
            } catch (error) {
                console.error('Error fetching snapshots:', error);
            }
        };

        fetchData();
    }, []);

    console.log(snapshots);

    return (
        <div>
        <Header/>
        <h1 className='font-bold text-4xl text-center mb-8 font-mono'>Suspect Pictures</h1>
        <div className='text-white grid grid-cols-3 gap-x-4 gap-y-4 text-2xl'>
            {snapshots.map((snapshot) => (
            
                <img className='h-full' src={snapshot.image} />
            ))}
            </div>
        </div>
    );
};

export default Snapshots;
