import "./Footer.scss";

import IconList from "@/components/IconList/IconList";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-content">
				<IconList
					icons={[
						"gcal-white",
						"instagram-white",
						"slack-white",
						"discord-white",
						"tiktok",
						"linkedin",
						"email-white",
						"facebook",
						"youtube"
					]}
				/>
				<div>
					<p>
						2501 Speedway
						<br />
						EER 0.822
						<br />
						Austin, TX 78712
					</p>
					<a href="mailto:ieee@ieeeut.org">comms@ieeeut.org</a>
				</div>
				<img
					className="footer-logo"
					src="./ieee-logo-white.png"
					alt=""
				/>
			</div>
		</div>
	);
}
