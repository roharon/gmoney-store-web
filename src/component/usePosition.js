import {useState, useEffect} from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState();
    const [error, setError] = useState(null);

    const onChange = ({coords}) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    };

    const onError = (error) => {
        setError(error.message);
    }

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo){
            setError('Not support Geolocation');
            return;
        }

        const watcher = geo.watchPosition(onChange, onError);

        return () => {
            geo.clearWatch(watcher);
        }
    }, []);

    return {...position, error};
};