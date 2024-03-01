'use client';

import { Card, CardContent } from '@/components/ui/card';
import HomeIcon from '../mobile-nav-icons/HomeIcon';
import SettingsIcon from '../mobile-nav-icons/SettingsIcon';

export default function MobileNavBar() {
  return (
    <Card className="w-full pt-6 pb-4 px-4">
      <CardContent className="w-full flex justify-between">
        <HomeIcon />
        <HomeIcon />
        <SettingsIcon />
      </CardContent>
    </Card>
  );
}
