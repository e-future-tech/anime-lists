import '/resources/css/app.css'

import { useState } from 'react';
import { Head } from '@inertiajs/react';

import { Content } from "../Components/Content";
import { Filter_Content } from "../Components/Filter_Content";
import { Search_Content } from "../Components/Search_Content";

export default function Search({ dataList }) {

    const [filterList, setFilterList] = useState(dataList);

    return (
        <>

            <Head title="Search Anime" />

            <div className="container-fluid p-5">



                <Search_Content />
                <Filter_Content dataList={dataList} setFilterList={setFilterList} />
                <Content filterList={filterList} />

            </div >
        </>
    )
}

