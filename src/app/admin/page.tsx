import HeaderSection from "@/components/HeaderSection/HeaderSection";
import ShortURlTable from "@/components/ShortURLTable/ShortURLTable";

export const metadata = {
	title: "Admin | IEEE UT"
};

export default function Admin() {
	return (
		<>
			<HeaderSection
				title="Admin"
				// image="/assets/images/yoga-2.jpg"
				// imageAlt="Dr. Yerraballi talks with a small group of students around him"
			/>
			<ShortURlTable />
		</>
	);
}
