import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About LINQ</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                LINQ aims to revolutionize networking by making business card
                sharing instant, digital, and trackable. We believe in
                connecting people efficiently while respecting privacy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built with modern web technologies including Next.js,
                TypeScript, and Tailwind CSS, LINQ provides a fast, reliable,
                and beautiful experience across all devices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
