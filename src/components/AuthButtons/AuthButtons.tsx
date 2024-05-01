"use client";

import { signIn, signOut } from "next-auth/react";

import Button from '@mui/joy/Button';
import GoogleIcon from '@mui/icons-material/Google';

export function GoogleSignInButton() {
    return (
        <Button
            startDecorator={<GoogleIcon />}
            onClick={() => signIn("google")}
        >
            Sign In with Google
        </Button>
    );
}

export function GoogleSignOutButton() {
    return (
        <Button
            startDecorator={<GoogleIcon />}
            onClick={() => signOut()}
            color="danger"
        >
            Sign Out of Google
        </Button>
    );
}