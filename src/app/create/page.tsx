import { CardCreationForm } from '@/components/forms/CardCreationForm';
import { LivePreviewCard } from '@/components/preview/LivePreviewCard';
import { CardProvider } from '@/contexts/CardContext';

export default function CreateCardPage() {
  return (
    <CardProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="flex-1">
            <CardCreationForm />
          </div>

          {/* Live Preview Section */}
          <div className="flex-1">
            <div className="sticky top-24">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
                  <p className="text-sm text-muted-foreground">
                    Your card updates in real-time as you type
                  </p>
                </div>
                <LivePreviewCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardProvider>
  );
}
