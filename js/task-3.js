function getElementWidth(content, padding, border) {
  //   Number.parseInt(content, padding);
  //   Number.parseFloat(border);
  let getElementWidth = `${
    Number.parseInt(content) +
    Number.parseInt(padding ** 2) +
    Number.parseFloat(border ** 2)
  }`;
  return getElementWidth;
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
