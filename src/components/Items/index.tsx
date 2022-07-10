import styles from './styles.module.scss';

interface ItemsProps{
    id:number;
    name:string;
    imageUrl:string;
    listPrice:number;
    sellingPrice:number;
}

export default function Items({id,name,imageUrl,listPrice,sellingPrice}:ItemsProps){
    return(
        <section className={styles.productContent}  key={id}>
            <div className={styles.productImgBlock}>
                <img src={imageUrl}/>
            </div>
            <div className={styles.productInfoBlock}>
                <span>{name}</span>
                <span>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(listPrice/100)}
                </span>
                <span>
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sellingPrice/100)}
                </span>   
            </div>
        </section>
    )
}