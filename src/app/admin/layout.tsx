import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function AdminLayout({children}: any) {
	return (
		<>
			<HeaderSection title="Admin" />
			<>
                {children}
            </>
		</>
	);
}
