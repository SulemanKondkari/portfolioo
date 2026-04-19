import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsIntro } from "@/components/projects-intro";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { Contact2 } from "@/components/ui/contact-2";
import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";
import { Footer } from "@/components/ui/modem-animated-footer";
import { HackathonSection } from "@/components/hackathon-section";




export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-red-500/10 selection:text-red-600">

      <AnimatedNavFramer />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[90vh] md:min-h-screen" aria-label="Hero Section">
        {/* Background handling: Video for Desktop, Solid Color fallback for Mobile */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Desktop Video */}
          <div className="hidden md:block absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-100 contrast-[1.1]"
            >
              <source src="/animate_this_into_202604151849.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-white/2" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">

          <h1 
            className="animate-fade-rise text-6xl sm:text-8xl md:text-9xl leading-[0.95] tracking-[-3.46px] font-bold font-display uppercase text-white md:text-black"
          >
            Suleman <span className="text-red-600">Kondkari.</span> <br />
            <span className="text-red-600 italic">Designing</span> the <em className="not-italic text-red-600">Future.</em>
          </h1>
          
          <p className="animate-fade-rise-delay text-red-600 text-xl sm:text-2xl md:text-3xl max-w-4xl mt-12 leading-tight font-bold font-body italic opacity-90">
            <span className="text-white md:text-black">The official portfolio of </span> Suleman Kondkari, <span className="text-neutral-400 md:text-neutral-700">specializing in high-performance digital architecture and </span> cinematic UX.
          </p>

          <div className="animate-fade-rise-delay-2 mt-20">
            <button className="liquid-glass rounded-full px-14 py-5 text-base text-white md:text-black bg-red-600/10 border-red-600/20 hover:scale-[1.03] transition-transform cursor-pointer font-bold backdrop-blur-md uppercase tracking-widest">
              Begin Journey
            </button>
          </div>
        </div>
        </section>

      {/* About Section */}
      <section id="about" aria-label="About Me">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services" aria-label="My Services">
        <ServicesSection />
      </section>

      {/* Projects Intro Section */}
      <section id="projects" aria-label="My Projects">
        <ProjectsIntro />
      </section>

      {/* Hackathon Section */}
      <section id="hackathons" aria-label="Hackathons & Achievements">
        <HackathonSection />
      </section>

      {/* Connect Section */}
      <section id="connect" aria-label="Connect With Me">
        <MultiOrbitSemiCircle />
      </section>

      {/* Contact Section */}
      <section id="contact" aria-label="Contact Form">
        <Contact2 />
      </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>



  );
}
