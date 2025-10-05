import { Link } from "@inertiajs/react"

import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

export default function Contents_with_min_info({ dataList, status }) {

    // pertama, potong jadi 5 dulu 
    const [data, setData] = useState(dataList.slice(0, 15));
    const [hasMore, setHasMore] = useState(dataList.length >= 9);


    const fetchMoreData = () => {

        setTimeout(() => {
            const nextData = dataList.slice(0, data.length + 15);
            setData(nextData);

            // jika jmlh nextData >= datalist maka hasmore false
            if (nextData.length >= dataList.length) {
                setHasMore(false);
            }
        }, 1000)
    }


    return (
        <>
            <InfiniteScroll
                dataLength={data.length}   // jumlah data yang sudah tampil
                next={fetchMoreData} // fungsi ambil data tambahan
                hasMore={hasMore}           // kontrol masih ada data atau tidak
                loader={<p className="text-center">Please wait 😄</p>}
                endMessage={<p className="text-center border-top mt-2">End of items</p>}
            >

                <div className="container">
                    <p className="fw-bold text-uppercase text-center pb-1 mb-3 border-bottom border-dark">{status}</p>

                    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {
                            data.map((item) =>
                                <div className="col text-center mb-3" key={item.mal_id}>
                                    <Link className="img-button text-decoration-none" href={`/detail/${item.mal_id}`}>

                                        <img className="border shadow-sm object-fit-cover" src={item.img} style={{ width: '13rem', height: "20rem" }} />
                                    </Link>

                                    <Link className="text-decoration-none text-color-mod fw-bold" href={`/detail/${item.mal_id}`}>
                                        <p className="m-0">{item.title}</p>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}