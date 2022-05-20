import { useEffect, useState } from "react";
import { getMapasPublicos } from "../servicios/getMapasPublicos";

const useMapasPub = () => {

    // Estado con la lista de Mapas que recuperamos de la REST API
    const [listaMapas, setListaMapas] = useState([]);

    function obtenerMapas() {

        console.log("hola")
        // Usamos el servicio de obtención de posts que hemos creado
        getMapasPublicos().then(nextMapas => {

            //Cargamos los Mapas en el estado del componente
            setListaMapas(nextMapas);


        });
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerMapas);

    return { listaMapas }
}
export default useMapasPub;