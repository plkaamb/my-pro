import './Details.scss'

interface Experience{
    year: number;
    description: string
  }
  
  interface CVData{
    experience: Experience[];
    education: string[]
  }
  
  const cvData: CVData ={
    experience: [
      {year:2020, description: 'Lorem ipsum'},
      {year: 2023, description: 'Dolor sit amet'}
    ],
    education: ['Lorem Ipsum', 'Dolor sit amet']
  }


const Details = () =>{
    return  (
        <section className='cv-details'>
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map(expirienc =>(
            <li key={expirienc.year}>
              <strong>{expirienc.year}</strong> - {expirienc.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => <li key={index}>{education}</li>)}
        </ul>
      </section>
    )
}

export {Details}