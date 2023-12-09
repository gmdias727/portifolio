"use client"
import { useEffect, useState } from "react";

const Footer = () => {
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
    <div className="flex items-center justify-center">

      <div className="flex lg:pr-96 md:pr-48 sm:pr-16 font-medium ">
        <p className="p-2 m-2">Developed by Gabriel Mazieri</p>
      </div>

      <div className="flex justify-between font-medium">
        <button className="p-2 m-2">
          <a href={`mailto:${data.contact.email}`}>Email Me</a>
        </button>

        <button className="p-2 m-2">
          <a href={data.contact.linkedin}>Linkedin</a>
        </button>

        <button className="p-2 m-2">
          <a href={data.contact.twitter}>X / Twitter</a>
        </button>

        <button className="p-2 m-2">
          <a href={data.contact.instagram}>Instagram</a>
        </button>

      </div>
    </div>
  )
}

export default Footer;
