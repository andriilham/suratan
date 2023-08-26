import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { selectResidents } from './Partials/residentsSelects';
import FormResident from './Partials/FormResident';

export default function CreateResident() {
    return (
        <Authenticated>
            <Head title="Tambah Data Warga" />
            <div className="p-6 text-gray-900">
                <h1 className="text-lg md:text-3xl">Data Warga Baru</h1>
                <p className="mt-1 font-normal text-gray-500 dark:text-gray-400">
                    Tambahkan data kependudukan yang baru, isikan berdasarkan
                    data asli dari warga
                </p>
                <p className="font-normal text-gray-500 dark:text-gray-400">
                    <span className="text-red-500">*</span> Mengindikasikan
                    inputan wajib diisi.
                </p>
                <div className="relative mt-4 rounded-lg bg-white p-5 shadow-md md:mt-6">
                    <FormResident />
                </div>
            </div>
        </Authenticated>
    );
}
