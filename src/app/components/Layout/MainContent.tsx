'use client'
import Gallery from "../Gallery";

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 w-8/12 place-items-center text-center mx-auto my-auto">

      {/* Section: Who am I  */}
      <section id="who-am-i" className="pt-4 pb-2 grid grid-cols-1 h-screen">
        <h1 className="mt-16 font-bold text-3xl">Who am I</h1>
        <p>
          Hey! My name is Gabriel and I'm a software developer with passion for backend development and functional programming. I'm a senior student at <a className="font-bold underline" href="https://www.fatec.edu.br/">FATEC</a> university in <a className="font-bold underline" href="https://www.fatec.edu.br/cursos/analise-e-desenvolvimento-de-sistemas/">Analysis and Systems Development</a>
        </p>
        <br />
        <p>
          Outside computer's world I'm building muscles at gym 6 days a week and hanging with my friends and family once in a while.
        </p>
      </section>

      <br />

      {/* Section: TL;DR */}
      <section id="tldr" className="pt-4 pb-2 grid grid-cols-1 h-screen">
        <h1 className="mt-16 font-bold text-3xl">TL;DR</h1>
        <ul className="list-disc list-inside">
          <li>My first time college was in 2019 where I started a Computer Science degree (unfinished)</li>
          <li>Later in 2020 I enrolled to FATEC within entrance exam to a InfoSec course</li>
          <li>Then changed to Analysis and Systems Development in 2021 where I'm at right now</li>
          <li>Contributed for 3 years for a community called <a className="font-bold underline" href="https://heartdevs.com/">He4rt Developers</a> which one of these three years I was major contributor working as a co-leader (it means I love tech communities)</li>
        </ul>
      </section>

      {/* Section: Experience  */}
      <section id="experience" className="pt-4 pb-2 h-screen">
        <h1 className="mt-16 font-bold text-3xl">Experience</h1>
        <p>
          I'm doing production software since january 2022 so It's around 1 year's now
        </p>
      </section>

      {/* Section: Stack  */}
      <section id="stack" className="pt-4 pb-2 h-screen">
        <h1 className="mt-16 font-bold text-3xl">Stack</h1>
        <p>
          I'm doing production software since january 2022 so It's around 1 year's now
        </p>
        <Gallery></Gallery>

      </section>

      {/* Section: Contributions  */}
      <section id="contributions" className="pt-4 pb-2 h-screen">
        <h1 className="mt-16 font-bold text-3xl">Contributions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident fugiat cum dolorum qui sed ex nostrum itaque exercitationem dolores ratione repellat harum, modi perspiciatis. Culpa velit iure possimus quas alias!
        </p>
      </section>

      {/* Section: Resume  */}
      <section id="resume" className="pt-4 pb-2 h-screen">
        <h1 className="mt-16 font-bold text-3xl">Resume</h1>
        <p>Check out my resume below:</p>
        <button>
          <a href="#">Download</a>
        </button>
      </section>
    </div>
  )
}

export default MainContent
