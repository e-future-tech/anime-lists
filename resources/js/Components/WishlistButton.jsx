import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export function WishlistButtons({ row }) {

    const [WishlistBtn, setWishlistBtn] = useState(row.wishlist)

    function WishlistHandler(row) {
        router.post(route(`wishlist.store`), {
            mal_id: row.mal_id,
            img: row.images?.webp.large_image_url || row.img,
            title: row.title,
        }, {
            preserveScroll: true,
            onFinish: () => setWishlistBtn(!WishlistBtn),
            onError: (err) => alert(err)
        })
    }

    function unWishlistHandler(row) {
        router.post(route(`wishlist.destroy`), {
            mal_id: row.mal_id,
        }, {
            preserveScroll: true,
            onFinish: () => setWishlistBtn(!WishlistBtn),
            onError: (err) => alert(err)
        })
    }

    if (WishlistBtn) {
        return <>
            <button onClick={() => unWishlistHandler(row)} className="btn btn-primary py-0">Unwishlist</button>
        </>
    } else {
        return <>
            <button onClick={() => WishlistHandler(row)} className="btn btn-primary py-0">Wishlist</button>
        </>
    }

}