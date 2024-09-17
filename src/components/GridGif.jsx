import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GirdGif = ({category, key}) => {

    const { images, isLoading } = useFetchGifs( category );
    console.log({images, isLoading})

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading ? (<h2 >Cargando...</h2>) : null
                isLoading && (<h2 >Cargando...</h2>)
            }
                        
            <div className="card-grid">
                {
                    images.map((img) => {
                        return <GifItem 
                                    key={img.id} 
                                    {...img}>
                                </GifItem>
                    })
                }
            </div>
        </>
    )
} 