import { AuthLayout } from '@/shared/components/layout/server/AuthLayout';

const Layout = ({ children }: { children: React.ReactNode }) => <AuthLayout>{children}</AuthLayout>;

export default Layout;
