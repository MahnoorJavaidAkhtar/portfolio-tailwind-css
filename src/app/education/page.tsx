import Image from 'next/image';

export default function Education() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#0f0715] text-white p-4">
      {/* Profile Picture */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden mb-6 border-4 border-white">
        <Image
          src="/profile.jpg" // Replace with the actual path to your profile picture
          alt="Profile Picture"
          width={128} // Adjust the width as needed
          height={128} // Adjust the height as needed
          className="object-cover"
        />
      </div>

      {/* Education Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">My Education</h1>

      {/* Education Details */}
      <ul className="mt-4 space-y-2 text-base md:text-lg text-center">
        <li>Completed matriculation in Bio Science.</li>
        <li>Completed Intermediate in Commerce.</li>
        <li>Completed Graduation in ADA.</li>
        <li>Artificial Intelligence, Web 3.0 & Metaverse (Continuing from GIAIC).</li>
        <li>Various Online Courses on E-Commerce.</li>
      </ul>
    </section>
  );
}
