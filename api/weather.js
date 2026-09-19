
export default async function handler(req, res) {
    try {
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({
                error: "City name is required"
            });
        }

        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "Weather API key is not configured"
            });
        }

        const url =
            `https://api.weatherapi.com/v1/current.json` +
            `?key=${encodeURIComponent(apiKey)}` +
            `&q=${encodeURIComponent(city)}` +
            `&aqi=yes`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.error?.message || "Weather API request failed"
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Internal server error"
        });
    }
}
}