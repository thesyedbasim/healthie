'use client';

import { Card, CardContent } from '@/components/ui/card';
import HomeIcon from '../mobile-nav-icons/HomeIcon';
import SettingsIcon from '../mobile-nav-icons/SettingsIcon';
import LocationIcon from '../mobile-nav-icons/LocationIcon';
import Link from 'next/link';
import ChatBotIcon from '../mobile-nav-icons/ChatBotIcon';

export default function MobileNavBar() {
  return (
    <Link href="https://mediafiles.botpress.cloud/89c28c88-0000-4348-a46a-9eee34c69fda/webchat/bot.html">
      <Card className="w-full pt-6 pb-4 px-4 rounded-t-xl bg-primary">
        <CardContent className="w-full flex justify-between items-center">
          <p className="text-white text-2xl font-bold">Dr. Healthie</p>
          <ChatBotIcon />
        </CardContent>
      </Card>
    </Link>
  );
}
