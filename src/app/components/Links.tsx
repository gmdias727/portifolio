import { useEffect, useState } from "react"

const Links = () => {
  const [links, setLinks] = useState<Link | null>(null);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const response = await fetch("/links.json");

        if (response.ok) {
          const jsonLinks = await response.json();
          setLinks(jsonLinks);
        }
      } catch (error) {
        console.log("An error occured while loading links: " + error);
      }
    };

    loadLinks();
  }, [])

  if (!links) {
    return <p>Loading links... 👍</p>
  }

  return (
    <div className="fixed top-0 w-full bg-white shadow-md flex flex-wrap justify-center">
      {links.route.map((item, index) => (
        <button className="p-2 m-2 bg-indigo-300 rounded" key={index}>
          <a className="text-white p-2 m-2" href={item.href}>{item.title}</a>
        </button>
      ))}
    </div>
  )
}

export default Links;
