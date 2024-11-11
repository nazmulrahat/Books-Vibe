import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';


const Cards = ({ book }) => {
    // console.log(book);
    const {bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <div>
            <Link to={`/book/${bookId}`} className="card  bg-base-100 shadow-xl hover:border-2 border-[#23BE0A]">
                <figure><img src={image} /></figure>

                <div className="card-body">
                    <div className="flex gap-3 ">
                        <Link className="bg-[#23BE0A0D] bg-opacity-5 rounded-lg px-4 text-[#23BE0A] text-base font-medium">{tags[0]}</Link>
                        <Link className="bg-[#23BE0A0D] bg-opacity-5 rounded-lg px-4 text-[#23BE0A] text-base font-medium">{tags[1]}</Link>

                    </div>
                    <h2 className="card-title text-2xl mb-5 mt-4">{bookName}</h2>
                    <p className="text-[#131313CC] text-opacity-80 font-medium text-base mb-5">By : {author}</p>
                    <p className="border border-dotted mb-5"></p>
                    <div className="flex justify-between">

                        <p className="text-[#131313CC] text-opacity-80 font-medium text-base"> {category}</p>
                        <div className="flex items-center gap-2 ">
                            <p className="text-[#131313CC] text-opacity-80 font-medium text-base"> {rating}</p>
                            <FaRegStar />
                        </div>


                    </div>
                </div>
            </Link>

        </div>
    );


};

Cards.propTypes={
    book: PropTypes.object,
}


export default Cards;