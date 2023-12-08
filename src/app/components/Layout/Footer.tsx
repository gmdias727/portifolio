const Footer = () => {
  return (
    <div className="flex">

      <div className="flex lg:pr-96 md:pr-48 sm:pr-16 font-medium ">
        <p className="p-2 m-2">Developed by Gabriel Mazieri</p>
      </div>
      
      <div className="flex justify-between font-medium">

          <button className="p-2 m-2">
            <a href="#">Linkedin</a>
          </button>

          <button className="p-2 m-2">
            <a href="#">X / Twitter</a>
          </button>

          <button className="p-2 m-2">
            <a href="#">Instagram</a>
          </button>

        </div>
      </div>
  )
}

export default Footer;
