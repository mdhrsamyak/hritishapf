function Footer() {
  return (
    <div className="relative overflow-hidden bg-[#F8F8F8F7] text-black font-extrabold">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start  md:px-20 pb-10 h-full">
        <div>
          <img src="/hm.png" alt="hm" className="h-10 w-10 object-cover" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-[24px] font-light">
          <a
            href="https://www.instagram.com/hritisha__/"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/hritisha-manandhar-411994205/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <span className="hover:text-gray-400 cursor-default">
            hritisha.official@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
