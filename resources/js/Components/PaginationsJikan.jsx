import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';


export function PaginationJikan({ pageJikan }) {

    const { url } = usePage();

    let filter_url;

    if (pageJikan.current_page <= 9) {
        filter_url = url.slice(0, -1)
    } else if (pageJikan.current_page > 9) {
        filter_url = url.slice(0, -2)
    } else if (pageJikan.current_page > 99) {
        filter_url = url.slice(0, -3)
    }

    const prev = filter_url + (pageJikan.current_page - 1)
    const next = filter_url + (pageJikan.current_page + 1)

    return (
        <div className="d-flex justify-content-between">

            <div>
                showing {pageJikan.items.count} from page {pageJikan.current_page}
            </div>

            <div className='d-flex gap-1'>
                <Link href={prev} className='btn btn-outline-dark' hidden={pageJikan.current_page == 1} >
                    Previous
                </Link>
                <Link href={next} className='btn btn-outline-dark' hidden={pageJikan.current_page == pageJikan.last_visible_page} >
                    Next
                </Link>
            </div>
        </div>
    );
}