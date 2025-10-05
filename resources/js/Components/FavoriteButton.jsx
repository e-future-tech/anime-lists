import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export function FavoriteButtons({ row }) {

    const [favoriteBtn, setFavoriteBtn] = useState(row.favorited)

    function favoriteHandler(row) {
        router.post(route(`favorite.store`), {
            mal_id: row.mal_id,
            img: row.images?.webp.large_image_url || row.img,
            title: row.title,
            type: row.type,
            episodes: row.episodes || 0,
            genres: row.genres,
            status: row.status,
            year: row.year || 0,
            rating: row.rating,
            synopsis: row.synopsis,
            score: row.score || 0
        }, {
            preserveScroll: true,
            onFinish: () => setFavoriteBtn(!favoriteBtn),
            onError: (err) => alert(err)
        })
    }

    function unfavoriteHandler(row) {
        router.post(route(`favorite.destroy`), {
            mal_id: row.mal_id,
        }, {
            preserveScroll: true,
            onFinish: () => setFavoriteBtn(!favoriteBtn),
            onError: (err) => alert(err)
        })
    }

    if (favoriteBtn) {
        return <>
            <button onClick={() => unfavoriteHandler(row)} className="btn btn-danger py-0">Unfavorite</button>
        </>
    } else {
        return <>
            <button onClick={() => favoriteHandler(row)} className="btn btn-danger py-0">Favorite</button>
        </>
    }

}