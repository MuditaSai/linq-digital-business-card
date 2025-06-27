import { InteractiveCardEditor } from '@/components/interactive/InteractiveCardEditor';
import { CardProvider } from '@/contexts/CardContext';

export default function Home() {
  return (
    <CardProvider>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              LINQ
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Digital Business Card
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Create beautiful, shareable digital business cards instantly.
              Start editing your card below and watch it come to life in
              real-time.
            </p>
          </div>

          {/* Interactive Card Editor */}
          <InteractiveCardEditor />
        </div>

        {/* Features Section */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose LINQ?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional digital business cards with modern features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Interactive Design
                </h4>
                <p className="text-sm text-muted-foreground">
                  Edit your card directly and see changes in real-time with our
                  cosmic design.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Apple Wallet Ready
                </h4>
                <p className="text-sm text-muted-foreground">
                  Add your business card to Apple Wallet for instant sharing and
                  easy access.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Smart Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Track who views your card and which links they click with
                  privacy-first analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardProvider>
  );
}
