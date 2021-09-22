class CountryModel {
    nationality: string;
    direction: string;
    zone: string;
    departament: string;
    municipality: string;
    nearbyHeadquarters: string;
   
    constructor(
        nationality: string,
        direction: string,
        zone: string,
        departament: string,
        municipality: string,
        nearbyHeadquarters: string){
        this.nationality= nationality;
        this.direction= direction;
        this.zone=zone;
        this.departament= departament;
        this.municipality= municipality;
        this.nearbyHeadquarters=nearbyHeadquarters;

    }
}