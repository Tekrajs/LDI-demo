import Lists from '../interfaces/lists'
export const validate = (data:Lists) => {
    const config = {
        emailAddress: {required:true},
        firstName: {required:true},
        eventId: {required:true},
        eventTitle: {required:true},
        organiserTitle: {required:true},
        organiserId: {required: true}
    }

    return true
}