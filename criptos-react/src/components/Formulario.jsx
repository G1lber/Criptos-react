import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hook/useSelectMonedas'
import {monedas} from '../data/monedas'


const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    padding: 10px;
    width:100%;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color:#6366f8;
        cursor:pointer;
    }
`

const Formulario = ({setMonedas}) => {

    //Aqui utiliza el HOOK personalizado
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const[ moneda, SelectMonedas ]= useSelectMonedas('Elige tu Moneda', monedas)
    const[ criptomoneda, SelectCriptomoneda ]= useSelectMonedas('Elige tu Criptomonedas', criptos)
    //Consultar a una API con fetch
    useEffect(()=>{
        const consultarAPI = async()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta= await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(cripto=>{
                const objeto = {
                    id:cripto.CoinInfo.Name,
                    nombre:cripto.CoinInfo.FullName
                }
               return(objeto)
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    },[])
    
    const handleSumit = e=>{
        e.preventDefault()

        if ([moneda, criptomoneda].includes('')) {
            setError(true)

            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

  return (
    <>
        {error && <Error>Todos los campos son Obligatorios</Error>}
        
        <form
            onSubmit={handleSumit}
        >

            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit 
                type="submit" 
                value="Cotizar" 
            />
        </form>
    </>
  )
}

export default Formulario
