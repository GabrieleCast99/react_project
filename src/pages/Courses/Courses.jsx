import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { getCourses } from '../../Services/RESTService';
import Cookies from 'js-cookie';

export function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const token = Cookies.get('token'); // Recupera il token JWT dai cookie
                console.log('Token JWT:', token); // Stampa il token JWT
                const coursesData = await getCourses(token);
                setCourses(coursesData);
            } catch (error) {
                console.error('Si è verificato un errore durante il recupero dei corsi:', error);
            }
        }

        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Sono la pagina dei corsi</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {courses.map((course, index) => (
                    <Card
                        key={index}
                        title={course.nomeCorso} // Assicurati che il campo "nomeCorso" sia presente nell'oggetto corso
                        description={course.descrizioneBreve} // Assicurati che il campo "descrizioneBreve" sia presente nell'oggetto corso
                    />
                ))}
            </div>
        </div>
    );
}
