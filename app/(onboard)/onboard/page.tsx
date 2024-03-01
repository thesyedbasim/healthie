'use client';

import { useRouter } from 'next/navigation';

export default function OnboardPage() {
  const router = useRouter();

  function handleClick() {
    router.push('/');
  }

  return (
    <video
      autoPlay
      muted
      src="/onboard-video.mp4"
      className="h-screen"
      onClick={handleClick}
    ></video>
  );
}
