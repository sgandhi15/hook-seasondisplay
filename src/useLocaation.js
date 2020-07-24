import { useState, useEffect } from "react";

export default () => {
    const [lat, setLat] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            positionError => setErrorMessage(positionError.message)
        )
    }, [])
    return [lat, errorMessage]
}