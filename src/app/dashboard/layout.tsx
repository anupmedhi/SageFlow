import Sidebar from '@/components/dashboard/Sidebar';
import styles from './dashboardLayout.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
