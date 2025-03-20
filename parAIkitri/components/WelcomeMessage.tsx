export default function WelcomeMessage() {
    return (
      <div className="flex flex-col items-center justify-center h-full mt-10">
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-inset ring-gray-200 px-6 py-5 max-w-lg w-full">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Hai, saya Paraikitri T. Simbolon! 👋
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Saya bisa membantu you:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Memahami dunia lewat kacamata saya</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>melihat karya saya</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Melirik riset saya</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Mengintip jurnal saya</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Rekomendasi bacaan saya</span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Tanyakan saya tentang apa saja! Dengan senang hati akan saya coba jawab.
          </p>
        </div>
      </div>
    );
  }
  