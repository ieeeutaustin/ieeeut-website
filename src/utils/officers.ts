import { OfficerType } from "@/components/OfficerCard/OfficerCard";

const officers: OfficerType[] = [
    {
        name: "Aaron Sulbaran",
        position: "Chair",
        email: "chair@ieeeut.org",
        image: "Aaron.jpg",
    },
    {
        name: "Emily Han",
        position: "Vice Chair",
        email: "vice@ieeeut.org",
        image: "Emily.jpg",
    },
    {
        name: "Brianna Dickson",
        position: "Corporate Director",
        email: "corporate@ieeeut.org",
        image: "Brianna.jpg",
    },
    {
        name: "Anneke Anderson",
        position: "Internal Director",
        email: "internal.dir@ieeeut.org",
        image: "Anneke.jpg",
    },
    {
        name: "Phoebe Franklin",
        position: "Projects Director",
        email: "projects.dir@ieeeut.org",
        image: "Phoebe.jpg",
    },
    {
        name: "Megan Zhang",
        position: "Corporate Liaison",
        email: "liasion@ieeeut.org",
        image: "Megan.jpg",
    },
    {
        name: "Joey Zhang",
        position: "Projects Liason",
        email: "projects.liason@ieeeut.org",
        image: "Joey.jpg",
    },
    {
        name: "Ashlynn Tusneem",
        position: "Membership and Resources Director",
        email: "mr@ieeeut.org",
        image: "Ashlynn.jpg",
    },
    {
        name: "Nathan Argueta",
        position: "Internal Activities and Events Director",
        email: "internal.ae@ieeeut.org",
        image: "Nathan.JPG",
    },
    {
        name: "Theo Ding",
        position: "External Activities and Events Director",
        email: "external.ae@ieeeut.org",
        image: "Theo.jpg",
    },
    {
        name: "Nabil Andrian",
        position: "Communications Director",
        email: "comms@ieeeut.org",
        image: "Nabil.JPG",
    },
    {
        name: "Sammy Attaguile",
        position: "Communications Director",
        email: "comms@ieeeut.org",
        image: "Sammy.JPG",
    },
    {
        name: "Jeslyn Chang",
        position: "Communications Assistant Director",
        email: "comms@ieeeut.org",
        image: "Jeslyn.JPG",
    },
    {
        name: "Gulin Gurbuz",
        position: "Communications Assistant Director",
        email: "comms@ieeeut.org",
        image: "Gulin.JPG",
    },
    {
        name: "Hamza Faisal",
        position: "External Activities and Events Assistant Director",
        email: "external.ae@ieeeut.org",
        image: "Hamza.JPG",
    },
    {
        name: "Connor McKelvey",
        position: "External Activities and Events Assistant Director",
        email: "external.ae@ieeeut.org",
        image: "Connor.JPG",
    },
    {
        name: "Mateo Lopez",
        position: "Internal Activities and Events Assistant Director",
        email: "internal.ae@ieeeut.org",
        image: "Mateo.JPG",
    },
    {
        name: "Chi-Chi Nwosu",
        position: "Internal Activities and Events Assistant Director",
        email: "internal.ae@ieeeut.org",
        image: "Chi-Chi.JPG",
    },
    {
        name: "Kierra Wills",
        position: "Membership and Resources Assistant Director",
        email: "mr@ieeeut.org",
        image: "Kierra.JPG",
    },
];

export function getOfficers(): OfficerType[] {
	return officers;
}