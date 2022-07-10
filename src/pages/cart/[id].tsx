
import { useRouter } from 'next/router';
import Items from '../../components/Items';
import styles from '../../styles/cart.module.scss';
import { api } from '../../../services/api';
import {useQuery} from 'react-query'
type Item = {
    id:number;
    name:string;
    imageUrl: string;
    listPrice:number;
    sellingPrice:number;
}
type Total = {
    id:string;
    name: string;
    value: number;
}
 type Repository = {
    items: Item[];
    totalizers: Total[]
    values:number;
 }

export default function Cart(){
   
    const router = useRouter();
    const {id} = router.query;
    
    const {data, isLoading, isError} = useQuery('items', async () =>{
        const result = await api(`${id}`)
        const data = await result.data

        return result
    });
    const items = data?.data.map((res:Repository)=>{
        return res.items.map(item =>{
            return (
                <Items key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} listPrice={item.listPrice} sellingPrice={item.sellingPrice} />
            )
        })
    })
    const totalValueItems = data?.data.map((res:Repository)=>{
        return res.totalizers.reduce((a, b) => a + b.value/100, 0)
    })

    return(
        <section className={styles.containerSection}>
            {isLoading 
            ? (
                <p> Carregando... </p>
            )
            : isError ?(<p>Erro no carregamento.</p>)
            :(
           <>
                <div className={styles.title}>
                    <span>Meu Carrinho</span> 
                </div>
                <div className={styles.productContainer} >   
                    {items} 
                </div>  
                <div className={styles.totalContainer} >   
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(Number(totalValueItems))}
                        </span>
                    </div>
                    {Number(totalValueItems) >= 10
                    ?(
                        <div className={styles.shipping}>
                            <span>Parabéns, sua compra tem frete grátis !</span>
                        </div>
                    ) 
                    :   (<></>)
                    }
                </div>
                <footer className={styles.containerFooter} >   
                    <button>Finalizar Compra</button>
                </footer>
           </>
            )
            }
            
        </section>
    )
}