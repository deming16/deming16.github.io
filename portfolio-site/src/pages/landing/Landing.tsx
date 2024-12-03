import WhiteButton from "../../components/WhiteButton";

const Landing = () => {
  return (
    <header className="h-[90vh] bg-[#2e3830] bg-cover bg-top relative">
      <div className="w-[80%] mx-auto absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-gray-300 uppercase backface-hidden mb-24">
          <div className="block text-[6rem] font-[400] tracking-[3.5rem] animate-[moveInLeft_1s_ease-out] sm:text-[5rem] sm:tracking-[1rem]">
            Deming Lin
          </div>
          <div
            className="inline-block text-[1.5rem] font-bold tracking-[1.75rem] animate-[moveInRight_1s_ease-out] sm:tracking-[0.3rem] txt-type"
            data-wait="3000"
            data-words='["Software Engineer", "Download my resume below!"]'
          ></div>
        </div>

        <WhiteButton
          text={
            <>
              <i className="fas fa-cloud"></i> Resume
            </>
          }
        />
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
