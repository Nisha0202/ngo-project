"use client";

export default function Footer() {
  return (
    <footer className="bg-cyan-800 text-gray-100 mt-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h6 className="text-lg font-medium mb-3  font-metro">Services</h6>
          <ul className="space-y-2 text-sm ">
            {["Branding", "Design", "Marketing", "Advertisement", "Press Kit"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-medium mb-3 font-metro">Company</h6>
          <ul className="space-y-2 text-sm ">
            {["About Us", "Contact", "Jobs", "Blog", "Press Kit"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="text-lg font-medium mb-3 font-metro">Support</h6>
          <ul className="space-y-2 text-sm ">
            {["FAQs", "Help Center", "Community", "Guides", "Contact Support"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-300 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
<div className="flex flex-col items-center justify-center gap-4">
  <h6 className="text-lg font-medium mb-1 font-metro">Follow Us</h6>
  <div className="flex gap-5">
    {/* Twitter */}
    <a
      href="#"
      aria-label="Twitter"
      className="hover:text-blue-300 transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.388 4.482A13.944 13.944 0 0 1 1.671 3.149a4.918 4.918 0 0 0 1.523 6.574A4.902 4.902 0 0 1 .964 9.1v.062a4.919 4.919 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 3.419A9.868 9.868 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="#"
      aria-label="YouTube"
      className="hover:text-blue-300 transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.03 5.815 0 12c.03 6.185.488 8.55 4.385 8.816 3.6.246 11.626.246 15.23 0 3.897-.266 4.356-2.63 4.385-8.816-.029-6.185-.488-8.55-4.385-8.816zM9 16.001v-8l8 3.993-8 4.007z" />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="#"
      aria-label="Facebook"
      className="hover:text-blue-300 transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
      </svg>
    </a>
  </div>
</div>

      </div>

      {/* Divider */}
      <div className="border-t border-blue-600/50" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-semibold text-white">PawsRescue</span> <br />
          Providing reliable tech since 1992
        </p>

        <ul className="flex flex-wrap justify-center gap-5">
          {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}



