import styles from './home.module.css'
import {BsSearch} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useState, type FormEvent, useEffect } from 'react'

export interface CoinProps{
    id: string;
    name: string;
    symbol: string;
    priceUsd: string;
    vwap24Hr: string;
    changePercent24Hr: string;
    maxSupply: string;
    supply: string;
    volumeUsd24Hr: string;
    marketCapUsd: string;
    formatedPrice?: string;
    formatedMarket?: string;
    formatedVolume?: string;
}

interface DataProp{
    data: CoinProps[];

}

//API KEY: 8571ac447d308a30c013a91cf8235d62f67d56c9c95699cca1d404bf9c400d5e
//Rota de verdade: rest.coincap.io/v3/assets
//https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=8571ac447d308a30c013a91cf8235d62f67d56c9c95699cca1d404bf9c400d5e
export function Home(){
    const [input, setInput] = useState("");
    const [coins, setCoins] = useState<CoinProps[]>([]);
    const [offset, setOffset] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [offset])

    async function getData(){
        fetch(`https://rest.coincap.io/v3/assets?limit=10&offset=${offset}&apiKey=8571ac447d308a30c013a91cf8235d62f67d56c9c95699cca1d404bf9c400d5e`)
        .then(response => response.json())
        .then((data: DataProp) => {
            const coinsData = data.data;

            const price = Intl.NumberFormat("en-US",{
                style:"currency",
                currency: "USD"
            })

            const priceCompact = Intl.NumberFormat("en-US",{
                style:"currency",
                currency: "USD",
                notation: "compact"
            })

            const formatedResult = coinsData.map((item) => {
                const formated = {
                    ...item,
                    formatedPrice: price.format(Number(item.priceUsd)),
                    formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
                    formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr))
                }

                return formated
            })
            
            const coinsList = [...coins, ...formatedResult]
            setCoins(coinsList)
        } )
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        
        if(input === "") return;

        navigate(`/detail/${input}`)
    }

    function handleGetMore(){
        if(offset === 0){
            setOffset(10);
            return;
        }

        setOffset(offset + 10);
    }

    return (
        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder='Digite o nome da moeda... EX bitcoin'
                    value={input}
                    onChange={ (e) => setInput(e.target.value)}
                />
                <button type='submit'>
                    <BsSearch size={30} color='#FFF' />
                </button>
            </form>

                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Moeda</th>
                            <th scope='col'>Valor de Mercado</th>
                            <th scope='col'>Preço</th>
                            <th scope='col'>Volume</th>
                            <th scope='col'>Mudança 24h</th>
                        </tr>
                    </thead>

                    <tbody id='tbody'>
                       {coins.length > 0 && coins.map((item) => (
                         <tr className={styles.tr} key={item.id}>
                            <td className={styles.tdLabel} data-label="Moeda">
                                <div className={styles.name}>
                                    <img 
                                    className={styles.logo}
                                    alt="Logo Cripto"
                                    src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                                    />
                                    <Link to={`/detail/${item.id}`}>
                                    <span>{item.name}</span> | {item.symbol}
                                    </Link>
                                </div>
                            </td>

                            <td className={styles.tdLabel} data-label="Valor mercado">
                                {item.formatedMarket}
                            </td>

                            <td className={styles.tdLabel} data-label="Preço">
                                {item.formatedPrice}
                            </td>

                            <td className={styles.tdLabel} data-label="Volume">
                                {item.formatedVolume}
                            </td>

                            <td className={Number(item.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss} data-label="Mudança 24h">
                                <span>{Number(item.changePercent24Hr).toFixed(3)}</span>
                            </td>
                        </tr>
                       ))}
                    </tbody>
                </table>

                <button className={styles.buttonMore} onClick={handleGetMore}>
                    Carregar mais
                </button>
            
        </main>
    )
}