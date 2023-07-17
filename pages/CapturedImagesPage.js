import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'

export default function CapturedImagesPage() {

    const [snapshots, setSnapshot] = useState('');

    useEffect(() => {
        const fetchSnapshots = async () => {
            try {
                const response = await fetch('/api/getSnapshots');
                const data = await response.json();
                if (response.ok) {
                    setSnapshot(data.data);
                } else {
                    console.error('Failed to fetch snapshots ');
                }
            } catch (error) {
                console.error(error);
            }
        };

        console.log (snapshots)

        fetchSnapshots();
    }, []);

    return (
        <div>
            <Header />
            {snapshots.map((wow) => (
            <h1>{wow}</h1>
            ))}
        </div>
    )
}
