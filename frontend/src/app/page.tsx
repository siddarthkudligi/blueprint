import Image from 'next/image'
import TextToSpeech from '../components/TextToSpeech'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center">Blueprint Educational Platform</h1>
        <p className="text-xl mt-4 text-center">Empowering students with professional skills and real-world experience</p>
      </div>

      <TextToSpeech />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            BPC Adults
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Professional development programs for adults.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            BPC Schooling Club
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Educational programs for school students.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            White Noise Academy
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Specialized training programs.
          </p>
        </div>
      </div>
    </main>
  )
}
