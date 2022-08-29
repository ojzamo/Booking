"reach 0.1";

/*
// function that determines state based on user choices
const contractState = (aChoice, bChoice) => {
  if (aChoice && !bChoice) {
    return B_OUT;
  } else {
    if (!aChoice && bChoice) {
      return A_OUT;
    } else {
      if (!aChoice && !bChoice) {
        return BOTH_OUT;
      } else {
        return BOTH_IN;
      }
    }
  }
};

// shared method signatures
const Shared = {
  ...hasRandom,
  informTimeout: Fun([], Null),
  seeOutcome: Fun([UInt], Null),
};*/

// Reach app starts here
export const main = Reach.App(() => {
  // participant interact interface
  const Admin = Participant("Admin", {});

  const House = Object({
    name: Bytes(256),
    //ratePerNight: [UInt],
    maxNumberOfGuest: UInt,
  });

  const Booking = Object({
    houses: House,
    /*fromDate: Bytes(256),
    toDate: Bytes(256),*/
    numberOfGuest: UInt,
  });

  const Guest = API("Guest", {
    enrollHouse: Fun([Address], Null),
    getBooking: Fun(
      [Address],
      Data({
        None: Null,
        Some: Booking,
      })
    ),
  });

  const BookingEvents = Events({
    addBooking: [Address],
  });
  // initialize the app
  init();

  /*const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout();
    });
  };*/

  Admin.publish();

  const booking = new Map(Address, Booking);

  const currentHouseNumber = parallelReduce(0)
    .invariant(balance() == 0)
    .while(true)
    .api_(Guest.enrollHouse, (bookingId) => {
      return [
        0,
        (ret) => {
          ret(null);
          //BookingEvents.addBooking(bookingId);
          return currentHouseNumber;
        },
      ];
    })
    .api_(Guest.getBooking, (bookingId) => {
      return [
        0,
        (ret) => {
          //assert(!isSome(booking[bookingId]), "Already enrolled");
          ret(booking[bookingId]);
          return currentHouseNumber;
        },
      ];
    });

  commit();
  exit();
});
