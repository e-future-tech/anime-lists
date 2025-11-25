import { useState } from "react"
import { Link, Head } from '@inertiajs/react'
import { FavoriteButtons } from "@/Components/FavoriteButton"
import { WishlistButtons } from "@/Components/WishlistButton"
import { Search_Content } from "@/Components/Search_Content";

function PlayTrailer({ row, statusPlay, setStatusPlay }) {

    if (statusPlay) {
        return (
            <>
                <iframe className="rounded-3 shadow bg-white" src={row.trailer.embed_url || '/images/novideo.jpg'} style={{ width: '100%', height: '30rem' }} allow="autoplay; fullscreen; encrypted-media"
                    allowfullscreen></iframe>
            </>
        )
    } else {
        return (
            <>
                <button className="border-0 p-0 rounded-3 shadow overflow-hidden w-100 h-100 position-relative" onClick={() => setStatusPlay(true)}>
                    <div>
                        <img src="/images/orange-play-button.png" style={{ width: "20rem" }} className="position-absolute top-50 start-50 translate-middle opacity-50" />
                        <img src={row.trailer.images.maximum_image_url || '/images/no Image Avaible.jpg'} className="w-100 object-fit-cover" style={{ height: '30rem' }} />
                    </div>
                </button>
            </>
        )
    }
}


export default function Detail({ row, title }) {

    const [statusPlay, setStatusPlay] = useState(false)
    const spanScore = 'detail-box text-center fw-bold border-end border-2 border-dark pe-2';

    return (
        <>
            <Head title={title} />



            <div className="container p-5">

                <div className="d-flex justify-content-end mb-2">
                    <Search_Content />
                </div>


                <h4 className="detail-title fw-bold pb-1 mb-0 border-dark border-2 border-bottom">{row.title}</h4>

                <div className="d-flex gap-3 justify-content-end mb-2">
                    <span className={spanScore}>Score ⭐{row.score}</span>
                    <span className={spanScore}>Score_By #{row.scored_by}</span>
                    <span className={spanScore}>Rank #{row.rank}</span>
                    <span className={spanScore}>Popularity #{row.popularity}</span>
                    <span className={spanScore}>Favorites #{row.favorites}</span>
                </div>

                <div className="row position-relative mb-2">
                    <div className="col-12 col-md-5 col-lg-4 col-xl-3 p-1">
                        <img className="w-100 rounded-3 object-fit-cover shadow" src={row.images.webp.large_image_url} style={{ height: '30rem' }} />
                    </div>

                    <div className="col-12 col-md-7 col-lg-8 col-xl-9 p-1">

                        <PlayTrailer row={row} statusPlay={statusPlay} setStatusPlay={setStatusPlay} />

                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-end mb-3">
                    <FavoriteButtons row={row} />
                    <WishlistButtons row={row} />

                    <Link className="btn btn-outline-dark py-0" href={`/recommendations/${row.mal_id}/${row.title}`}>See Recommendations</Link>
                </div>

                {row.genres.map(genre =>
                    <span className="bg-dark text-light rounded-3 px-3 py-1 me-1" key={genre.name}>{genre.name}</span>
                )}

                <div className="row my-2 rounded-3 bg-light shadow mt-2">

                    <div className="col-12 col-md-6 py-3 border">
                        <p className="m-0"><span className="fw-bold">Mal Id: </span>{row.mal_id}</p>
                        <p className="m-0"><span className="fw-bold">Type: </span>{row.type} ~ {row.type != 'Movie' ? row.episodes + " eps" : row.episodes}</p>
                        <p className="m-0"><span className="fw-bold">Duration: </span>{row.duration}</p>
                        <p className="m-0"><span className="fw-bold">Status: </span>{row.status}</p>
                        <p className="m-0"><span className="fw-bold">Year: </span>{row.aired.string}</p>
                        <p className="m-0"><span className="fw-bold">Rating: </span>{row.rating}</p>
                        <p className="m-0"><span className="fw-bold">Producers: </span>{
                            row.producers.map((item, index) =>
                                <span key={item.name}>{item.name}{index < row.producers.length - 1 ? ", " : ""}</span>
                            )
                        }</p>
                    </div>

                    <div className="col-12 col-md-6 py-3 border">
                        <p className="m-0"><span className="fw-bold">Studios: </span>{
                            row.studios.map((item, index) =>
                                <span key={item.name}>{item.name}{index < row.studios.length - 1 ? ", " : ""}</span>
                            )
                        }</p>

                        {
                            row.relations.map(item =>

                                <p className="m-0 fw-bold" key={item.relation} hidden={item.relation == 'Adaptation'}>
                                    {item.relation}:  <Link className="text-decoration-none fw-normal" href={`/detail/${item.entry[0].mal_id}`}>{item.entry[0].name}</Link>
                                </p>
                            )
                        }

                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-12 bg-light border rounded-3 py-3 shadow">
                        <p className="border-bottom pb-1 fw-bold m-0">Sypnopsis</p>
                        <p className="p-2">{row.synopsis}</p>
                    </div>
                </div>

            </div >
        </>
    )
}