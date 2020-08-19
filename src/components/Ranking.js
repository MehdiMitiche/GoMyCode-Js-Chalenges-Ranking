import React, {useState} from 'react'
import Card from './Card'

const Ranking = () => {
    const [students] = useState([{
        name : "Ameziane Nazim",
        points : "235pts"
    },
    {
        name : "Anis Aouchette",
        points : "235pts"
    },
    {
        name : "Khaled Sofiane Abdelkader",
        points : "180pts"
    },
    {
        name : "Mohamed Abderrezague",
        points : "290pts"
    },
    {
        name : "Mohamed Laldji",
        points : "55pts"
    },
    {
        name : "Mohamed Abd El Hadi Belgherbi",
        points : "210pts"
    },
    {
        name : "Sofiane Hamidi",
        points : "0pts"
    },
    {
        name : "Younes Maafi",
        points : "490pts"
    },
    {
        name : "Lotfi Bouzid",
        points : "175pts"
    },
    {
        name : "Mouna Si Smail",
        points : "220pts"
    }
])
    return(
        <div className="ranking">
            {students.sort((a,b) => {
                if(parseInt(a.points) > parseInt(b.points)) return -1;
                if(parseInt(a.points) === parseInt(b.points)) return 0;
                if(parseInt(a.points) < parseInt(b.points)) return 1;
                return 0
            }).map((student,i) => {
                return <Card key={i} name={student.name} points={student.points} />
            })}
        </div>
    )
}

export default Ranking