//Returns true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    let re =  /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    console.log(re.test(str));
    return re.test(str);
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("555-5555")
  telephoneCheck("1 (555) 555-5555")