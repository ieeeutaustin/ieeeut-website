import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import { loginIsRequiredServer } from "@/lib/auth";

export const metadata = {
	title: "Admin - Dashboard | IEEE UT"
};

export default async function Dashboard() {
	await loginIsRequiredServer();

	return (
		<AdminDashboard />
	);
}
