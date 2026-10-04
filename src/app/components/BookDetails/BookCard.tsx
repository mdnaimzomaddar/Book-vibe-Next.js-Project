import Link from "next/link";
import { FaRegStar } from "react-icons/fa";

interface Book {
  bookId: string;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags?: string[];
}

const BookCard = ({ book }: { book: Book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 rounded-2xl flex flex-col justify-between">
      <div>
        {/* Image Container with fixed height and centering */}
        <figure className="bg-[#F3F3F3] rounded-2xl h-[230px] flex justify-center items-center p-6">
          <img 
            src={image} 
            alt={bookName} 
            className="h-full max-h-[166px] object-contain mx-auto" 
          />
        </figure>

        <div className="card-body px-0 pb-0 pt-6">
          {/* Tags Section */}
          <div className="flex flex-wrap gap-3">
            {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <span key={index} className="rounded-full bg-[#23BE0A0D] text-[#23BE0A] text-sm font-semibold px-4 py-1">
                  {tag}
                </span>
              ))
            ) : (
              <span className="rounded-full bg-[#23BE0A0D] text-[#23BE0A] text-sm font-semibold px-4 py-1">
                Young Adult
              </span>
            )}
          </div>

          {/* Book Info */}
          <Link href={`/books/${book.bookId}`}>
            <h2 className="card-title text-2xl font-bold text-[#131313] mt-2">
              {bookName}
            </h2>
          </Link>
          <p className="font-medium text-slate-600">
            By: {author}
          </p>
        </div>
      </div>

      {/* Footer Details */}
      <div>
        <div className="border-t border-dashed border-slate-200 my-4"></div>
        <div className="card-actions justify-between items-center text-[#131313] font-medium">
          <span>{category}</span>
          <div className="flex items-center gap-2">
            <span>{rating}</span>
            <FaRegStar className="text-slate-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;