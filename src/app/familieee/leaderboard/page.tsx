import HeaderSection from "@/components/HeaderSection/HeaderSection";
import FamLeaderboard from "@/components/FamLeaderboard/FamLeaderboard";
import FamPointHistory from "@/components/FamPointHistory/FamPointHistory";

export const metadata = {
	title: "FamilIEEE Leaderboard | IEEE UT",
	description: "Learn about joining and the perks of being in IEEE UT.",
};

export default function FamilieeeLeaderboard() {
	return (
		<>
			<HeaderSection
				title="Fam Leaderboard"
				image="/assets/images/familieee.jpg"
				imageAlt="Group selfie of familIEEE members"
			/>
			<FamLeaderboard />
			<FamPointHistory />
		</>
	);
}