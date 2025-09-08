import { Link } from "@inertiajs/react"
import '/resources/css/app.css'

export function Mini_Content({ data }) {

    return <>

        <div className="container">
            <p className="text-center border-bottom my-2">Top Airing</p>
            <div className="d-flex justify-content-center flex-wrap gap-2">
                {
                    data.map((row) =>
                        <div key={row.mal_id} className="text-center">
                            <Link href={`/detail/${row.mal_id}`} className="img-button text-decoration-none">

                                <img src={row.images.webp.image_url} className="border shadow-sm object-fit-cover" style={{ width: "10rem", height: "17rem" }} />

                                <p className="text-color-mod fw-bold">{row.title.length > 15 ? row.title.slice(0, 15) + "..." : row.title}</p>

                            </Link>
                        </div>
                    )
                }
            </div>
        </div>

    </>
}