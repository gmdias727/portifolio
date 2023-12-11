import Image from 'next/image'
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
      <p className="mb-4">Some technologies I&apos;ve used in production in 2023</p>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {data.stack.map((item, index) => (
          <section key={index} className="w-16 flex flex-col">
            <p className="text-center">{item.name}</p>
            <Image
              src={item.icon}
              width={500}
              height={500}
              alt={item.alt}
            />
          </section>
        ))}
      </div>
    </div>
  )
}

export default Gallery;
