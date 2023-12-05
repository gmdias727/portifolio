"use client"
import { useEffect, useState } from "react"

const FetchCustomJson = () => {
    const [data, setData] = useState<Profile | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch("/profile.json")

                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    console.error("fail load json");
                }
            } catch (err) {
                console.log("error: ", err)
            }
        };

        loadData();
    }, [])

    if (!data) {
        return <p>Loading data...</p>
    }

    return (
        <div>
          <h1>My name is { data.profile.name } {data.profile.surname}, Welcome to my portifolio</h1>
        </div>
      );
}

export default FetchCustomJson;
