import { useEffect, useState } from "react"

const useProfile = (url: string) => {
    const [data, setData] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(url)

                if (response.ok) {
                    const jsonData: Profile = await response.json();
                    setData(jsonData);
                } else {
                    console.error("fail load json");
                }
            } catch (err) {
                console.log("error: ", err)
                setError('Error while loading JSON' + err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [url])

    return { data, loading, error }
}

export default useProfile;
