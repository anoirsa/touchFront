import fetch from 'unfetch'

export const getdata = () => fetch("api/v2.1/events",{
    method:"GET",
    headers: {
        "Content-Type": "application/json"
      }
});

