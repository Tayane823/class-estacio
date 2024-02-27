import React from 'react'
import { useState } from 'react' 
import './AjaxRequest.css'


const AjaxRequest = () => {

    const [dogImg, setDogImg] = useState("")

    const handleClick = () => {

        const xmlHttpRequest = new XMLHttpRequest();
        const url = "https://dog.ceo/api/breeds/image/random"

        xmlHttpRequest.open("GET", url, true)

        xmlHttpRequest.onreadystatechange = () => {
            if (xmlHttpRequest.readyState === 3) {
                console.log("carregando o conteúdo")
            }

            if (xmlHttpRequest.readyState === 4) {

                let jsonResponse = JSON.parse(xmlHttpRequest.responseText);

                console.log("Requisição finalizada")
                console.log(`Resultado da requisição ${jsonResponse}`)
                console.log(`Resultado da requisição ${jsonResponse.message}`)

                const dogImageSrc = jsonResponse.message; 
                setDogImg(dogImageSrc)
            }
        };

        xmlHttpRequest.send(null)
    }


    return(
        <div className='principal-div'>
            <h2><strong>Aula 01 - </strong>Aula sobre requisições síncronas e assíncronas</h2>

            <h3>Imagens aleátorias de cães</h3>
            <p>
                A partir do clique do botão abaixo, irá aparecer imagens aleátorias de cães que serão carregadas 
                utilizando requisições assíncronas via <strong>XMLHttpRequest</strong>
            </p>
            <img className='dog-img' src={dogImg} alt='Imagem-de-cachorro'></img>
            <button className='btn btn-primary' onClick={handleClick}>Carregar nova imagem</button>

        </div>
    )
}
export default AjaxRequest;
