import { useEffect, useState } from "react";

const Contributions = () => {
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
    <section className="">
     {data.contributions.map((item, index) => (
          <section className="flex flex-wrap justify-center items-center" key={index}>
            <a className="p-2 underline underline-offset-4 decoration-2 decoration-indigo-500" href={item.link}>
              {item.title}
            </a>
          </section>
        ))}
    </section>
  )
}

export default Contributions;
