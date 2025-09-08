import { router } from "@inertiajs/react"
import { useState } from "react";

export function Search_Content() {

    // search
    const [keyword, setKeyword] = useState("");
    const [processing, setProcessing] = useState(false);

    function inputHandler(e) {
        setKeyword(e.target.value)
    }

    function searchHandler() {
        router.get(`/search/${keyword}`, {}, {
            preserveScroll: true,
            onStart: () => setProcessing(true),
            onFinish: () => setProcessing(false)
        })
    }

    return (
        <>
            <div className="d-flex gap-1">
                <input className="w-100" type="text" value={keyword} onChange={inputHandler} disabled={processing} />
                <button className="btn btn-outline-dark" onClick={searchHandler} disabled={processing}>{processing ? <span className="fw-bold">Loading</span> : "Search"}</button>
            </div>
        </>
    )
}