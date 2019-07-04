import axios from "axios";

export function loadData(func){
  axios
      .get("assets/raw/products.json")
      .then(response => {
        console.log(response.data);
        const _data = getAllProductHelper(response.data);
        func(_data);
      })
      .catch(err => {
        console.log(err);
      });
}

export function getAllProductHelper(json, products = []) {
  if (json.hasOwnProperty("children")) {
    json.children.forEach(element => {
      getAllProductHelper(element, products);
    });
  } else {
    products.push(json);
  }
  return products;
}

export function onExpiredFilterHelper(originData) {
  const filteredList = originData.filter(item => {
    const warrantyPeriod = parseInt(
      item.warrantyPeriod.slice(0, item.warrantyPeriod.indexOf("year"))
    );
    const extendedWarranty = parseInt(
      item.extendedWarranty.slice(0, item.extendedWarranty.indexOf("year"))
    );
    const sum =
      (isNaN(warrantyPeriod) ? 0 : warrantyPeriod) +
      (isNaN(extendedWarranty) ? 0 : extendedWarranty);

    const tempArr = item.orderedDate.split("/");
    const expiringDate = new Date(
      parseInt(tempArr[2]) + sum,
      tempArr[1],
      tempArr[0]
    );
    const currentDate = new Date();

    //console.log(warrantyPeriod, extendedWarranty, sum);
    return expiringDate - currentDate <= 0;
  });
  return filteredList;
}

export function onExpiringSoonFilterHelper(originData) {
  const filteredList = originData.filter(item => {
    const warrantyPeriod = parseInt(
      item.warrantyPeriod.slice(0, item.warrantyPeriod.indexOf("year"))
    );
    const extendedWarranty = parseInt(
      item.extendedWarranty.slice(0, item.extendedWarranty.indexOf("year"))
    );
    const sum =
      (isNaN(warrantyPeriod) ? 0 : warrantyPeriod) +
      (isNaN(extendedWarranty) ? 0 : extendedWarranty);

    const tempArr = item.orderedDate.split("/");
    const expiringDate = new Date(
      parseInt(tempArr[2]) + sum,
      tempArr[1],
      tempArr[0]
    );
    const currentDate = new Date();
    const bool = expiringDate - currentDate > 0;
    //expiring in next 120 days
    expiringDate.setDate(expiringDate.getDate() - 120);

    //console.log(warrantyPeriod, extendedWarranty, sum);
    return bool && expiringDate - currentDate <= 0;
  });
  return filteredList;
}

export function getPageData(arr, currentPage = 1, pagePerDoc = 9) {
  const lastIndex = currentPage * pagePerDoc;
  const firstIndex = lastIndex - pagePerDoc;
  return arr.slice(firstIndex, lastIndex);
}
