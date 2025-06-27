import { CardCreationForm } from '@/components/forms/CardCreationForm';

export default function CreateCardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="flex-1">
          <CardCreationForm />
        </div>

        {/* Preview Section - Placeholder for LINQ-5 */}
        <div className="flex-1">
          <div className="sticky top-24">
            <div className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-lg font-semibold">Live Preview</h3>
                <p className="text-muted-foreground max-w-sm">
                  Your card preview will appear here as you fill out the form.
                  Real-time updates coming in LINQ-5!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
