import '/resources/css/app.css'

import { useState } from 'react';


import { Content } from "../Components/Content";
import { Filter_Content } from "../Components/Filter_Content";

import { Pagination } from '@/Components/Paginations';


export default function Search({ dataList, status }) {

    const [filterList, setFilterList] = useState(dataList.data);

    return (
        <>
            <div className="container-fluid p-5">
                <h3 className='text-uppercase text-secondary text-center border-bottom'>{status}</h3>
                <Filter_Content dataList={dataList} setFilterList={setFilterList} />
                <Content filterList={filterList} />

                <Pagination links={dataList} />
            </div >
        </>
    )
}