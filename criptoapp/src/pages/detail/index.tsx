import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styles from './detail.module.css'

import type { CoinProps } from '../home';

export function Detail(){
    const { cripto } = useParams();
    const navigate = useNavigate();
    const bearerToken = '8571ac447d308a30c013a91cf8235d62f67d56c9c95699cca1d404bf9c400d5e'
    const [coin, setCoin] = useState<CoinProps>()
    const [loading, setLoading] = useState(true)

    interface ResponseData{
        data: CoinProps
    }

    interface ErrorData{
        error: string;
    }
    
    
    type DataProps = ResponseData | ErrorData
    
    
    useEffect(() => {
        async function getCoin(){
            try{
                fetch(`https://rest.coincap.io/v3/assets/${cripto}`, {
                method: 'GET', // Or 'POST', 'PUT', 'DELETE', etc.
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json' // Add other headers as needed
                }
                })
            .then(response => response.json())
            .then((data: DataProps) => {
                

                if("error" in data){
                    navigate("/")
                    return
                }

                const price = Intl.NumberFormat("en-US",{
                style:"currency",
                currency: "USD"
            })

            const priceCompact = Intl.NumberFormat("en-US",{
                style:"currency",
                currency: "USD",
                notation: "compact"
            })

            const resultData = {
                ...data.data,
                formatedPrice: price.format(Number(data.data.priceUsd)),
                formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
                formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr))
            }

                setCoin(resultData)
                setLoading(false)
            })
            
            
            
            }catch(err){
                console.log(err)
                navigate("/")
            }
        }

        getCoin()
    }, [cripto])

    if(loading || !coin){
        return(
            <div className={styles.container}>
                <h4>Carregando detalhes...</h4>
            </div>
        )
    }
    
    return (
        <div className={styles.container}>
            <h1 className={styles.center}>{coin?.name}</h1>
            <h1 className={styles.center}>{coin?.symbol}</h1>
            <section className={styles.content}>
                <img 
                alt="Logo Cripto"
                src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
                className={styles.logo}
                />


               <h1 className={styles.center}>{coin?.name}</h1>
               <h1 className={styles.center}>{coin?.symbol}</h1>

               <p><strong>Preço: </strong> {coin?.formatedPrice}</p>

               <a>
                <strong>Mercado: </strong> {coin?.formatedMarket}
               </a>

               <a>
                <strong>Mudança 24h: </strong> <span className={Number(coin?.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss}>
                    {Number(coin?.changePercent24Hr).toFixed(3)}
                    </span>
               </a>
            
            </section>
        </div>
    )
}