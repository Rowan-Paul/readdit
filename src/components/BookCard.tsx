import Image from 'next/image';

const BookCard = ({ title, author, src }: { title: string; author: string; src: string }) => (
  <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:translate-y-[-4px]">
    <div className="w-full overflow-hidden rounded-lg">
      <Image alt="Book Cover" className="object-cover w-full" height={150} src={src} width={100} />
    </div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">by {author}</p>
    </div>
  </div>
);

export default BookCard;
