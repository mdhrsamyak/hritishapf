import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => setOpen((prev) => !prev);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="fixed flex justify-center items-center top-2 left-2 z-1000 h-[50px] w-[50px]  rounded-r-full md:hidden">
        <button onClick={toggleSidebar} className="p-2 z-50">
          <div
            className={`w-6 h-0.5 bg-black transition-transform ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black my-1 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-transform ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`flex flex-col items-start gap-2 lg:gap-5 fixed top-15 left-0 px-3 lg:px-10 h-screen lg:opacity-30 hover:opacity-100
       transition-transform duration-500 z-1000 ${
         open ? "translate-x-0" : "-translate-x-full"
       } md:translate-x-0
      `}
      >
        <Link to={"/"}>
          <div
            className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white/30 backdrop-blur-[2px] border border-black/30 pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => navigate("/")}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
            >
              <path
                d="M29.5312 14.5833C29.5312 14.344 29.484 14.1069 29.3924 13.8857C29.3008 13.6646 29.1665 13.4636 28.9972 13.2944C28.828 13.1251 28.627 12.9908 28.4058 12.8992C28.1847 12.8076 27.9476 12.7604 27.7082 12.7604C27.4689 12.7604 27.2318 12.8076 27.0106 12.8992C26.7895 12.9908 26.5885 13.1251 26.4192 13.2944C26.25 13.4636 26.1157 13.6646 26.0241 13.8857C25.9325 14.1069 25.8853 14.344 25.8853 14.5833H29.5312ZM9.1145 14.5833C9.1145 14.0999 8.92244 13.6362 8.58058 13.2944C8.23871 12.9525 7.77505 12.7604 7.29158 12.7604C6.80811 12.7604 6.34445 12.9525 6.00258 13.2944C5.66072 13.6362 5.46866 14.0999 5.46866 14.5833H9.1145ZM29.3357 18.7892C29.6777 19.1311 30.1414 19.3232 30.6249 19.3232C31.1084 19.3232 31.5722 19.1311 31.9141 18.7892C32.256 18.4473 32.4481 17.9835 32.4481 17.5C32.4481 17.0165 32.256 16.5528 31.9141 16.2108L29.3357 18.7892ZM17.4999 4.37501L18.7891 3.08585C18.6198 2.91652 18.4188 2.78221 18.1976 2.69056C17.9764 2.59892 17.7393 2.55176 17.4999 2.55176C17.2605 2.55176 17.0234 2.59892 16.8022 2.69056C16.581 2.78221 16.38 2.91652 16.2107 3.08585L17.4999 4.37501ZM3.08575 16.2108C2.74384 16.5528 2.55176 17.0165 2.55176 17.5C2.55176 17.9835 2.74384 18.4473 3.08575 18.7892C3.42766 19.1311 3.89138 19.3232 4.37491 19.3232C4.85845 19.3232 5.32217 19.1311 5.66408 18.7892L3.08575 16.2108ZM10.2082 32.4479H24.7916V28.8021H10.2082V32.4479ZM29.5312 27.7083V14.5833H25.8853V27.7083H29.5312ZM9.1145 27.7083V14.5833H5.46866V27.7083H9.1145ZM31.9141 16.2108L18.7891 3.08585L16.2107 5.66418L29.3357 18.7892L31.9141 16.2108ZM16.2107 3.08585L3.08575 16.2108L5.66408 18.7892L18.7891 5.66418L16.2107 3.08585ZM24.7916 32.4479C26.0486 32.4479 27.2541 31.9486 28.143 31.0597C29.0318 30.1709 29.5312 28.9654 29.5312 27.7083H25.8853C25.8853 27.9984 25.7701 28.2766 25.565 28.4817C25.3599 28.6869 25.0817 28.8021 24.7916 28.8021V32.4479ZM10.2082 28.8021C9.91817 28.8021 9.63997 28.6869 9.43485 28.4817C9.22973 28.2766 9.1145 27.9984 9.1145 27.7083H5.46866C5.46866 28.9654 5.96801 30.1709 6.85686 31.0597C7.7457 31.9486 8.95123 32.4479 10.2082 32.4479V28.8021Z"
                fill="black"
              />
            </svg>
            <p
              className="
            font-bold
            opacity-0 invisible pointer-events-none                       
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
            >
              Home
            </p>
          </div>
        </Link>
        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white/30 backdrop-blur-[2px] border border-black/30 pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          <svg
            width="15"
            height="26"
            viewBox="0 0 25 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M12.5002 0.916992L12.6708 0.9272C12.9963 0.965589 13.2994 1.11252 13.5312 1.3443C13.763 1.57608 13.9099 1.87918 13.9483 2.2047L13.9585 2.37533V8.20866L13.9658 8.42741C14.018 9.12183 14.3169 9.77466 14.8085 10.2679C15.3001 10.7611 15.952 11.0621 16.6462 11.1166L16.8752 11.1253H22.7085L22.8791 11.1355C23.2046 11.1739 23.5077 11.3209 23.7395 11.5526C23.9713 11.7844 24.1182 12.0875 24.1566 12.413L24.1668 12.5837V25.7087C24.1669 26.8246 23.7405 27.8984 22.975 28.7103C22.2094 29.5222 21.1625 30.0109 20.0485 30.0764L19.7918 30.0837H5.2085C4.09256 30.0837 3.01879 29.6573 2.20687 28.8918C1.39494 28.1262 0.906256 27.0793 0.840788 25.9653L0.833496 25.7087V5.29199C0.833434 4.17606 1.2598 3.10228 2.02537 2.29036C2.79093 1.47844 3.83782 0.989752 4.95183 0.924284L5.2085 0.916992H12.5002Z"
              fill="black"
            />
            <path
              d="M22.7083 8.20882H16.875L16.8735 2.37402L22.7083 8.20882Z"
              fill="black"
            />
          </svg>

          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       v
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            Projects
          </p>
        </div>
        <a href="tel:+9779812345678" className="decoration-none">
          <div className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white/30 backdrop-blur-[2px] border border-black/30 pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer">
            <svg
              width="15"
              height="15"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.92517 0.823242H9.39538C9.61785 0.823242 9.83503 0.891085 10.018 1.01772C10.2009 1.14435 10.3408 1.32376 10.4191 1.53199L12.5425 7.17574C12.6124 7.36238 12.6301 7.56459 12.5935 7.76053L11.5289 13.4655C12.837 16.5397 14.9968 18.6062 18.577 20.4597L24.2135 19.366C24.4138 19.3274 24.6209 19.3455 24.8114 19.4185L30.4727 21.5768C30.6796 21.6556 30.8578 21.7954 30.9835 21.9777C31.1093 22.16 31.1768 22.3762 31.177 22.5976V27.8243C31.177 30.1955 29.0887 32.1191 26.6445 31.5868C22.1923 30.6185 13.9425 28.1553 8.16454 22.3774C2.62871 16.843 0.77371 9.19845 0.151002 5.06699C-0.20629 2.70741 1.68517 0.823242 3.92517 0.823242Z"
                fill="black"
              />
            </svg>

            <p
              className="
            font-bold
            opacity-0 invisible pointer-events-none                       v
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
            >
              Call
            </p>
          </div>
        </a>

        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white/30 backdrop-blur-[2px] border border-black/30 pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=hritisha.manandhar01@gmail.com&su=New%20Project%20Inquiry&body=Name%3A%0AOrganization%20Name%3A%0APhone%20Number%3A%0A%0AAbout%20the%20project%3A",
              "_blank"
            )
          }
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z"
              fill="black"
            />
          </svg>

          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       v
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            Email
          </p>
        </div>
        <div
          className="group flex justify-center gap-2 items-center relative h-16 w-16 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.4)] bg-white/30 backdrop-blur-[2px] border border-black/30 pointer-events-auto hover:w-40 px-2 transition-all duration-500 ease-in-out cursor-pointer"
          onClick={handleDownload}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
            absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
            opacity-100                                                
            transition-all duration-500 ease-in-out 
            group-hover:opacity-0 group-hover:scale-0"
          >
            <path
              d="M11.666 2.5V5.83333C11.666 6.05435 11.7538 6.26631 11.9101 6.42259C12.0664 6.57887 12.2783 6.66667 12.4993 6.66667H15.8327"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.166 17.5H5.83268C5.39065 17.5 4.96673 17.3244 4.65417 17.0118C4.34161 16.6993 4.16602 16.2754 4.16602 15.8333V4.16667C4.16602 3.72464 4.34161 3.30072 4.65417 2.98816C4.96673 2.67559 5.39065 2.5 5.83268 2.5H11.666L15.8327 6.66667V15.8333C15.8327 16.2754 15.6571 16.6993 15.3445 17.0118C15.032 17.3244 14.608 17.5 14.166 17.5Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16602 10.4165C9.16602 10.085 9.03432 9.76704 8.7999 9.53262C8.56548 9.2982 8.24754 9.1665 7.91602 9.1665C7.58449 9.1665 7.26655 9.2982 7.03213 9.53262C6.79771 9.76704 6.66602 10.085 6.66602 10.4165V12.9165C6.66602 13.248 6.79771 13.566 7.03213 13.8004C7.26655 14.0348 7.58449 14.1665 7.91602 14.1665C8.24754 14.1665 8.56548 14.0348 8.7999 13.8004C9.03432 13.566 9.16602 13.248 9.16602 12.9165M10.8327 9.1665L12.0827 14.1665L13.3327 9.1665"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p
            className="
            font-bold
            opacity-0 invisible pointer-events-none                       v
            max-w-0 overflow-hidden                                 
            transition-all duration-500 ease-in-out                 
            group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto 
            group-hover:max-w-full group-hover:scale-100                
          "
          >
            CV
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
