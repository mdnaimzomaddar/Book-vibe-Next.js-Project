export default interface IBook {
    bookId: number,
    bookName: string,
    author: string,
    image: string,
    review: string,
    totalPages: number,
    rating: number,
    category: string,
    publisher: string,
    yearOfPublishing: number,
    tags: string[]
}