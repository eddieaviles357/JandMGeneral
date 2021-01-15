'use-strict';

let onMobile = (req) => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    // will check to see if any string matches the Array method .some
    return toMatch.some((toMatchItem) => {
        return req.headers["user-agent"].match(toMatchItem); // returns bool
    });
  }

  module.exports = onMobile;