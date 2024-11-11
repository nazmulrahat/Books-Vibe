import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = () => {
    const books = useLoaderData()

    const { id } = useParams();

    const book = books.find(i => i.bookId == id);



    const { bookName, image, author, tags, totalPages, publisher, yearOfPublishing, rating, review } = book;


    const handleRead = () => {

        const checkData = JSON.parse(localStorage.getItem('read') || "[]");
        const findData = checkData.find(f => f.bookId == book.bookId);
        if (findData) {

            toast.warn("Already Read", {
                theme: "dark"
            })

        }
        else {

            checkData.push(book);
            localStorage.setItem('read', JSON.stringify(checkData))
            toast.success("Successfully Read", {
                theme: "colored"
            })

        }
    }

    const handleWish = () => {
        const wishData = JSON.parse(localStorage.getItem('wish') || '[]');
        const findReadData = JSON.parse(localStorage.getItem('read') || '[]');
        const matchData = wishData.find(f => f.bookId == book.bookId);
        const readData= findReadData.find(f => f.bookId == book.bookId);
        if(readData){
            toast.warning("This book has been read !");
        } else {
        if(matchData){
            toast.warning("This book already added in your wishlist !");
        }
        else{
            wishData.push(book);
            localStorage.setItem('wish', JSON.stringify(wishData));
            toast.success("Successfully Wishlist", {
                theme: "colored"
            })

        }
    }
    }

    return (
        <div className="hero  bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row w-full justify-between">

                <div className="card shrink-0 w-full max-w-md ">
                    <form className="card-body border">
                        <img src={image} alt="" />
                    </form>
                </div>
                <div className=" lg:text-left   w-full text-center">
                    <h1 className="text-5xl font-bold text-[#131313] mb-5">{bookName}</h1>
                    <p className="text-[#131313CC] text-opacity-80 font-medium text-xl mb-5">By. {author}</p>
                    <p className="border-2 mb-4"></p>

                    <p className="text-[#131313B3] text-opacity-70 font-base font-normal"> <span className="text-[#131313] font-bold ">Review :</span> {review}</p>

                    <div className="lg:mt-12 mt-6 flex gap-2 mb-5">
                        <p className="text-[#131313] font-bold text-base">Tags</p>
                        <div>
                            <Link className="bg-[#23BE0A0D] bg-opacity-5 rounded-lg px-4 text-[#23BE0A] text-base font-medium">{tags[0]}</Link>
                            <Link className="bg-[#23BE0A0D] bg-opacity-5 rounded-lg px-4 text-[#23BE0A] text-base font-medium">{tags[1]}</Link>
                        </div>
                    </div>

                    <p className="border-2 mb-5"></p>

                    <div>
                        <p className="font-bold"> <span className="text-[#131313B3] text-opacity-70 font-normal">Number of Pages : </span> {totalPages}</p>
                        <p className="font-bold"> <span className="text-[#131313B3] text-opacity-70 font-normal">Publisher : </span> {publisher}</p>
                        <p className="font-bold"> <span className="text-[#131313B3] text-opacity-70 font-normal">Year of Publishing : </span> {yearOfPublishing}</p>
                        <p className="font-bold"> <span className="text-[#131313B3] text-opacity-70 font-normal">Rating : </span> {rating}</p>

                    </div>

                    <div className="mt-6 flex gap-6">
                        <button onClick={handleRead}
                            className="btn border border-black">Read</button>
                        <button onClick={handleWish}
                            className="btn bg-[#50B1C9]">Wishlist</button>
                    </div>




                </div>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Book;