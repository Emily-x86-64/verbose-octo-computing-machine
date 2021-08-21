const recruse = (z) => {
      if (z > 0){
         console.log(z)
         recruse(z - 1)
      }
}
recruse(10)
