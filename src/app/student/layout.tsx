import Sidebar from '@/components/dashboard/Sidebar';
import styles from '../dashboard/dashboardLayout.module.css';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
