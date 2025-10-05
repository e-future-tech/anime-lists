import '/resources/css/app.css'

import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Content } from "../Components/Content";
import { Filter_Content } from "../Components/Filter_Content";

import { Pagination } from '@/Components/Paginations';
import { PaginationJikan } from '@/Components/PaginationsJikan';
import { Search_Content } from "../Components/Search_Content";

export default function Search({ dataList, status, statusPage, pages, title }) {

    const checkDataList = dataList?.data ? dataList.data : dataList;

    const [filterList, setFilterList] = useState(checkDataList);

    return (
        <>
            <div className="container-fluid p-5">

                <Head title={title} />

                <h3 className='text-uppercase text-secondary text-center border-bottom mb-3'>{status}</h3>

                <div className='d-flex justify-content-end'>
                    <Search_Content />
                </div>

                <Filter_Content dataList={checkDataList} setFilterList={setFilterList} />

                <Content filterList={filterList} />

                {
                    statusPage == "pageInternal" ? <Pagination links={pages} /> : null
                }


                {
                    statusPage == "pageJikan" ? <PaginationJikan pageJikan={pages} /> : null
                }
            </div >
        </>
    )
}