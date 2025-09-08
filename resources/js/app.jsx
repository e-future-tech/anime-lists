import '../css/app.css';
import './bootstrap';


import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import Layout from './Layouts/Layout';



const appName = "Anime List";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        );

        const Component = page.default || page; // jaga2 kalau default

        return Object.assign(Component, {
            layout: Component.layout || ((page) => <Layout>{page}</Layout>),
        });
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <App
                {...props}
                // override: cek apakah ada layout, kalau ada bungkus
                render={({ Component, key, props }) => {
                    const Page = Component;
                    const content = <Page {...props} key={key} />;
                    return Page.layout ? Page.layout(content) : content;
                }}
            />,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
