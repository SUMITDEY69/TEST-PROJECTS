const Calculate = (form) => {
  const a = form.num.value;
  if (a < 30 && a >= 0) {
   form.result.value = "Fail";
  } else if (a >= 30 && a < 50) {
   form.result.value = "C";
  } else if (a >= 50 && a < 80) {
   form.result.value = "B";
  } else if (a >= 80 && a <= 100) {
    form.result.value = "A";
  } else {
    form.result.value = "Invalid";
  }
};