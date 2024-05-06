import { Card } from './Card'; 


export function Courses() {
    const courses = [
        {
            title: 'Corso di React',
            image: '../../img/react2.png', 
            description: 'Impara React da zero a esperto.'
        },
        {
            title: 'Corso di React',
            image: './react2.png', 
            description: 'Impara React da zero a esperto.'
        },
        {
            title: 'Corso di React',
            image: '../react2.png', 
            description: 'Impara React da zero a esperto.'
        },
        {
            title: 'Corso di React',
            image: './react.jpg', 
            description: 'Impara React da zero a esperto.'
        },
        {
            title: 'Corso di React',
            image: '../react2.png', 
            description: 'Impara React da zero a esperto.'
        },
    ];

    return (
        <div>
            <h1>Sono la pagina dei corsi</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {courses.map((course, index) => (
                    <Card
                        key={index}
                        title={course.title}
                        image={course.image}
                        description={course.description}
                    />
                ))}
            </div>
        </div>
    );
}
