import React, { useState } from 'react';
import Card from './Card';
import styles from '../Styles/Form.module.css';

const Form = () => {
    const [juego, setJuego] = useState({
        nombre: "",
        categoria: "",
        jugado: false,
        calificacion: undefined,
        favorito: false,
    });
    const [mostrarCard, setMostrarCard] = useState(false);
    const [error, setError] = useState(false);

    const handleChangeNombre = (event) => {
        setJuego({ ...juego, nombre: event.target.value });
    };
    const handleChangeCategoria = (event) => {
        setJuego({ ...juego, categoria: event.target.value });
    };
    const handleChangeJugado = (event) => {
        setJuego({ ...juego, jugado: event.target.value === "true" });
    };
    const handleChangeCalificacion = (event) => {
        setJuego({ ...juego, calificacion: event.target.value });
    };
    const handleChangeFavorito = (event) => {
        setJuego({ ...juego, favorito: event.target.value === "true" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const calificacion = parseInt(juego.calificacion, 10);
        if (
            juego.nombre.trim().length > 3 &&
            juego.categoria.trim().length > 6
        ) {
            setMostrarCard(true);
            setError(false);
        } else {
            setMostrarCard(false);
            setError(true);
        }
    };

    const reset = () => {
        setJuego({
            nombre: "",
            categoria: "",
            jugado: false,
            calificacion: undefined,
            favorito: false,
        });
        setMostrarCard(false);
        setError(false);
    };

    return (
        <>
            <div>
                <h2>Videojuegos</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input 
                            type="text"
                            value={juego.nombre}
                            onChange={handleChangeNombre}
                        />
                    </div>
                    <div>
                        <label>Categoría:</label>
                        <input 
                            type="text"
                            value={juego.categoria}
                            onChange={handleChangeCategoria}
                        />
                    </div>
                    <div>
                        <label>¿Lo has jugado?</label>
                        <input 
                            type="radio"
                            value="true"
                            checked={juego.jugado === true}
                            onChange={handleChangeJugado}
                        />
                        <label>Sí</label>
                        <input 
                            type="radio" 
                            value="false" 
                            checked={juego.jugado === false}
                            onChange={handleChangeJugado}
                        />
                        <label>No</label>
                    </div>
                    {juego.jugado && (
                        <>
                            <div>
                                <label>Calificación: </label>
                                <input 
                                    type="number" 
                                    min="1"
                                    max="5"
                                    value={juego.calificacion || ''}
                                    onChange={handleChangeCalificacion}
                                />
                            </div>
                            <div>
                                <label>¿Es de tus favoritos?</label>
                                <input 
                                    type="radio"
                                    value="true"
                                    checked={juego.favorito === true}
                                    onChange={handleChangeFavorito}
                                />
                                <label>Sí</label>
                                <input 
                                    type="radio"
                                    value="false"
                                    checked={juego.favorito === false}
                                    onChange={handleChangeFavorito}
                                />
                                <label>No</label>
                            </div>
                        </>
                    )}
                    <button type="submit">Agregar juego</button>
                    <button type="button" onClick={reset}>Limpiar formulario</button>
                </form>
                {error && <h4 className={styles.error}>Error, coloque la información correcta</h4>}
            </div>
            {mostrarCard && <Card juego={juego} />}
        </>
    );
};

export default Form;
