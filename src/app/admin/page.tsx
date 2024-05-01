import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { GoogleSignInButton } from "@/components/AuthButtons/AuthButtons";
import { authOptions } from "@/lib/auth";

export const metadata = {
	title: "Admin | IEEE UT"
};

export default async function Admin(props: any) {
    const session = await getServerSession(authOptions);

    console.log("Session: ", session);
  
    if (session) return redirect("/admin/dashboard");  

	return (
		<div className="flex flex-col bg-white items-center py-[60px]">
			<h2 className="mb-5">Sign in</h2>
            <GoogleSignInButton />
        </div>
	);
}
