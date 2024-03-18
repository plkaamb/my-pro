import './Personal.scss'

  interface CVData{
    photo: string;
    name: string;
    lastName: string;
    position: string;
  }
  
  const cvData: CVData ={
    photo: 'Https://placehold.co/400x400?text=KA',
    name: 'Kamil',
    lastName: 'Ambro',
    position: 'Dev',
   
  }


const Personal = () =>{
    return (
        <aside className='cv-personal'>
        <h2>Personal Data</h2>
        <img className='cv-img' src={cvData.photo} alt='zdjecie'></img>
        <p>{cvData.name} {cvData.lastName} </p>
        <small>{cvData.position}</small>
      </aside>
    )
}

export {Personal}