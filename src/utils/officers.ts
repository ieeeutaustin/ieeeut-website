import { OfficerType } from "@/components/OfficerCard/OfficerCard";

const officers: OfficerType[] = [
    {
        name: "Aastha Agrawal",
        position: "Chair",
        email: "chair@ieeeut.org",
        image: "Aastha.jpg",
    },
    {
        name: "Jack Son",
        position: "Vice Chair",
        email: "vice@ieeeut.org",
        image: "Jack.jpg",
    },
    {
        name: "Aaron Sulbaran",
        position: "Corporate Director",
        email: "corporate@ieeeut.org",
        image: "Aaron.jpg",
    },
    {
        name: "Joaquin Escobar",
        position: "Internal Director / Webmaster",
        email: "internal.dir@ieeeut.org",
        image: "Joaquin.jpg",
    },
    {
        name: "Ayesha Haider",
        position: "Corporate Liaison",
        email: "liasion@ieeeut.org",
        image: "Ayesha.jpg",
    },
    {
        name: "Amina Meddad",
        position: "Membership and Resources Director",
        email: "mr@ieeeut.org",
        image: "Amina.jpg",
    },
    {
        name: "Anneke Anderson",
        position: "Internal Activities and Events Director",
        email: "internal.ae@ieeeut.org",
        image: "Anneke.jpg",
    },
    {
        name: "Nicklas Di Tirro",
        position: "Internal Activities and Events Director",
        email: "internal.ae@ieeeut.org",
        image: "Nicklas.jpg",
    },
    {
        name: "Brianna Dickson",
        position: "External Activities and Events Director",
        email: "external.ae@ieeeut.org",
        image: "Brianna.jpg",
    },
    {
        name: "Emily Han",
        position: "Communications Director",
        email: "comms@ieeeut.org",
        image: "Emily.jpg",
    },
    {
        name: "Hannah Nguyen",
        position: "Communications Director",
        email: "comms@ieeeut.org",
        image: "Hannah.jpg",
    },
    {
        name: "Phoebe Franklin",
        position: "Communications Assistant Director",
        email: "comms@ieeeut.org",
        image: "Phoebe.jpg",
    },
    {
        name: "Shreya Shetty",
        position: "Communications Assistant Director",
        email: "comms@ieeeut.org",
        image: "Shreya.jpg",
    },
    {
        name: "Megan Zhong",
        position: "External Activities and Events Assistant Director",
        email: "external.ae@ieeeut.org",
        image: "Megan.jpg",
    },
    {
        name: "Theo Ding",
        position: "External Activities and Events Assistant Director",
        email: "external.ae@ieeeut.org",
        image: "Theo.jpg",
    },
    {
        name: "Joey Zhang",
        position: "Internal Activities and Events Assistant Director",
        email: "internal.ae@ieeeut.org",
        image: "Joey.jpg",
    },
    {
        name: "Ashlynn Tusneem",
        position: "Membership and Resources Assistant Director",
        email: "mr@ieeeut.org",
        image: "Ashlynn.jpg",
    },
];

export function getOfficers(): OfficerType[] {
	return officers;
}