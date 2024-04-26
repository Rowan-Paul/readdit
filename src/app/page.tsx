import BookCard from '@/components/BookCard';
import { BookIcon, MicroscopeIcon, UsersIcon } from '@/components/Icons';
import LandingPageSection from '@/components/LandingPageSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <LandingPageSection>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Readdit: Your Personal Book Tracker
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover, track, and connect with fellow book lovers on the ultimate reading platform.
            </p>
          </div>
          <Button>Sign Up for Free</Button>
        </div>
      </LandingPageSection>
      <LandingPageSection darkBackground>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <BookIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xl font-semibold">Track Your Reading</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep a record of the books you&apos;ve read, your progress, and your ratings.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <MicroscopeIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xl font-semibold">Discover New Books</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Explore personalized recommendations and find your next favorite read.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <UsersIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
            <h3 className="text-xl font-semibold">Connect with Readers</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Join a vibrant community of book lovers and share your thoughts.
            </p>
          </div>
        </div>
      </LandingPageSection>
      <LandingPageSection>
        <div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trending Books</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Explore the most popular and highly-rated books on Readdit.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <BookCard title="The Midnight Library" author="Matt Haig" src="/placeholder.svg" />
              <BookCard title="The Invisible Life of Addie LaRue" author="V.E. Schwab" src="/placeholder.svg" />
              <BookCard title="The Seven Husbands of Evelyn Hugo" author="Taylor Jenkins Reid" src="/placeholder.svg" />
              <BookCard title="Where the Crawdads Sing" author="Delia Owens" src="/placeholder.svg" />
            </div>
          </div>
        </div>
      </LandingPageSection>
      <LandingPageSection darkBackground>
        <div className="flex flex-col items-start space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Readdit Community</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Become a part of our vibrant community of book lovers. Share your thoughts, discover new reads, and connect
            with like-minded individuals.
          </p>
          <Button>Sign Up Now</Button>
        </div>
      </LandingPageSection>
    </>
  );
}
