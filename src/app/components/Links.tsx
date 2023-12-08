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
    <div className="flex justify-center">
      {links.route.map((item, index) => (
        <button className="p-4 m-4 bg-red-500 rounded" key={index}>
          <a className="text-white p-2 m-2" href={item.href}>{item.title}</a>
        </button>
      ))}
    </div>
  )
}

export default Links;
