import { router } from "@inertiajs/react"
import { useState } from "react";

export function Search_Content() {

    // search
    const [keyword, setKeyword] = useState("");
    const [processing, setProcessing] = useState(false);

    function inputHandler(e) {
        setKeyword(e.target.value)
    }

    function searchHandler(e) {
        e.preventDefault();
        router.get(`/search/${keyword}/1`, {}, {
            preserveScroll: true,
            onStart: () => setProcessing(true),
            onFinish: () => setProcessing(false)
        })
    }

    return (
        <>
            <form onSubmit={searchHandler} className="d-flex gap-1">
                <input className="form-control" type="text" value={keyword} onChange={inputHandler} disabled={processing} />
                <button className="btn btn-outline-dark" disabled={processing}>{processing ? <span className="fw-bold">Loading</span> : "Search"}</button>
            </form>
        </>
    )
}