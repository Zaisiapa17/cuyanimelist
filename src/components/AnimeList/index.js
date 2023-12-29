import Image from 'next/image';

const Animelist = ({title, images}) => {
    return (
        <div className="bg-indigo-500">
            <Image src={images} width={600} height={600}/>
            <h3>{title}</h3>
        </div>
    )
}

export default Animelist;
