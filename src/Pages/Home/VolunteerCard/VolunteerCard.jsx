import './VolunteerCard.css'

const VolunteerCard = ({volunteer}) => {
    const {title,date,photo}=volunteer
    return (
      
         <div className="card w-52 h-[300px] bg-base-100 shadow-xl px-4 ml-3 mb-4 ">
        <div className='ml-4'>
        <img className='w-36 mt-5 h-[140px]' src={photo} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title w-full">{title}</h2>
          <p>{date}</p>
        </div>
        </div>
      </div>
      
    );
};

export default VolunteerCard;