"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export default function AuthComponent() {
	const supabase = createClientComponentClient();

	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
	};

	return (
		<div className="p-5">
			<Navbar />
			<div className="flex justify-center items-center h-80vh">
				<div className="text-center space-y-5">
					<p>
						Application qui te permet d&apos;enregistrer ton temps de travail !
					</p>
					<Button onClick={handleLogin}>Connexion avec github</Button>
				</div>
			</div>
		</div>
	);
}
