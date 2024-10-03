export interface Groupsession { 
    id: string,
        durationInMinutes: number,
        instructor: string,
        clubName: string,
        name: string,
        bookingInfo: {
            capacity: number,
            bookedCount: number,
            waitingListCount: number,
            memberBookingInfo: {
              participationId: string,
              bookingState: string
            }
          },
          followingBookingCount: number,
          followingBookings: [],
          zonedStartTime: {
            timeZone: string,
            dateTime: Date
          }
}
