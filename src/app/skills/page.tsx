import Image from 'next/image';

export default function Skills() {
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
      
      {/* Skills Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h1>
      
      {/* Skills List with Progress Bars */}
      <div className="w-full max-w-lg">
        {[
          { skill: 'HTML', percentage: 90 },
          { skill: 'CSS', percentage: 85 },
          { skill: 'JAVASCRIPT', percentage: 80 },
          { skill: 'TYPESCRIPT', percentage: 95 },
          { skill: 'NEXTJS 14', percentage: 70 },
        ].map(({ skill, percentage }) => (
          <div className="mb-4" key={skill}>
            <div className="flex justify-between items-center">
              <p className="text-lg">{skill}</p>
              <span className="text-lg">{percentage}%</span>
            </div>
            <div className="h-2 bg-gray-300 rounded">
              <div
                className="h-full bg-blue-600 rounded"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}