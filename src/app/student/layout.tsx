import Sidebar from '@/components/dashboard/Sidebar';
import styles from '../dashboard/dashboardLayout.module.css';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <main className={styles.main} style={{ marginLeft: 260, width: 'calc(100% - 260px)', padding: '2.5rem 3rem' }}>
                {children}
            </main>
        </div>
    );
}
