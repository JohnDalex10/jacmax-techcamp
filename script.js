let calcFunc = () => {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;

  if (length !== "" && width !== "") {
    alert(
      `The area of a rectangle with length ${length}cm multiplied by width ${width}cm is ${
        length * width
      }cm^2.`
    );
    location.reload();
  } else if (length !== "" && width == "") {
    alert("Please fill in appropriate values for the WIDTH!");
  } else if (length == "" && width !== "") {
    alert("Please fill in appropriate values for the LENGTH!");
  } else {
    alert("Please fill in appropriate values!");
  }
};
