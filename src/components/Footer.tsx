import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 mt-8">
      <p className="text-center mb-4">Stay Connected with My Work:</p>

      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 mb-4">
        {/* Email */}
        <a
          href="mailto:mahnoorjavaid342@gmail.com"
          className="flex items-center text-gray-300 hover:text-white transition duration-200 mb-2 sm:mb-0"
        >
          <span className="mr-2">
            <AiOutlineMail />
          </span>
          Email
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MahnoorJavaidAkhtar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition duration-200 mb-2 sm:mb-0"
        >
          <span className="mr-2">
            <AiFillGithub />
          </span>
          Github
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mahnoor-javaid-a9687a283/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition duration-200 mb-2 sm:mb-0"
        >
          <span className="mr-2">
            <AiFillLinkedin />
          </span>
          Linkedin
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mahnoor._.javaid45?igsh=MWRxZ3hmczF1MHc4eg=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition duration-200 mb-2 sm:mb-0"
        >
          <span className="mr-2">
            <AiFillInstagram />
          </span>
          Instagram
        </a>
      </div>

      <p className="text-center text-sm text-gray-400">
        © 2024 Mahnoor Javaid. All Rights Reserved.
      </p>
    </div>
  );
}