import { useState, useEffect } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: 28.6139,
    lng: 77.2090
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(defaultCenter);
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const hasValidKey = Boolean(apiKey && apiKey !== 'your_google_maps_api_key' && apiKey.trim() !== '');

    useEffect(() => {
        if (!navigator.geolocation) return;

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({ lat: latitude, lng: longitude });
            },
            (err) => console.log('Geolocation note:', err.message),
            { enableHighAccuracy: true }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    if (!hasValidKey) {
        return (
            <div className='w-full h-full relative bg-[#e5e3df] flex items-center justify-center overflow-hidden select-none'>
                {/* Simulated Map Styling */}
                <div
                    className='absolute inset-0 opacity-40'
                    style={{
                        backgroundImage: `
                            radial-gradient(#9ca3af 1px, transparent 1px),
                            linear-gradient(to right, #d1d5db 1px, transparent 1px),
                            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px, 80px 80px, 80px 80px'
                    }}
                />

                {/* Simulated Roads / Geometry */}
                <div className='absolute w-[180%] h-3 bg-white rotate-45 top-1/3 -left-20 shadow-sm opacity-80'></div>
                <div className='absolute w-[180%] h-4 bg-yellow-200 -rotate-12 top-1/2 -left-20 shadow-sm opacity-80'></div>
                <div className='absolute w-[180%] h-2 bg-white rotate-12 top-2/3 -left-20 shadow-sm opacity-80'></div>

                {/* Live Marker & Radar Pulse */}
                <div className='relative z-10 flex flex-col items-center'>
                    <div className='relative flex items-center justify-center'>
                        <span className='animate-ping absolute inline-flex h-12 w-12 rounded-full bg-blue-400 opacity-60'></span>
                        <div className='relative h-6 w-6 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center'>
                            <div className='h-2 w-2 rounded-full bg-white'></div>
                        </div>
                    </div>
                    <div className='mt-3 bg-black/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5'>
                        <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse'></span>
                        <span>Live Location ({currentPosition.lat.toFixed(4)}, {currentPosition.lng.toFixed(4)})</span>
                    </div>
                </div>

                {/* Mode Tag */}
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-600 text-[11px] px-3 py-1 rounded-md shadow-sm border border-gray-200 z-10'>
                    Live Map View
                </div>
            </div>
        );
    }

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
            >
                <Marker position={currentPosition} />
            </GoogleMap>
        </LoadScript>
    );
};

export default LiveTracking;