import React, { useState } from "react";
import { useAllGroupSessions } from "../hooks/useAllGroupSessions";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const ListView = () => {
  const { data, loading, error } = useAllGroupSessions();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data.length > 0 ? (
         <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
           <TableHead>
           </TableHead>
           <TableBody>
             {data.map((session) => (
               <TableRow
                 key={session.id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell component="th" scope="row">
                   <div>{new Date(session.zonedStartTime.dateTime).toLocaleDateString()}</div>
                   <div>{session.durationInMinutes + " minutter"} </div>
                 </TableCell>
                 <TableCell component="th" scope="row">
                    <div style={{ fontWeight: 'bold' }}> {session.name} </div>
                    <div> {session.instructor} </div>
                 </TableCell>
                 <TableCell align="center">{session.clubName}</TableCell>
                 <TableCell component="th" scope="row">
                 <div> {session.bookingInfo.bookedCount} / {session.bookingInfo.capacity} plasser </div>
                {session.bookingInfo.bookedCount == session.bookingInfo.capacity ? ( 
                    <div> {session.bookingInfo.waitingListCount + " på venteliste"} </div>
                ) : (<div></div>)}
                </TableCell>
                 <TableCell> {session.bookingInfo.memberBookingInfo.bookingState == "NotBooked" ?
                 <div style={{ color: 'red' }}> {session.bookingInfo.memberBookingInfo.bookingState} </div> : ( 
                    <div style={{ color: 'green' }}> {session.bookingInfo.memberBookingInfo.bookingState}</div>
                 ) }</TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
      ) : (
        <p>No sessions available</p>
      )}
    </div>
  );
};

export default ListView;
