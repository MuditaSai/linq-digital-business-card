'use client';

import { useCard } from '@/contexts/CardContext';
import CosmicNebulaMastercard from '@/components/ui/cursor-wander-card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSocialMediaError, getContactError } from '@/utils/urlValidation';
import { useState } from 'react';
import { Plus, X, Edit3, Save, User } from 'lucide-react';

export function InteractiveCardEditor() {
  const { cardData, updateCardData } = useCard();
  const [editMode, setEditMode] = useState<{
    field: string | null;
    isOpen: boolean;
  }>({ field: null, isOpen: false });

  const toggleEdit = (field: string) => {
    if (editMode.field === field && editMode.isOpen) {
      setEditMode({ field: null, isOpen: false });
    } else {
      setEditMode({ field, isOpen: true });
    }
  };

  const handleQuickEdit = (field: keyof typeof cardData, value: string) => {
    updateCardData(field, value);
  };

  const addCustomLink = () => {
    const currentLinks = cardData.customLinks || [];
    if (currentLinks.length < 3) {
      updateCardData('customLinks', [...currentLinks, { label: '', url: '' }]);
    }
  };

  const removeCustomLink = (index: number) => {
    const newCustomLinks = [...(cardData.customLinks || [])];
    newCustomLinks.splice(index, 1);
    updateCardData('customLinks', newCustomLinks);
  };

  const handleCustomLinkChange = (
    index: number,
    field: 'label' | 'url',
    value: string
  ) => {
    const newCustomLinks = [...(cardData.customLinks || [])];
    newCustomLinks[index] = {
      ...newCustomLinks[index],
      [field]: value,
    };
    updateCardData('customLinks', newCustomLinks);
  };

  // Validation errors
  const emailError = getContactError('email', cardData.email || '');
  const phoneError = getContactError('phone', cardData.phone || '');
  const linkedinError = getSocialMediaError(
    'linkedin',
    cardData.linkedin || ''
  );
  const githubError = getSocialMediaError('github', cardData.github || '');
  const twitterError = getSocialMediaError('twitter', cardData.twitter || '');
  const instagramError = getSocialMediaError(
    'instagram',
    cardData.instagram || ''
  );

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Interactive Cosmic Card */}
        <div className="flex-1 relative">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Your Digital Business Card
            </h2>
            <p className="text-muted-foreground">
              Click on any section below to edit directly
            </p>
          </div>

          <div className="relative">
            <CosmicNebulaMastercard
              cardholderName={cardData.name || 'Your Name Here'}
              logoText={{ topText: 'LINQ', bottomText: 'CARD' }}
              width="100%"
              height="320px"
              className="max-w-md mx-auto"
            />

            {/* Floating edit buttons */}
            <div className="absolute inset-0 max-w-md mx-auto">
              {/* Name edit button */}
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-4 left-4 z-10 opacity-80 hover:opacity-100"
                onClick={() => toggleEdit('name')}
              >
                <User className="h-3 w-3 mr-1" />
                Edit Name
              </Button>

              {/* Add quick actions */}
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 z-10 opacity-80 hover:opacity-100"
                onClick={() => toggleEdit('details')}
              >
                <Edit3 className="h-3 w-3 mr-1" />
                Edit Details
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Edit Panel */}
        <div className="flex-1 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="h-5 w-5" />
                Quick Edit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Info Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Basic Information
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={cardData.name}
                      onChange={(e) => handleQuickEdit('name', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Job Title
                      </label>
                      <Input
                        placeholder="Software Engineer"
                        value={cardData.jobTitle}
                        onChange={(e) =>
                          handleQuickEdit('jobTitle', e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Company
                      </label>
                      <Input
                        placeholder="Acme Corp"
                        value={cardData.company}
                        onChange={(e) =>
                          handleQuickEdit('company', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Bio / Tagline (250 chars)
                    </label>
                    <Textarea
                      placeholder="Passionate about building great products..."
                      value={cardData.bio}
                      onChange={(e) => handleQuickEdit('bio', e.target.value)}
                      maxLength={250}
                      className="resize-none"
                    />
                    <div className="text-xs text-muted-foreground text-right mt-1">
                      {cardData.bio?.length || 0}/250
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={cardData.email}
                      onChange={(e) => handleQuickEdit('email', e.target.value)}
                    />
                    {emailError && (
                      <p className="text-xs text-destructive mt-1">
                        {emailError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={cardData.phone}
                      onChange={(e) => handleQuickEdit('phone', e.target.value)}
                    />
                    {phoneError && (
                      <p className="text-xs text-destructive mt-1">
                        {phoneError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Website
                    </label>
                    <Input
                      type="url"
                      placeholder="https://johndoe.com"
                      value={cardData.website}
                      onChange={(e) =>
                        handleQuickEdit('website', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Location
                    </label>
                    <Input
                      placeholder="San Francisco, CA"
                      value={cardData.location}
                      onChange={(e) =>
                        handleQuickEdit('location', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Social Links</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      LinkedIn
                    </label>
                    <Input
                      type="url"
                      placeholder="https://www.linkedin.com/in/johndoe"
                      value={cardData.linkedin}
                      onChange={(e) =>
                        handleQuickEdit('linkedin', e.target.value)
                      }
                    />
                    {linkedinError && (
                      <p className="text-xs text-destructive mt-1">
                        {linkedinError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      GitHub
                    </label>
                    <Input
                      type="url"
                      placeholder="https://github.com/johndoe"
                      value={cardData.github}
                      onChange={(e) =>
                        handleQuickEdit('github', e.target.value)
                      }
                    />
                    {githubError && (
                      <p className="text-xs text-destructive mt-1">
                        {githubError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      X (Twitter)
                    </label>
                    <Input
                      type="url"
                      placeholder="https://x.com/johndoe"
                      value={cardData.twitter}
                      onChange={(e) =>
                        handleQuickEdit('twitter', e.target.value)
                      }
                    />
                    {twitterError && (
                      <p className="text-xs text-destructive mt-1">
                        {twitterError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Instagram
                    </label>
                    <Input
                      type="url"
                      placeholder="https://www.instagram.com/johndoe"
                      value={cardData.instagram}
                      onChange={(e) =>
                        handleQuickEdit('instagram', e.target.value)
                      }
                    />
                    {instagramError && (
                      <p className="text-xs text-destructive mt-1">
                        {instagramError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Custom Links */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Custom Links</h3>
                  {(!cardData.customLinks ||
                    cardData.customLinks.length === 0) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addCustomLink}
                      className="flex items-center gap-1"
                    >
                      <Plus className="h-3 w-3" />
                      Add Link
                    </Button>
                  )}
                </div>

                {cardData.customLinks?.map((link, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Link {index + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCustomLink(index)}
                        className="h-8 w-8 p-0"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input
                        placeholder="Label (e.g., Portfolio)"
                        value={link.label}
                        onChange={(e) =>
                          handleCustomLinkChange(index, 'label', e.target.value)
                        }
                      />
                      <Input
                        placeholder="URL"
                        type="url"
                        value={link.url}
                        onChange={(e) =>
                          handleCustomLinkChange(index, 'url', e.target.value)
                        }
                      />
                    </div>
                    {cardData.customLinks &&
                      cardData.customLinks.length < 3 &&
                      index === cardData.customLinks.length - 1 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={addCustomLink}
                          className="w-full"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add Another Link
                        </Button>
                      )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t">
                <Button
                  size="lg"
                  className="w-full"
                  disabled={!cardData.name.trim()}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Create My Card
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Your card updates in real-time as you type
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
