
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { MdOutlineRestorePage } from "react-icons/md";
const Wishlist = () => {

    const wishData = JSON.parse(localStorage.getItem('wish') || '[]');
    console.log(wishData)
    return (
        <div>

            {
                wishData.map(wish => (

                    <div key={wish.bookId} className="card lg:card-side bg-base-100 shadow-xl my-10 ">
                        <figure><img className="lg:w-96 lg:flex hidden" src={wish.image} /></figure>
                        <div className="card-body space-y-4 lg:flex hidden">


                            <h2 className="card-title text-2xl ">{wish.bookName}</h2>
                            <p className="text-[#131313CC] text-opacity-80" >By. {wish.author}</p>
                            <p className="flex items-center gap-2">

                                <span className="text-[#131313] font-bold">Tag</span> <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] bg-opacity-5 py-1 rounded-md"> {wish.tags[0]} </span > <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] bg-opacity-5 py-1 rounded-md"> {wish.tags[1]} </span>
                                <span className="text-[#131313CC] text-opacity-80 flex items-center"><IoLocationOutline /> Year of Publishing : {wish.yearOfPublishing} </span>


                            </p>

                            <p className="flex items-center gap-3">
                                <span className="flex items-center gap-1"> <SlPeople /> Publisher: {wish.publisher} </span>
                                <span className="flex items-center gap-1"> <MdOutlineRestorePage /> Page : {wish.totalPages} </span>
                            </p>

                            <p className="border-2"></p>

                            <p className="flex items-center gap-3">
                                <span className="text-[#328EFF] bg-[#328EFF] bg-opacity-15 py-2 px-1 rounded-full">Category: {wish.category}</span>
                                <span className="text-[#FFAC33] bg-[#FFAC33] bg-opacity-15 py-2 px-1 rounded-full">Rating: {wish.rating}</span>
                                <span><button className="btn text-white font-medium bg-[#23BE0A] rounded-full">View Details</button></span>
                            </p>



                        </div>

                        <div>
                            <figure><img className="lg:hidden flex" src={wish.image} /></figure>
                            <div className="card-body space-y-4 flex lg:hidden">


                                <h2 className="card-title text-2xl ">{wish.bookName}</h2>
                                <p className="text-[#131313CC] text-opacity-80" >By. {wish.author}</p>
                                <p className="flex items-center gap-2">

                                    <span className="text-[#131313] font-bold">Tag</span> <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] bg-opacity-5 py-1 rounded-md"> {wish.tags[0]} </span > <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] bg-opacity-5 py-1 rounded-md"> {wish.tags[1]} </span>
                                    <span className="text-[#131313CC] text-opacity-80 flex items-center"><IoLocationOutline /> Year of Publishing : {wish.yearOfPublishing} </span>


                                </p>

                                <p className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"> <SlPeople /> Publisher: {wish.publisher} </span>
                                    <span className="flex items-center gap-1"> <MdOutlineRestorePage /> Page : {wish.totalPages} </span>
                                </p>

                                <p className="border-2"></p>

                                <p className="flex items-center gap-3">
                                    <span className="text-[#328EFF] bg-[#328EFF] bg-opacity-15 py-2 px-1 rounded-full">Category: {wish.category}</span>
                                    <span className="text-[#FFAC33] bg-[#FFAC33] bg-opacity-15 py-2 px-1 rounded-full">Rating: {wish.rating}</span>
                                    <span><button className="btn text-white font-medium bg-[#23BE0A] rounded-full">View Details</button></span>
                                </p>



                            </div>
                        </div>


                    </div>

                ))
            }

        </div>
    );
};

export default Wishlist;