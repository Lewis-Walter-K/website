function Info() {
  return (
    <section className="section-container">
      <div className="main-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="teal-divider"></div>
          <p className="paragraph">
            VGU Career Fair and Industry Exploration Day 2025 is a flagship event
            connecting students and industry leaders to foster collaboration,
            innovation, and career exploration. CFIE25 aims to achieve the following
            objectives:
          </p>
          <ul className="list">
            <li>Connect VGU students with industry partners, enabling students to explore potential career paths and internships.</li>
            <li>Provide industry partners a platform to showcase their companies, technologies, internships, and career opportunities in various fields.</li>
            <li>Build and strengthen partnerships between VGU and relevant industries, fostering future collaborations and knowledge exchange.</li>
            <li>Showcase VGU as a leading institution for industry-ready graduates, especially in fields that bridge German and Vietnamese professional expertise.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2 className="heading">
            INFORMATION ABOUT THE EVENT
          </h2>
          <div className="text-container">
            <p className="px-8 mt-4 lg:p-0 text-base lg:text-3xl">In <span className="event-year">2025</span></p>
            <p className="px-8 mt-2 lg:p-0 text-lg lg:text-2xl">a promising and impressing <span className="description">CFIE</span></p>
          <div className="right-section-content-Khang">
            <div className="flex gap-10 font-bold text-xs md:text-xl">
              <p className="min-w-[120px] text-teal-800">Participants</p>
              <p className="font-bold">{'>'}1000 Students <br /> 25+ Industries</p>
            </div>

            <div className="flex gap-10 font-bold text-xs md:text-xl">
              <p className="min-w-[120px] text-teal-800">Venue</p>
              <p className="font-bold">VGU Convention Hall</p>
            </div>

            <div className="flex gap-10 font-bold text-xs md:text-xl">
              <p className="min-w-[120px] text-teal-800">Date</p>
              <p className="font-bold">09 April 2025</p>
            </div>

            <div className="flex gap-10 font-bold text-xs md:text-xl">
              <p className="min-w-[120px] text-teal-800">Time</p>
              <p className="font-bold">8:00 - 14:00</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;