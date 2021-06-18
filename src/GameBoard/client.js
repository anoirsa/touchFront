import fetch from 'unfetch';

export const getRes = () => fetch('/gameboardroute/checkstatus')


export const optionsPerecentages = [
    { option: 'spain', percentage: 50 },
    { option: 'italy', percentage: 25 },
    { option: 'germany', percentage: 10 },
    { option: 'france', percentage: 15 }
  ]