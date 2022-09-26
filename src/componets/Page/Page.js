import { useDispatch, useSelector } from "react-redux";
import { pageCountAC } from "../../redux/page-reduser";


function Page() {
    const { page, limit } = useSelector(state => state.PageReduser)
    const dispatch = useDispatch()


    return (
        <>
            <div>
                <ul >
                    {
                        page.slice(0, limit).map(({ id, title, name }) => {
                            return <li key={id} >
                                <span>Titele : </span> {id}: {title}<br></br>
                                <span>Name : </span>{name}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div>
                {
                    (Array.apply(null, Array(Math.ceil(page.length / 5))).map(function (x, i) { return i; })).map((number) => {
                        return <button key={number}
                            onClick={() => dispatch(pageCountAC((number + 1)))}
                        >
                            {number + 1}
                        </button>
                    })
                }
            </div>
        </>

    )
}

export default Page;