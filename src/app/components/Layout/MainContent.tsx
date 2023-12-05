'use client'
import Gallery from "../Gallery";

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 w-6/12 justify-center text-center items-center">

      <Gallery></Gallery>

      {/* Section: Who am I  */}
      <section className="pt-4 pb-2 grid grid-cols-1">
        <h1 className="font-bold text-3xl select-none">Who am I</h1>

        <p>
          Hey! My name is Gabriel and I'm a software developer with passion for backend development and functional programming. I'm a senior student at <a className="font-bold underline" href="https://www.fatec.edu.br/">FATEC</a> in <a className="font-bold underline" href="https://www.fatec.edu.br/cursos/analise-e-desenvolvimento-de-sistemas/">Analysis and Systems Development</a>
        </p>
        <br />
        <p>
          Outside computer's world I'm building muscles at gym 6 days a week and hanging with my friends and family once in a while.
        </p>
        <br />
        <h1 className="font-bold text-3xl select-none">TL;DR</h1>
        <ul className="list-disc list-inside">
          <li>My first time college was in 2019 where I started a Computer Science degree (unfinished)</li>
          <li>Later in 2020 I enrolled to FATEC within entrance exam to a InfoSec course</li>
          <li>Then changed to Analysis and Systems Development in 2021 where I'm at right now</li>
          <li>Contributed for 3 years for a community called <a className="font-bold underline" href="https://heartdevs.com/">He4rt Developers</a> which one of these three years I was major contributor working as a co-leader</li>
        </ul>
      </section>

      {/* Section: Experience  */}
      <section className="pt-4 pb-2">
        <h1 className="font-bold text-3xl select-none">Experience</h1>
        <p>
          I'm doing production software since january 2022 so It's around 1 year's now
        </p>
      </section>

      {/* Section: Stack  */}
      <section className="pt-4 pb-2">
        <h1 className="font-bold text-3xl select-none">Stack</h1>
        <p>
          I'm doing production software since january 2022 so It's around 1 year's now
        </p>
        {/* <img src={data.stack[0].icon} alt={data.stack[0].alt} /> */}

      </section>

      {/* Section: Open Source Contributions  */}
      <section className="pt-4 pb-2">
        <h1 className="font-bold text-3xl select-none">Open Source Contributions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident fugiat cum dolorum qui sed ex nostrum itaque exercitationem dolores ratione repellat harum, modi perspiciatis. Culpa velit iure possimus quas alias!
        </p>
      </section>

      {/* Section: Resume  */}
      <section className="pt-4 pb-2">
        <h1 className="font-bold text-3xl select-none">Resume</h1>
        <p>Check out my resume below:</p>
        <button>
          <a href="#">Download</a>
        </button>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`)
  console.log("response:", response);

  const data = await response.json();
  console.log("data:", data);

  return {
    props: {
      data,
    },
  };
}

export default MainContent
