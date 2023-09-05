import "./Footer.scss";
import IconList from "@/components/IconList/IconList";
import { getURL } from "@/utils/socials";
import Image from "next/image";

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
						"tiktok-white",
						"linkedin-white",
						"email-white",
						"facebook-white",
						"youtube-white"
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
					<a href={getURL("email")}>ieee@ieeeut.org</a>
				</div>
				<Image
					className="footer-logo"
					src="/assets/images/branding/ieee-logo-white.png"
					alt=""
					width={50}
					height={15}
				/>
			</div>
		</div>
	);
}
