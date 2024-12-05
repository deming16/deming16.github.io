import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhiteButton from "../../components/WhiteButton";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const openPDF = () => {
    const pdfWindow = window.open("Lin_Deming.pdf");
    const title = "Deming Lin - Online Resume";
    const URI = "Lin_Deming.pdf";
    const html = `
      <html>
        <head>
          <title>${title}</title>
          <link rel="icon" href=${process.env.PUBLIC_URL + "/icon.png"} />
        </head>
        <body style="margin:0">
          <embed width="100%" height="100%" src=${process.env.PUBLIC_URL + "/Lin_Deming.pdf"} type="application/pdf">
        </body>
      </html>
    `;

    pdfWindow?.document.write(html);
    pdfWindow?.document.close();
    pdfWindow?.history.pushState(null, "", URI);
  };

  return (
    <header
      id="home"
      className="relative h-[90vh] bg-[#2e3830] bg-cover bg-top"
    >
      <div className="absolute left-[50%] top-[40%] mx-auto w-[80%] -translate-x-1/2 -translate-y-1/2 transform text-center">
        <div className="backface-hidden mb-24 uppercase text-[#e3d7c4]">
          <div className="block animate-[moveInLeft_1s_ease-out] text-[5rem] font-[400] tracking-[1rem] sm:text-[6rem] sm:tracking-[3.5rem]">
            Deming Lin
          </div>
          <span
            className="txt-type inline-block animate-[moveInRight_1s_ease-out] text-[1.5rem] font-bold tracking-[1.75rem] sm:tracking-[1.5rem]"
            data-wait="3000"
            data-words='["Software Engineer", "Download my resume below!"]'
          ></span>
        </div>

        <WhiteButton
          classes="animate-moveInBottom"
          onClick={openPDF}
          text={
            <>
              <FontAwesomeIcon icon={faCloud} /> Resume
            </>
          }
        />
      </div>
    </header>
  );
};

export default Landing;
