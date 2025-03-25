import styled from '@emotion/styled'

const Contendor = styled.div`
    color:#FFF;
    font-family:'Lato', sans-serif;

    display:flex;
    align-items:center;
    gap:1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display:block;
    width:120px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.span`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contendor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagencripto'/>
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio mas alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contendor>
  )
}

export default Resultado