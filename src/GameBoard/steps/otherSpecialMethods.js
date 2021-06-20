import Cookies from 'universal-cookie';

const setBoxGrid = (borderAdd) => {
    let returnedArray = {display : "flex", flexDirection: "column" , justifyContent : "center" , alignItems :"center"};
    if (borderAdd) returnedArray.borderRight = "0.5px solid #ffffff";
    return returnedArray;
}


const getCookie = () => {
    const cookie = new Cookies();
    return cookie.get("username")
}

const getGobal = async() => {
    try {
      const res = await fetch(`management/api/v1/coners`);
      console.log(res)
      const json = await res.text();
      console.log(json)
      if (json == "log") return true;
      else return false
    } catch (err) {
      console.error('err', err);
      return false
    }
  
  }


  const getStatusForLogin =  () => {
    fetch(`/management/api/v1/coners`).then(res => {
        console.log("No error")
        window.location.href="http://localhost:3000/gameboard"
    }).catch(err => {
        console.log("there is an error")
        
    })
  
  }  


export {setBoxGrid , getCookie , getGobal,getStatusForLogin}