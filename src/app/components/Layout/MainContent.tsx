'use client'
import Contributions from "../Contributions";
import Experience from "../Experience";
import Gallery from "../Gallery";

const MainContent = () => {
  return (
    <div className="grid grid-cols-1 grid-flow-row place-items-center mx-auto my-auto">

      {/* Intro */}
      {/* Section: Who am I  */}
      <section id="who-am-i" className="w-full">
        <div className="my-5">
          <h1 className="underline decoration-1 underline-offset-2 font-light text-4xl">Gabriel Mazieri</h1>
        </div>
        <div id="profession" className="my-5">
          <h1>Software Engineer</h1>
        </div>
        <div id="contact">
          <ul className="pl-5 list-disc">
            <li><a className="hover:bg-sky-200 hover:font-medium" href="mailto:gabrieldias7200@gmail.com">gabrieldias7200@gmail.com</a></li>
            <li><a className="hover:bg-sky-200 hover:font-medium" href="https://github.com/gmdias727">https://github.com/gmdias727</a></li>
            <li><a className="hover:bg-sky-200 hover:font-medium" href="https://www.linkedin.com/in/gmdias0/">https://www.linkedin.com/in/gmdias0/</a></li>
          </ul>
        </div>
        {/* <p>
          Hey! My name is Gabriel and I&apos;m a software developer with passion for backend development and functional programming. I&apos;m a senior student at <a className="font-bold underline" href="https://www.fatec.edu.br/">FATEC</a> university in <a className="font-bold underline" href="https://www.fatec.edu.br/cursos/analise-e-desenvolvimento-de-sistemas/">Analysis and Systems Development</a>
        </p>
        <p>
          Outside computer&apos;s world I&apos;m building muscles at gym 6 days a week and hanging with my friends and family once in a while.
        </p> */}
      </section>

      {/* First section */}
      {/* Section: TL;DR */}
      <section id="tldr" className="w-full">
        <div className="my-5">
          <h1 className="underline decoration-1 underline-offset-2 font-light text-4xl">TL;DR</h1>
        </div>
        <div>
          <ul className="pl-5 list-disc">
            <li>My first time college was in 2019 where I started a Computer Science degree (unfinished).</li>
            <li>Later in 2020 I enrolled to FATEC within entrance exam to a InfoSec course.</li>
            <li>Then changed to Analysis and Systems Development in 2021 where I&apos;m at right now.</li>
            <li>Contributed for 3 years for a tech community which one of these three years I was major contributor working as a co-leader (it means I love tech communities).</li>
            <li>I&apos;m not a designer so I just made this page look enough informative about my professional profile.</li>
          </ul>
        </div>
      </section>

      {/* Section: Experience  */}
      <section id="experience" className="w-full">
        <div className="my-5">
          <h1 className="underline decoration-1 underline-offset-2 font-light text-4xl">Experience</h1>
        </div>

        <Experience></Experience>
      </section>

      {/* Section: Stack  */}
      <section id="stack" className="w-full">
        <div className="my-5">
          <h1 className="underline decoration-1 underline-offset-2 font-light text-4xl">Stack</h1>
        </div>
        <Gallery></Gallery>
      </section>

      {/* Section: Contributions  */}
      <section id="contributions" className="w-full mb-48">
        <div className="my-5">
          <h1 className="underline decoration-1 underline-offset-2 font-light text-4xl">Open Source Contributions</h1>
        </div>

        <Contributions></Contributions>
      </section>
    </div>
  )
}

export default MainContent
