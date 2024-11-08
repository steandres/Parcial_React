import React from 'react';
import styles from '../Styles/Card.module.css'; // Importa el módulo CSS

const Card = ({ juego }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <p><strong>Nombre:</strong> {juego.nombre}</p>
                <p><strong>Categoría:</strong> {juego.categoria}</p>
                <p><strong>Calificación:</strong> {juego.calificacion ? juego.calificacion : 'N/A'}</p>
                <p><strong>Favorito:</strong> {juego.favorito ? 'Sí' : 'No'}</p>
            </div>
        </div>
    );
};

export default Card;