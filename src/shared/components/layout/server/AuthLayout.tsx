export const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex min-h-screen bg-blue-50">{children}</div>;
};
