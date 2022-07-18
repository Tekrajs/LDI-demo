export default interface Lists {
        id:string
        bookingDate:string
        emailAddress:string
        firstName:string
        lastName:string
        status: string
        eventId:string
        eventTitle:string
        organiserTitle:string
        organiserId: string
        raceId:string
        raceStartDate:string
        raceTitle:string
        ticketPrice:{
            originalValue:Number,
            value:Number,
            fee:number,
            currencyCode:string
        },
        ticketId:string,
        ticketTitle:string
}