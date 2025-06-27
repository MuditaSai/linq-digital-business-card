'use client';

import { useCard } from '@/contexts/CardContext';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Calendar,
  ExternalLink,
} from 'lucide-react';

export function LivePreviewCard() {
  const { cardData } = useCard();

  const hasContent = cardData.name.trim() !== '';

  if (!hasContent) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-muted-foreground">
                Your Card Preview
              </h3>
              <p className="text-sm text-muted-foreground">
                Start by entering your name to see your card come to life!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const socialLinks = [
    { platform: 'LinkedIn', url: cardData.linkedin, icon: Linkedin },
    { platform: 'GitHub', url: cardData.github, icon: Github },
    { platform: 'Twitter', url: cardData.twitter, icon: Twitter },
    { platform: 'Instagram', url: cardData.instagram, icon: Instagram },
  ].filter((link) => link.url && link.url.trim() !== '');

  const contactLinks = [
    { type: 'email', value: cardData.email, icon: Mail },
    { type: 'phone', value: cardData.phone, icon: Phone },
    { type: 'website', value: cardData.website, icon: Globe },
    { type: 'location', value: cardData.location, icon: MapPin },
  ].filter((contact) => contact.value && contact.value.trim() !== '');

  const customLinks =
    cardData.customLinks?.filter(
      (link) => link.label.trim() !== '' && link.url.trim() !== ''
    ) || [];

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-2 border-border/20">
      <CardHeader className="text-center space-y-4 pb-4">
        {/* Profile Image Placeholder */}
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto flex items-center justify-center border-2 border-primary/10">
          <span className="text-2xl font-bold text-primary">
            {cardData.name.charAt(0).toUpperCase()}
          </span>
        </div>

        {/* Name and Title */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-foreground">{cardData.name}</h2>
          {cardData.jobTitle && (
            <p className="text-sm font-medium text-primary">
              {cardData.jobTitle}
            </p>
          )}
          {cardData.company && (
            <p className="text-sm text-muted-foreground">{cardData.company}</p>
          )}
        </div>

        {/* Bio */}
        {cardData.bio && (
          <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
            {cardData.bio}
          </p>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Contact Information */}
        {contactLinks.length > 0 && (
          <div className="space-y-3">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;
              let href = '';

              if (contact.type === 'email') {
                href = `mailto:${contact.value}`;
              } else if (contact.type === 'phone') {
                href = `tel:${contact.value}`;
              } else if (contact.type === 'website') {
                href = contact.value || '';
              } else {
                // Location - no link
                return (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground break-all">
                      {contact.value}
                    </span>
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={href}
                  target={contact.type === 'website' ? '_blank' : undefined}
                  rel={
                    contact.type === 'website'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground break-all hover:text-primary">
                    {contact.value}
                  </span>
                </a>
              );
            })}
          </div>
        )}

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 h-8 px-3"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-3 w-3" />
                      <span className="text-xs">{social.platform}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {/* Calendar Link */}
        {cardData.calendarLink && (
          <Button className="w-full" variant="outline" asChild>
            <a
              href={cardData.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book a Meeting
            </a>
          </Button>
        )}

        {/* Custom Links */}
        {customLinks.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Links
            </h4>
            <div className="space-y-2">
              {customLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-between h-9"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm">{link.label}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <div className="flex h-4 w-4 items-center justify-center rounded bg-primary text-primary-foreground">
              <span className="text-xs font-bold">L</span>
            </div>
            <span>Created with LINQ</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
