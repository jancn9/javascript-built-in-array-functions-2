const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let position = carCollection.indexOf(carBrand);
  if (position !== -1){
    console.log(`${carBrand} already exists in position ${position} of the car collection. `)
  }else{
    carCollection.push(carBrand);
    console.log(`New car collection is: ${carCollection.join(", ")}`);
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
updateCarCollection("audi")
//ในกรณีที่มียี่ห้อรถใน carCollection
updateCarCollection("toyota")