const Landing = () => {
  return (
    <header className="h-[90vh] bg-green-900 bg-cover bg-top relative">
      <div className="w-80 mx-auto absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-gray-300 uppercase backface-hidden mb-24">
          <div className="text-6xl font-normal tracking-widest animate-moveInLeft duration-1000 transition-ease-out">
            Deming Lin
          </div>
          <span
            className="heading-primary--sub txt-type"
            data-wait="3000"
            data-words='["Software Engineer", "Download my resume below!"]'
          ></span>
        </div>

        <a
          href="/documents/Lin_Deming.pdf"
          target="_blank"
          className="btn btn--white btn--animated"
        >
          <i className="fas fa-cloud"></i> Resume
        </a>
      </div>
    </header>
  );
};

export default Landing;
