import '/resources/css/app.css'

import { Link, Head } from "@inertiajs/react"


export default function Search({ seasons, title }) {

    return (
        <>
            <div className="container-fluid p-5">
                <Head title={title} />

                {
                    seasons.map((item) =>
                        <div key={item.year}>
                            <div className="d-flex justify-content-center gap-3">
                                {item.seasons.map((season) =>
                                    <Link href={`/seasons/${item.year}/${season}/1`} className="btn btn-outline-dark mb-3" key={season + item.year}>{season + " " + item.year}</Link>
                                )}
                            </div>
                        </div>
                    )
                }

            </div >
        </>
    )
}