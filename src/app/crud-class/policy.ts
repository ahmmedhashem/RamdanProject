

export  class  Signup {
    id          : number;
    StNameEn    : number;
    EdNameEn    : number;
    RdNameEn    : number;
    ThameEn     : number;
    StNameAr    : number;
    EdNameAr    : number;
    RdNameAr    : number;
    ThameAr     : number;
    BirthDate   : number;
    Username    : number;
    Phone       : number;
    Email       : number;
    Password    : number; 
}

//login admin info
export class AdminLogin {
    AdminUsername : number;
    AdminPassword : number;
   
}

//volunteer search
export class VolSearch {
    Phone   : number;
    Name    : number;
    Gov     : number;
    Day     : number;
    Country : number;
    City    : number;
    Place   : number;
    Date    : number;

}



//volunteer search
export class CountO {
    id   : number;
    name    : number;
}

//Absance Value
export class AbsanceVal {
    ID        : number;
    Status    : number;
}

//Edit Country & City
export class EditCountryCity {
    SectionType : number;
    Country     : number;
    NameEn      : number;
    NameAr      : number;
    Image       : number;
    PhoneCode   : number;
    Status      : number;
}

//Country Notes
export class CountryNotes {
    Country      : number;
    NotesEn      : number;
    NotesAr      : number;
    Phone        : number;
}


//Country Notes
export class AddEditLocation {
    NameEn          : number;
    NameAr          : number;
    Country         : number;
    City            : number;
    PersonReq       : number;
    AllowTo         : number;
    MapCode         : number;
    Days            : number;
    AlertMessEn     : number;
    AlertMessAr     : number;
    Active          : number;

}

