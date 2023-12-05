import { useEffect, useState } from "react";

const Gallery = () => {

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
    return <p>Loading data 🥲...</p>
  }


  return(
    <div>
      <p>hello from Gallery</p>

      {data.stack.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.icon} alt={item.alt} />
        </div>
      ))}

    </div>
  )
}

export default Gallery;
