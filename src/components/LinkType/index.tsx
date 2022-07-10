import Link from "next/link";
interface LinkTypeProps{
    params: string;
    name:string;
}
export function LinkType({params, name}:LinkTypeProps){
    return(
        <Link href={`/cart/${params}`}>
          {name}
        </Link>
    )
}