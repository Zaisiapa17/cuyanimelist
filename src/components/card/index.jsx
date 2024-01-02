import { Star } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

const Card = ({ title, images, year, rating }) => {
    const titleCard = {
        lineHeight: '1.5 !important',
        maxWidth: '100% !important',
        maxHeight: '100% !important',
        whiteSpace: 'pre-wrap !important',
        wordBreak: 'keep-all !important',
        textOverflow: 'ellipsis !important',
        overflow: 'hidden !important',
        marginBottom: '4px !important',
        minHeight: '16px !important',
        display: '-webkit-box !important',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical !important',
    };

    return (
        <div className="w-40 sm:w-52  sm:h-96 rounded overflow-hidden shadow-md bg-white mt-2 hover:text-amber-600 hover:scale-105 transition-all">
            <div className='w-full h-52 sm:h-72 overflow-hidden'>
                <Image className="w-full h-52 sm:h-full object-cover transition-all" src={images} width={200} height={200} alt="Sunset in the mountains" />
            </div>
            <div className="px-3 py-2">
                <h3 className="font-bold mb-1" style={titleCard}>{title}</h3>
            </div>
            <div className="px-3 pb-2 flex flex-wrap justify-between items-center">
                <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{year}</span>
                <div className="flex gap-1 items-center text-sm font-semibold text-gray-700 mb-2">
                    <div className='text-amber-400'>
                        <Star size={20} />
                    </div>
                    {rating}
                </div>
            </div>
        </div>
    )
}

export default Card;
