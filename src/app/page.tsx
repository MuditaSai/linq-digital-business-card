import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
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

          <div className="max-w-md mx-auto mb-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl font-bold">
                    🚀
                  </span>
                </div>
                <CardTitle className="text-2xl">Ready to Launch</CardTitle>
                <CardDescription>
                  The foundation is set with a modern tech stack. We&apos;re
                  ready to build amazing digital business cards.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">
                  <p>✅ Next.js 15 with TypeScript</p>
                  <p>✅ Tailwind CSS + shadcn/ui</p>
                  <p>✅ ESLint + Prettier configured</p>
                  <p>✅ Husky pre-commit hooks</p>
                  <p>✅ Vercel deployment ready</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button className="w-full" size="lg">
                  Create Your Card
                </Button>
                <Button variant="outline" className="w-full">
                  View Examples
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  🎨 Beautiful Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose from professionally designed templates that make your
                  card stand out.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📱 Apple Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Seamlessly add your business card to Apple Wallet for instant
                  sharing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📊 Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track views and engagement with privacy-first analytics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
