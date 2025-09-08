import { Link } from "@inertiajs/react"

export default function Recommendations({ dataList, title }) {

    return (
        <>
            <div className="container">

                <p className="fw-bold pb-1 mb-3 border-bottom border-dark">Recommendations like {title} </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {
                        dataList.map((item) =>
                            <div className="col text-center mb-3" key={item.entry.mal_id}>
                                <Link className="img-button text-decoration-none" href={`/detail/${item.entry.mal_id}`}>

                                    <img className=" border shadow-sm object-fit-cover" src={item.entry.images.webp.image_url} style={{ width: '13rem', height: "20rem" }} />
                                </Link>

                                <Link className="text-decoration-none text-color-mod fw-bold" href={`/detail/${item.entry.mal_id}`}>
                                    <p className="m-0 ">{item.entry.title}</p>
                                </Link>

                                <p className="text-center m-0 fs-6">Votes: {item.votes}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}