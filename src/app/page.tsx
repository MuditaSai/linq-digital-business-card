export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            LINQ
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Digital Business Card
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Create beautiful, shareable digital business cards that work
            seamlessly with Apple Wallet. Connect with others instantly and
            track your networking success.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We&apos;re building something amazing. The foundation is set,
                and we&apos;re ready to create digital business cards that will
                revolutionize networking.
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
              <p>✅ Next.js 14+ with TypeScript</p>
              <p>✅ Tailwind CSS for styling</p>
              <p>✅ ESLint + Prettier configured</p>
              <p>✅ Husky pre-commit hooks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
