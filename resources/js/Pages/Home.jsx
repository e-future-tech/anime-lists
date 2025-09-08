import { Mini_Content } from "../Components/Mini_Content";
import { Head, Link } from "@inertiajs/react"

export default function Home({ dataList }) {

    const style_img = { height: "200px" }

    return (
        <>
            <Head title="Home" />

            <Mini_Content data={dataList} />

            <div className="container my-3">

                <div className="row bg-light border rounded-3 shadow-sm overflow-hidden mb-3">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h1 className="m-0">Top Anime</h1>
                            <p>with highest Rating</p>
                            <Link href="/top" className="btn btn-primary">Top Anime</Link>
                        </div>
                    </div>

                    <div className="col-6 p-0">
                        <img src="/images/cover_1.webp" className="w-100 object-fit-cover" style={style_img} />
                    </div>
                </div>

                <div className="row bg-black text-white border rounded-3 shadow-sm overflow-hidden mb-3">
                    <div className="col-6 p-0">
                        <img src="/images/cover_2.jpg" className="w-100 object-fit-cover" style={style_img} />
                    </div>

                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h1 className="m-0">Seasons</h1>
                            <p>Search Anime by Seasons</p>
                            <Link href="/seasons" className="btn btn-outline-light">Seasonal Anime</Link>
                        </div>
                    </div>
                </div>

                <div className="row bg-dark text-warning border rounded-3 shadow-sm overflow-hidden mb-3">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h1 className="m-0">Search</h1>
                            <p>your favorite anime</p>
                            <Link href="/search" className="btn btn-warning">Search</Link>
                        </div>
                    </div>

                    <div className="col-6 p-0">
                        <img src="/images/cover_3.png" className="w-100 object-fit-cover" style={style_img} />
                    </div>
                </div>
            </div>
        </>
    )
}

