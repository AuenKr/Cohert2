import { useEffect, useRef } from "react";

export default function useIsOnline(){
    const isOnline = useRef(navigator.onLine);
    useEffect(() => {
        function handleOnline() {
            isOnline.current = true;
        }
        function handleOffline() {
            isOnline.current = false;
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);
    return isOnline.current;
}