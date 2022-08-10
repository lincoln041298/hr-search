import { Header } from "../Header";

export interface MainLayoutProps {
    children?: React.ReactNode
}

export function MainLayout({children}: MainLayoutProps) {
    return (
        <main>
            <Header/>
                <div>{children}</div>
        </main>
    )
}