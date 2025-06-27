import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Card Examples</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Explore different card styles and templates that will be available in
          LINQ-6.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example cards placeholders */}
          {[
            'Professional',
            'Creative',
            'Tech',
            'Corporate',
            'Minimalist',
            'Bold',
          ].map((style, index) => (
            <Card key={index} className="h-64">
              <CardHeader>
                <CardTitle className="text-lg">{style} Style</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Template preview coming soon in LINQ-6
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild size="lg">
            <Link href="/create">Start Creating Your Card</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
