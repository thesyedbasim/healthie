import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="bg-primary pb-12 rounded-b-2xl pt-12 px-8">
        <h1 className="text-white text-3xl font-bold mb-4">
          <span className="text-xl">Hello</span>
          <br /> Syed Basim👋
        </h1>
        <img src="/ads/volini.jpg" alt="yakult ad" className="rounded-xl" />
      </div>
      <div className="px-8 grid grid-cols-2 grid-rows-2 w-full gap-6 mt-8">
        <Link href="https://www.google.com/maps/search/hospitals+near+me/@13.1786687,77.4966348,13z/data=!3m1!4b1?entry=ttu">
          <div className="bg-violet-200 px-6 py-6 flex justify-between items-center flex-col rounded-md space-y-4">
            <img
              src="/icons-2/hospital-building.png"
              alt="hospital"
              className="w-16 h-16"
            />
            <p className="w-full text-center font-bold text-lg">Hospitals</p>
          </div>
        </Link>
        <Link href="/journals">
          <div className="bg-violet-200 px-6 py-6 flex justify-between items-center flex-col rounded-md space-y-4">
            <img src="/icons-2/book.png" alt="journal" className="w-16 h-16" />
            <p className="w-full text-center font-bold text-lg">Journal</p>
          </div>
        </Link>
        <Link href="/reminders">
          <div className="bg-violet-200 px-6 py-6 flex justify-between items-center flex-col rounded-md space-y-4">
            <img src="/icons-2/drugs.png" alt="drugs" className="w-16 h-16" />
            <p className="w-full text-center font-bold text-lg">Reminder</p>
          </div>
        </Link>
        <div className="bg-violet-200 px-6 py-6 flex justify-between items-center flex-col rounded-md space-y-4">
          <img
            src="/icons-2/heart-attack.png"
            alt="health-check"
            className="w-16 h-16"
          />
          <p className="w-full text-center font-bold text-lg">Health</p>
        </div>
      </div>
    </>
  );
}
