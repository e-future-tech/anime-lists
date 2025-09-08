import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {

    const style = {
        width: "40rem",
        marginBottom: "1rem"
    };


    return (

        <>
            <Head title="Profile" />

            <div className="d-flex justify-content-center">

                <div>
                    <div className='bg-light p-5 border rounded-3 shadow-sm' style={style}>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>

                    <div className='bg-light p-5 border rounded-3 shadow-sm' style={style}>
                        <UpdatePasswordForm />
                    </div>

                    <div className='bg-light p-5 border rounded-3 shadow-sm' style={style}>
                        <DeleteUserForm />
                    </div>
                </div>
            </div>

        </>
    );
}
