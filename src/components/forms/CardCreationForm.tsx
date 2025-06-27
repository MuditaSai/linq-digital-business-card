'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CardData } from '@/types/card';

export function CardCreationForm() {
  const [formData, setFormData] = useState<CardData>({
    name: '',
    profileImage: '',
    jobTitle: '',
    company: '',
    bio: '',
    phone: '',
    email: '',
    website: '',
    location: '',
    linkedin: '',
    github: '',
    twitter: '',
    instagram: '',
    calendarLink: '',
    customLinks: [
      { label: '', url: '' },
      { label: '', url: '' },
      { label: '', url: '' },
    ],
    templateId: 'default',
  });

  const handleInputChange = (field: keyof CardData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCustomLinkChange = (
    index: number,
    field: 'label' | 'url',
    value: string
  ) => {
    const newCustomLinks = [...(formData.customLinks || [])];
    newCustomLinks[index] = {
      ...newCustomLinks[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      customLinks: newCustomLinks,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement card creation logic in LINQ-5
    console.log('Card data:', formData);
  };

  return (
    <div className="w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Your Digital Business Card</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required Fields */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>

              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title / Role</Label>
                <Input
                  id="jobTitle"
                  type="text"
                  placeholder="Software Engineer"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    handleInputChange('jobTitle', e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">
                  Short Bio / Tagline{' '}
                  <span className="text-sm text-muted-foreground">
                    (max 250 characters)
                  </span>
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Passionate about building great products and solving complex problems."
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  maxLength={250}
                  className="resize-none"
                />
                <div className="text-xs text-muted-foreground text-right">
                  {formData.bio?.length || 0}/250
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://johndoe.com"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange('website', e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="San Francisco, CA"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange('location', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Social & Professional Links
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/johndoe"
                    value={formData.linkedin}
                    onChange={(e) =>
                      handleInputChange('linkedin', e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    type="url"
                    placeholder="https://github.com/johndoe"
                    value={formData.github}
                    onChange={(e) =>
                      handleInputChange('github', e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">X (Twitter) Profile</Label>
                  <Input
                    id="twitter"
                    type="url"
                    placeholder="https://x.com/johndoe"
                    value={formData.twitter}
                    onChange={(e) =>
                      handleInputChange('twitter', e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram Profile</Label>
                  <Input
                    id="instagram"
                    type="url"
                    placeholder="https://instagram.com/johndoe"
                    value={formData.instagram}
                    onChange={(e) =>
                      handleInputChange('instagram', e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calendarLink">Booking / Calendar Link</Label>
                <Input
                  id="calendarLink"
                  type="url"
                  placeholder="https://calendly.com/johndoe"
                  value={formData.calendarLink}
                  onChange={(e) =>
                    handleInputChange('calendarLink', e.target.value)
                  }
                />
              </div>
            </div>

            {/* Custom Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Custom Links{' '}
                <span className="text-sm font-normal text-muted-foreground">
                  (up to 3)
                </span>
              </h3>

              {formData.customLinks?.map((link, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor={`customLabel${index}`}>
                      Link {index + 1} Label
                    </Label>
                    <Input
                      id={`customLabel${index}`}
                      type="text"
                      placeholder="My Portfolio"
                      value={link.label}
                      onChange={(e) =>
                        handleCustomLinkChange(index, 'label', e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`customUrl${index}`}>
                      Link {index + 1} URL
                    </Label>
                    <Input
                      id={`customUrl${index}`}
                      type="url"
                      placeholder="https://portfolio.com"
                      value={link.url}
                      onChange={(e) =>
                        handleCustomLinkChange(index, 'url', e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!formData.name.trim()}
              >
                Create My Card
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Only your name is required. You can add more details to make
                your card shine!
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
