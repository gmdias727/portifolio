import { useEffect, useState } from "react";

const Experience = () => {
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
    <div className="text-justify">
      {data.companies.map((item, index) => (
        <section className="flex flex-col justify-center items-center" key={index}>
          <a href={data.companies[0].website} target="_blank" rel="noopener noreferrer">
            <img className="w-64 m-8" src={data.companies[0].icon} alt={data.companies[0].alt} />
          </a>
        </section>
      ))}

      <p className="mb-4">
        I've worked at <a className="underline" href={data.companies[0].website} target="_blank" rel="noopener noreferrer"><b>{data.companies[0].company_name}</b></a> as a software engineer intern from <b>{data.companies[0].started_at}</b> to <b>{data.companies[0].ended_at}</b> (6 months) mostly with the stacks quoted below.
      </p>

      <p className="mb-4">
        the 2 projects I've worked were both SaaS products, where I made some improvements and implementations in clients products, one of them were a PWA built with Angular in the frontend and .NET in the backend.
      </p>
      <p>
        The other one was a more complex product because it was an LIVT stack application which had an administration panel, an app and one api serving both frontends.
      </p>
    </div>
  )
}

export default Experience;
