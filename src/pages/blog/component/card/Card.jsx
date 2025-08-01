import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
       
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
               <Link to="/blog/add" >
                    <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GgCcbLOoCPHMa-QhDYmBCG_aV9ofEOI3dQ&s" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
               </Link>
            </div>
         
        </>


    )
}

export default Card