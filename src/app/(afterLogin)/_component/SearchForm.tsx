import style from "@/app/(afterLogin)/_component/rightSearchZone.module.css";

type Props = { q?: string };
export default function SearchForm({ q }: Props) {
    return (
        <form className={style.search}>
            <input type="search" />
        </form>
    );
}
