import ReadButtons from "@/app/components/BookDetails/ReadButtons";
import WishLiestButton from "@/app/components/BookDetails/WishLiestButton";

const getBookID = async (bookid : string) => {
  const respons = await fetch("http://localhost:3000/booksData.json");
  const books = await respons.json();

  return books.find((book : string) => book.bookId === parseInt(bookid));
};

const BookDetails = async ({ params }) => {
  const { bookid } = await params;

  const book = await getBookID(bookid);

  return (
    <div className="container mx-auto p-10 grid grid-cols-2 gap-10">
      {/* right side */}
      <div className="flex bg-[#f3f3f3] rounded justify-center items-center pt-20 pb-20">
        <img 
          src={book.image} 
          alt="Book" 
          width={300}
          height={300}
        />
      </div>
      {/* left side */}
      <div className="flex flex-col justify-start">
        <h2 className="text-4xl font-bold">{book.bookName}</h2>

        <p className="text-[16px] font-semibold text-gray-600">By: {book.author}</p>

        <div className="divider" ></div>

        <p className="text-[16px] font-medium text-gray-500">{book.category}</p>

        <div className="divider" ></div>

        <p><strong>Review: </strong>{book.review}</p>

        <div className="flex gap-5 justify-start items-center">
          <p><strong>Tag: </strong></p>
          {
            book.tags.map((tag : string, inx : number) => (
              <span 
                key={inx} 
                className="flex gap-4 bg-[#22be0a25] text-[#23BE0A] p-2 rounded-2xl"
              >
                #{tag}                
              </span>
            ))
          }
        </div>

        <div className="divider" ></div>
        <div className="flex gap-10 p-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-[16px] text-gray-400 font-normal">Number of Pages:</h2>
            <h2 className="text-[16px] text-gray-400 font-normal">Publisher:</h2>
            <h2 className="text-[16px] text-gray-400 font-normal">Year of Publishing:</h2>
            <h2 className="text-[16px] text-gray-400 font-normal">Rating:</h2>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[16px] text-gray-600 font-bold">{book.totalPages}</h2>
            <h2 className="text-[16px] text-gray-600 font-bold">{book.publisher}</h2>
            <h2 className="text-[16px] text-gray-600 font-bold">{book.yearOfPublishing}</h2>
            <h2 className="text-[16px] text-gray-600 font-bold">{book.rating}</h2>
          </div>
        </div>

        <div className="flex gap-4 justify-start items-center">
          <ReadButtons book = {book}></ReadButtons>
          <WishLiestButton book = {book}></WishLiestButton>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
