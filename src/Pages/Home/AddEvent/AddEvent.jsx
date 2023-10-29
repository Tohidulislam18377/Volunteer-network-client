import Swal from 'sweetalert2'
import "./AddEvent.css"

const AddEvent = () => {
    const handelSubmit = (event)=>{
        event.preventDefault();
        const from = event.target;
        const title = from.title.value;
        const date = from.date.value;
        const photo = from.photo.value;
        const addVolunteer= {title,date,photo}
        console.log(addVolunteer);

        fetch('http://localhost:5000/volunteers',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addVolunteer)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'user added Successfully',
                    icon: 'success',
                    
                  })
               
            }
        })
       

    }
    return (
        <>
        <div className="pl-24 pr-24 black">
            <h3 className="title">Add Event</h3>
            <form onSubmit={handelSubmit}>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Add Title" className="input  input-bordered w-full radias" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" placeholder="Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* photo url */}
                <div className="gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               <button className="bg-slate-800 w-full mt-4 h-8 rounded">
               <input className="text-white" type="submit" value="Submit" />
               </button>
            </form>
        </div>
        </>
    );
};

export default AddEvent;