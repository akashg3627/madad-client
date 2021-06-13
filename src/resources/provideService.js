


const services=[
    {
        key:'1',
        value:"Plasma",
        label:"Plasma",
        key1:"BloodGroup",
        key2:"Date of recovery",
        donorAUTH:false,    
    },
    { 
        key:'2',
        value:"Bed",
        label:"Bed",
        key1:"With/without oxygen",
        key2:"With/ without ventilator",
        donorAUTH:false,    
    },
    {
        key:'3',
        value:"Bed:ICU",
        label:"ICU Bed",
        service:"ICU Bed",
        key1:"Last SPo2",
        key2:"CT score",
        donorAUTH:true   
    },
    {
        key:'4',
        value:"Blood",
        label:"Blood",
        service:"Blood",
        key1:"BloodGroup",
        key2:"No of Units",
        donorAUTH:false,    
    },
    {
        key:'5',
        value:"Oxygen:Cylinder",
        label:"Oxygen Cylinder",
        service:"Oxygen Cylinder",
        key1:"Capacity",
        key2:"Status(full/empty)",
        donorAUTH:true,    
    },
    {
        key:'6',
        value:"Oxygen:Concentrator",
        label:"Oxygen Concentrator",
        service:"Oxygen Concentrator",
        key1:"Capacity",
        key2:"Price",
        donorAUTH:true   
    },
    {
        key:'7',
        value:"Oxygen:Refilling",
        label:"Oxygen Refilling",
        service:"Oxygen Refilling",
        donorAUTH:true   
    },
    {
        key:'8',
        value:"Ambulance",
        label:"Ambulance",
        service:"Ambulance",
        key1:"With/Without oxygen",
        key2:"Capacity",
        donorAUTH:true,    
    },
    {
        key:'9',
        value:"Medicines",
        label:"Medicines",
        service:"Medicines",
        key1:"Home Delivery Available",
        key2:"Night Service",
        donorAUTH:false,    
    },
    
    {
        key:'10',
        value:"Injection:Tocilizumab",
        label:"Tocilizumab",
        service:"Tocilizumab",
        key1:"Dose",
        key2:"Price",
        donorAUTH:true   
    },
    
    {
        key:'11',
        value:"Injection:Remdesivir",
        label:"Remdesivir",
        service:"Remdesivir",
        key1:"Dose",
        key2:"Price",
        donorAUTH:true,    
    },
    {
        key:'12',
        value:"Injection",
        label:"Injection",
        service:"Injection",
        key1:"Name",
        donorAUTH:true,    
    },
    {
        key:'13',
        value:"Food/Tiffin",
        label:"Food/Tiffin",
        service:"Food/Tiffin",
        key1:"Charges",
        key2:"Home Delivery Available(Y/N)",
        donorAUTH:false,    
    },
    {
        key:'14',
        value:"Technical Assistance",
        label:"Technical Assistance",
        service:"Technical Assistance",
        key1:"Timing",
        key2:"Mode of contact",
        donorAUTH: false   
    },
    {
        key:'15',
        value:"Doctor/Medical Assistance",
        label:"Doctor/Medical Assistance",
        service:"Doctor/Medical Assistance",
        key1:"Timing",
        key2:"Mode of contact",
        donorAUTH: true    
    },
    {
        key:'16',
        value:"Counselling",
        label:"Counselling",
        service:"Counselling",
        key1:"Timing",
        key2:"Mode of contact",
        donorAUTH: true     
    },
    {
        key:'17',
        value:"Others:Groceries/Ration",
        label:"Groceries/Ration",
        service:"Groceries/Ration", 
        donorAUTH: false    
    },
    {
        key:'18',
        value:"Others:HomeSanitization",
        label:"Home Sanitization",
        service:"Home Sanitization",
        donorAUTH: false   
    },
    {
        key:'19',
        value:"Others:HomeVisit",
        label:"Home Visit",
        service:"Home Visit",  
        donorAUTH: false  
    },
    {
        key:'20',
        value:"Others:Donation",
        label:"Donation",
        service:"Donation",
        donorAUTH: true    
    },
    {
        key:'21',
        value:"Blood:Plasma",
        label:"Blood+Plasma",
        service:"Blood+Plasma",
        key1:"Blood Group",
        donorAUTH: false   
    },
    {
        key:'22',
        value:"Others:MedicalEquipment",
        label:"Medical Equipment",
        service:"Medical Equipment",
        key1:"List" ,
        donorAUTH: false   
    },
    {
        key:'23',
        value:"Others:FinancialAssistance",
        label:"Financial Assistance",
        service:"Financial Assistance", 
        donorAUTH: false  
    },
    {
        key:'24',
        value:"Others",
        label:"Others",
        service:"Others",
        key1:"Service Name",
        donorAUTH: false   
    },
    ]
    
    export default services;