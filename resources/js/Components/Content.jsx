import { Link } from "@inertiajs/react"
import { FavoriteButtons } from "./saveButtons"

export function Content({ filterList }) {

    return (
        <>
            <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 mt-2">
                {filterList.map((item, index) =>

                    <div key={index + item.mal_id} className="col d-flex mb-4">

                        <div className="shadow-sm bg-light rounded-3 overflow-hidden d-flex w-100 border">
                            <div>
                                <img src={item.images?.webp.large_image_url || item.img} className="object-fit-cover shadow-sm" style={{ width: "200px", height: "300px" }} />
                            </div>

                            <div className="p-2 w-100 position-relative">

                                <Link className="text-color-mod text-decoration-none fw-bold" href={`/detail/${item.mal_id}`}>
                                    <h5 className="m-0">{item.title.length > 65 ? item.title.slice(0, 65) + '...' : item.title}</h5>
                                </Link>

                                <p className="mb-2">{item.type || "N/A type"} ~ {item.episodes || 'N/A'}  eps</p>

                                {item.genres.map((genre) =>
                                    <div className="d-inline-block rounded-2 mb-2 me-1 px-2 text-white bg-dark" key={item.mal_id + genre.name}>{genre.name}</div>
                                )}

                                <p className="m-0"><span className="fw-bold">Status:</span> {item.status}</p>
                                <p className="m-0"><span className="fw-bold">Aired Year:</span> {item.aired?.prop.from.year || item.year}</p>
                                <p className="mb-1"><span className="fw-bold">Rating:</span> {item.rating}</p>

                                <p>{item.synopsis ?
                                    item.synopsis.slice(0, 100) + '...' : "No Synopsis Avaible for this"
                                }</p>
                                <div className="position-absolute bottom-0 end-0  p-2 ">
                                    ⭐{item.score || 'N/A'}
                                </div>
                                <div className="position-absolute bottom-0 px-0 py-2">
                                    <FavoriteButtons row={item} />
                                </div>

                            </div>

                        </div >

                    </div>


                )}
            </div >
        </>
    )
}


