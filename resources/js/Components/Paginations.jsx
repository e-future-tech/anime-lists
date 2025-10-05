import { Link } from '@inertiajs/react';

export function Pagination({ links }) {

    console.log(links)

    const stylePageBtn = "text-decoration-none px-2 py-1 rounded-3 border ms-1 text-dark";

    const stylePageBtnActive = "text-decoration-none px-2 py-1 rounded-3 border ms-1 text-sm bg-dark text-light";

    return (
        <div className="d-flex justify-content-between">

            <div className=''>
                Showing {links.from} to {links.to} from {links.total} items
            </div>

            <div>
                {/* array map, links nama property*/}
                {links.links.map((link, index) => (

                    <Link
                        key={index}
                        href={link.url || '#'}
                        // seperti render &laquo jadi html
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        // di setiap link.active : false or true
                        className={link.active ? stylePageBtnActive : stylePageBtn}
                        disabled={link.active}
                    />
                ))}
            </div>
        </div>
    );
}