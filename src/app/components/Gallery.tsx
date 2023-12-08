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


  return (
    <div>
      <p className="underline decoration-2 decoration-sky-700">Some technologies I've used in production in 2023</p>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {data.stack.map((item, index) => (
          <section key={index} className="w-24 flex flex-col">
            <p className="underline decoration-2 decoration-sky-700">{item.name}</p>
            <img src={item.icon} alt={item.alt} className=""/>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Gallery;
