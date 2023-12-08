import { useEffect, useState } from "react"

const useLink = (url: string) => {
  const [links, setLinks] = useState<Link | null>(null);
  const [loadingLinks, setLoadingLinks] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const response = await fetch(url)

        if (response.ok) {
          const jsonContent: Link = await response.json();
          setLinks(jsonContent)
        }
      } catch (err) {
        console.log("An error occured while loading links: " + err);
        setError("An error occured while loading links: " + err);
      } finally {
        setLoadingLinks(false);
      }
    };

    loadLinks();
  }, [url])

  return { links, loadingLinks, error }
}

export default useLink;
