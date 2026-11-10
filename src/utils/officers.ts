import { OfficerType } from "@/components/OfficerCard/OfficerCard";

const officers: OfficerType[] = [
    {
        name: "Salvatore Attaguile",
        position: "Chair",
        email: "chair@ieeeut.org",
        image: "Sammy.JPG",
    },
    {
        name: "Theo Ryan Ding",
        position: "Vice Chair",
        email: "vice@ieeeut.org",
        image: "Theo.jpg",
    },
    {
        name: "Megan Zhong",
        position: "Corporate Director",
        email: "corporate@ieeeut.org",
        image: "Megan.jpg",
    },
    {
        name: "Nathan Argueta",
        position: "Internal Director",
        email: "internal.dir@ieeeut.org",
        image: "Nathan.JPG",
    },
    {
        name: "Connor McKelvey",
        position: "Projects Director",
        email: "projects.dir@ieeeut.org",
        image: "Connor.JPG",
    },
    {
        name: "Chi-Chi Nwosu",
        position: "Corporate Liaison",
        email: "liasion@ieeeut.org",
        image: "Chi-Chi.JPG",
    },
    {
        name: "Manu Vajha",
        position: "Projects Liason",
        email: "projects.liason@ieeeut.org",
        image: "manu_projLia.JPG",
    },
    {
        name: "Prakhar Sinha",
        position: "Membership and Resources Director",
        email: "mr@ieeeut.org",
        image: "prakhar_mrOff.JPG",
    },
    {
        name: "Zion Onwujuba",
        position: "Internal Activities and Events Director",
        email: "internal.ae@ieeeut.org",
        image: "zion_intOff",
    },
    {
        name: "Jasper Tang",
        position: "External Activities and Events Director",
        email: "external.ae@ieeeut.org",
        image: "jasper_extAE.JPG",
    },
    {
        name: "Kierra Wills",
        position: "Communications Director",
        email: "comms@ieeeut.org",
        image: "Kierra.JPG",
    },
    {
        name: "Gayeon Kim",
        position: "Communications Director",
        email: "comms@ieeeut.org",
        image: "gayeon_commsOff",
    },
    {
        name: "Allison Sobrinho",
        position: "Communications Assistant Director",
        email: "comms@ieeeut.org",
        image: "alliS_commsAO.JPG",
    },
    {
        name: "Illia Denisov",
        position: "Communications Assistant Director",
        email: "comms@ieeeut.org",
        image: "illia_commsAO",
    },
    {
        name: "Adnan Chowdhurry",
        position: "External Activities and Events Assistant Director",
        email: "external.ae@ieeeut.org",
        image: "adnan_extAO.JPG",
    },
    {
        name: "Kara Cao",
        position: "External Activities and Events Assistant Director",
        email: "external.ae@ieeeut.org",
        image: "kara_extAO.JPG",
    },
    {
        name: "Allison Pham",
        position: "Internal Activities and Events Assistant Director",
        email: "internal.ae@ieeeut.org",
        image: "allisonPham_intAO",
    },
    {
        name: "Jon Villegas Ortiz",
        position: "Internal Activities and Events Assistant Director",
        email: "internal.ae@ieeeut.org",
        image: "jon_intAO.JPG",
    },
    {
        name: "Suyash Sharma",
        position: "Membership and Resources Assistant Director",
        email: "mr@ieeeut.org",
        image: "suyash_mrAO.JPG",
    },
	{
        name: "Ian Sendelbach",
        position: "Projects Assistant Liaison",
        email: "projects.liason@ieeeut.org",
        image: "ian_projAO",
    },
	{
        name: "Manuel Escobar",
        position: "Projects Assistant Liaison",
        email: "projects.liason@ieeeut.org",
        image: "manuel_projAO",
    },
];

export function getOfficers(): OfficerType[] {
	return officers;
}
