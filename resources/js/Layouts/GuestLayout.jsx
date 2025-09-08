import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="p-5 bg-light border rounded-3 shadow-sm mt-5" style={{ width: "30rem" }}>
                {children}
            </div>
        </div>
    );
}
