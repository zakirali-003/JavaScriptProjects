// default parameters JavaScript me ek function feature hai jo agar argument pass na kiya jaye to default value use kar leta hai.
function sum(a = 1, b = 5) {
  return a + b;
}

console.log(sum(2, 8)); // ye dono prams khud sa dya so output 2+8=10 hoga
console.log(sum()); // koi params nahi so default parms add hoga 1+5=6 hoga.
