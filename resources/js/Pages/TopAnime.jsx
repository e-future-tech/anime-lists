import { Head, Link, router } from "@inertiajs/react"

import { FavoriteButtons } from "@/Components/saveButtons"

export default function TopAnime({ dataList }) {

    const filter = [...dataList].sort((a, b) => a.rank - b.rank)

    return (
        <>

            <Head title="Top Anime" />

            <div className="container p-1">
                {
                    filter.map((row) =>
                        <div className="row bg-light mb-2 border rounded-3 shadow" key={row.mal_id}>
                            <div className="col-2 col-md-2 col-lg-2 col-xl-1 d-flex align-items-center justify-content-center px-3">
                                <div>
                                    <span className="text-uppercase">{row.season} {row.year}</span>
                                    <h3 className="m-0">RANK #{row.rank}</h3>
                                    <p>ID: {row.mal_id}</p>
                                </div>
                            </div>

                            <div className="col-4 col-md-4 col-lg-3 col-xl-2">
                                <img src={row.images.webp.image_url} className="object-fit-cover w-100 h-100" />
                            </div>

                            <div className="col-6 col-md-6 col-lg-7 col-xl-9 p-1 position-relative">

                                <div className="position-absolute bottom-0 py-2">
                                    <FavoriteButtons row={row} />
                                </div>

                                <div className="position-absolute bottom-0 end-0 p-2">
                                    ⭐{row.score}
                                </div>


                                <Link className="text-color-mod text-decoration-none fw-bold" href={`/detail/${row.mal_id}`}>
                                    <h5 className="m-0">{row.title.length > 40 ? row.title.slice(0, 40) + '...' : row.title}</h5>
                                </Link>
                                <p>{row.title_english}</p>
                                <p className="m-0"><span className="fw-bold">Type: </span>{row.type} ~ {row.duration}</p>
                                <p className="m-0"><span className="fw-bold">Rating:</span> {row.rating}</p>
                                <p><span className="fw-bold">Status:</span> {row.status}</p>
                                {row.genres.map((genre) =>
                                    <div className="d-inline-block rounded-2 mb-2 me-1 px-2 text-white bg-dark" key={row.mal_id + genre.name}>{genre.name}</div>
                                )}
                                <p>{row.synopsis.slice(0, 130)}...</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}